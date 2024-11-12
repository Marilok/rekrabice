import { SupabaseClient } from "@/types/index";
import createClientServerService from "@/utils/supabase/serverService";
import { ShoptetAcessToken } from "../types";
import { CONFIG } from "../variables";

const redirectUri = `${CONFIG.baseUrl}/api/v1/shoptet/install`;

async function getOAuthAccessToken(code: string): Promise<{
  access_token: string;
  eshopId: string;
  eshopUrl: string;
  contactEmail: string;
}> {
  const response = await fetch(CONFIG.oAuthServerTokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: CONFIG.clientId,
      client_secret: CONFIG.clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
      scope: "api",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Error at ${CONFIG.oAuthServerTokenUrl}:`, errorText);
    throw new Error(`Failed request to ${CONFIG.oAuthServerTokenUrl}`);
  }

  return response.json();
}

async function insertEshopDetails(supabase: SupabaseClient): Promise<string> {
  const { data, error } = await supabase
    .from("eshops")
    .insert({
      brand_name: "TBA",
      legal_name: "TBA",
      ico: 0,
      dic: "0",
      favicon_url: "TBA",
      city: "TBA",
      zip: "0",
      logo_url: "TBA",
      address: "TBA",
    })
    .select()
    .single();

  if (error) {
    console.error("Error inserting into Supabase:", error);
    throw new Error("Failed to store e-shop details");
  }
  return data.eshop_id;
}

async function insertShoptetDetails(
  supabase: SupabaseClient,
  eshop_id: string,
  shoptet_id: string,
  contactEmail: string,
  eshopUrl: string,
  access_token: ShoptetAcessToken,
): Promise<void> {
  const { error } = await supabase.from("eshops_shoptet").insert({
    eshop_id,
    shoptet_id,
    email: contactEmail,
    url: eshopUrl,
    access_token,
  });

  if (error) {
    console.error("Error inserting into Supabase:", error);
    throw new Error("Failed to store e-shop API key");
  }
}

async function createCategory(access_token: ShoptetAcessToken): Promise<void> {
  const response = await fetch(
    `${CONFIG.baseUrl}/api/v1/shoptet/install/createCategory`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken: access_token }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `Error at ${CONFIG.baseUrl}/api/v1/shoptet/install/createCategory:`,
      errorText,
    );
    throw new Error("Failed to create category");
  }
}

async function sendEmail(
  mail: string,
  eshopUrl: string,
  shoptet_id: number | string,
): Promise<void> {
  const response = await fetch(
    `${CONFIG.baseUrl}/api/v1/shoptet/install/notify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, eshopUrl, shoptet_id }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `Error at ${CONFIG.baseUrl}/api/v1/shoptet/install/notify:`,
      errorText,
    );
    throw new Error("Failed to send email");
  }
}

async function createProduct(access_token: ShoptetAcessToken): Promise<void> {
  const response = await fetch(
    `${CONFIG.baseUrl}/api/v1/shoptet/install/createProduct`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken: access_token }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `Error at ${CONFIG.baseUrl}/api/v1/shoptet/install/createProduct:`,
      errorText,
    );
    throw new Error("Failed to create product");
  }
}

async function getTemporaryAccessToken(
  accessToken: ShoptetAcessToken,
): Promise<string> {
  const response = await fetch(CONFIG.getAccessTokenUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error getting temporary access token:", errorText);
    throw new Error("Failed to get temporary access token");
  }

  const { access_token } = await response.json();
  return access_token;
}

async function getWebhooks(token: ShoptetAcessToken) {
  const resp = await fetch("https://api.myshoptet.com/api/webhooks", {
    headers: {
      "Content-Type": "application/vnd.shoptet.v1.0+json",
      "Shoptet-Access-Token": token,
    },
  });

  const responseData = await resp.json();

  if (!resp.ok) {
    throw new Error(`Failed to get webhooks: ${JSON.stringify(responseData)}`);
  }

  return responseData;
}

function getWebhookIdByEvent(webhooks: any, event: any) {
  const matchingWebhook = webhooks.find(
    (webhook: any) => webhook.event === event,
  );
  return matchingWebhook ? matchingWebhook.id : null;
}

async function createWebhook(token: ShoptetAcessToken) {
  const resp = await fetch("https://api.myshoptet.com/api/webhooks", {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.shoptet.v1.0+json",
      "Shoptet-Access-Token": token,
    },
    body: JSON.stringify({
      data: [
        {
          event: "job:finished",
          url: `${CONFIG.baseUrl}/api/v1/shoptet/install/webhook`,
        },
      ],
    }),
  });

  if (!resp.ok) {
    throw new Error(`Failed to create webhook: ${await resp.text()}`);
  }
}

async function insertTemplates(accessToken: ShoptetAcessToken): Promise<void> {
  const response = await fetch(
    `${CONFIG.baseUrl}/api/v1/shoptet/install/insertTemplate`,
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `Error at ${CONFIG.baseUrl}/api/v1/shoptet/install/insertTemplate:`,
      errorText,
    );
    throw new Error("Failed to insert templates");
  }
}

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const supabase = await createClientServerService();

  if (!code) {
    return new Response("Missing code parameter", { status: 400 });
  }

  try {
    const {
      access_token,
      eshopId: shoptet_id,
      eshopUrl,
      contactEmail,
    } = await getOAuthAccessToken(code);
    const eshop_id = await insertEshopDetails(supabase);
    await insertShoptetDetails(
      supabase,
      eshop_id,
      shoptet_id,
      contactEmail,
      eshopUrl,
      access_token,
    );

    const temporaryAccessToken = await getTemporaryAccessToken(access_token);
    const webhooks = await getWebhooks(temporaryAccessToken);
    const eventToMatch = "job:finished";
    const webhookId = getWebhookIdByEvent(webhooks.data.webhooks, eventToMatch);
    if (!webhookId) {
      await createWebhook(temporaryAccessToken);
    }
    await createCategory(temporaryAccessToken);
    await createProduct(temporaryAccessToken);
    await sendEmail(contactEmail, eshopUrl, shoptet_id);
    await insertTemplates(temporaryAccessToken);

    return new Response("Addon installed successfully", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Failed to install", { status: 500 });
  }
}

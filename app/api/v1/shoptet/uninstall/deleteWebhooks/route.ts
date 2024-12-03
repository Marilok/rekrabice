import { NextRequest } from "next/server";
import { ShoptetAcessToken } from "../../types";

async function getWebhooks(accessToken: ShoptetAcessToken) {
  const response = await fetch(`https://api.myshoptet.com/api/webhooks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/vnd.shoptet.v1.0+json",
      "Shoptet-Access-Token": `${accessToken}`,
    },
  });

  const rawResponseText = await response.text();

  if (!response.ok) {
    return new Response(rawResponseText, {
      status: response.status,
    });
  }

  const responseData = JSON.parse(rawResponseText);
  return responseData;
}

async function deleteWehook(accessToken: ShoptetAcessToken, webhookId: string) {
  const response = await fetch(
    `https://api.myshoptet.com/api/webhooks/${webhookId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/vnd.shoptet.v1.0+json",
        "Shoptet-Access-Token": `${accessToken}`,
      },
    },
  );

  const rawResponseText = await response.text();

  if (!response.ok) {
    return new Response(rawResponseText, {
      status: response.status,
    });
  }

  return new Response(rawResponseText, {
    status: 201,
  });
}

function getWebhookIdByEvent(webhooks: any, event: string) {
  const webhook = webhooks.find((webhook: any) => webhook.event === event);
  return webhook.id;
}

export async function DELETE(req: NextRequest) {
  const { accessToken }: { accessToken: ShoptetAcessToken } = await req.json();

  if (!accessToken) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  try {
    const webhooks = await getWebhooks(accessToken);
    if (!webhooks) {
      return new Response("No webhhooks found", {
        status: 201,
      });
    }

    const webhooksToDelete = ["jobs:finished"];

    for (const webhook of webhooksToDelete) {
      const webhookId = getWebhookIdByEvent(webhooks, webhook);
      await deleteWehook(accessToken, webhookId);
    }

    return new Response("Webhooks deleted", {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

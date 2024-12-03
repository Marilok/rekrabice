import createClientServerService from "@/utils/supabase/serverService";
import { ShoptetAcessToken } from "../types";
import { CONFIG } from "../variables";

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

async function getAcessTokenFromEshopId(shoptetId: string): Promise<string> {
  const supabase = await createClientServerService();

  const { data, error } = await supabase
    .from("eshops_shoptet")
    .select("access_token")
    .eq("shoptet_id", shoptetId)
    .single();

  if (error) {
    console.error("Error:", error);
    throw new Error("Failed to get access token");
  }

  return data.access_token;
}

async function removeShoptetData(shoptet_id: string) {
  const supabase = await createClientServerService();

  await supabase.from("eshops_shoptet").delete().eq("shoptet_id", shoptet_id);
}

export async function POST(request: Request): Promise<Response> {
  const { eshopId } = await request.json();
  try {
    const token = await getAcessTokenFromEshopId(eshopId);
    const acessToken = await getTemporaryAccessToken(token);
    await fetch(`${CONFIG.baseUrl}/api/v1/shoptet/uninstall/deleteWebhooks`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Shoptet-Access-Token": acessToken,
      },
    });

    await fetch(`${CONFIG.baseUrl}/api/v1/shoptet/uninstall/deleteProduct`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Shoptet-Access-Token": acessToken,
      },
    });

    await fetch(`${CONFIG.baseUrl}/api/v1/shoptet/uninstall/deleteCategory`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Shoptet-Access-Token": acessToken,
      },
    });

    await fetch(`${CONFIG.baseUrl}/api/v1/shoptet/uninstall/deleteTemplates`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Shoptet-Access-Token": acessToken,
      },
    });

    await removeShoptetData(eshopId);

    return new Response("Addon uninstalled successfully", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Failed to install", { status: 500 });
  }
}

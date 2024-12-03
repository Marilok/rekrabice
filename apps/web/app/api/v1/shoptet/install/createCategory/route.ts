import { NextRequest } from "next/server";
import { ShoptetAcessToken } from "../../types";
import { SHOPTET_CATEGORY_GUID } from "../../variables";

async function createCategory(
  accessToken: ShoptetAcessToken,
): Promise<Response> {
  try {
    const response = await fetch("https://api.myshoptet.com/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.shoptet.v1.0+json",
        "Shoptet-Access-Token": accessToken,
      },
      body: JSON.stringify({
        data: {
          guid: SHOPTET_CATEGORY_GUID,
          name: "ReKrabice (schovaná kategorie)",
          indexName: "rekrabice-hidden-category",
          description:
            "Tato kategorie je skrytá (zákazníci ji nevidí) a slouží pro správné fungování přidávání produktu ReKrabice do košíku a z něj.",
          visible: false,
        },
      }),
    });

    const rawResponseText = await response.text();

    if (!response.ok) {
      return new Response(rawResponseText, {
        status: response.status,
      });
    }

    const responseData = JSON.parse(rawResponseText);
    return new Response(JSON.stringify(responseData), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return new Response("Failed to create category", {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const { accessToken }: { accessToken: ShoptetAcessToken } =
      await req.json();

    if (!accessToken) {
      return new Response("Missing required fields", {
        status: 400,
      });
    }

    return await createCategory(accessToken);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

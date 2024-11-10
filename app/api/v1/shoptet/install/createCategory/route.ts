import { NextRequest } from "next/server";
import { SHOPTET_CATEGORY_GUID } from "../../variables";

export async function POST(req: NextRequest) {
  const { accessToken }: { accessToken: string } = await req.json();

  if (!accessToken) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  try {
    const insertionResponse = await fetch(
      "https://api.myshoptet.com/api/categories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/vnd.shoptet.v1.0+json",
          "Shoptet-Access-Token": `${accessToken}`,
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
      },
    );

    const rawResponseText = await insertionResponse.text();

    if (!insertionResponse.ok) {
      return new Response(rawResponseText, {
        status: insertionResponse.status,
      });
    }

    const responseData = JSON.parse(rawResponseText);
    return new Response(JSON.stringify(responseData), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

import { NextRequest } from "next/server";
import { SHOPTET_CATEGORY_GUID, SHOPTET_PRODUCT_GUID } from "../../variables";

async function updateImage(accessToken: any) {
  const response = await fetch(
    `https://api.myshoptet.com/api/products/${SHOPTET_PRODUCT_GUID}/images/shop`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.shoptet.v1.0+json",
        "Shoptet-Access-Token": `${accessToken}`,
      },
      body: JSON.stringify({
        data: {
          images: [
            {
              sourceUrl: "https://www.rekrabice.cz/branding/ReKrabice_icon.png",
              priority: 100,
              description: "ReKrabice product image",
            },
          ],
        },
      }),
    },
  );

  const rawResponseText = await response.text();
  console.log(rawResponseText);

  if (!response.ok) {
    return new Response(rawResponseText, {
      status: response.status,
    });
  }

  const responseData = JSON.parse(rawResponseText);
  return new Response(JSON.stringify(responseData), {
    status: 201,
  });
}

export async function POST(req: NextRequest) {
  const { accessToken }: { accessToken: string } = await req.json();

  if (!accessToken) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  try {
    const insertionResponse = await fetch(
      `https://api.myshoptet.com/api/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/vnd.shoptet.v1.0+json",
          "Shoptet-Access-Token": `${accessToken}`,
        },
        body: JSON.stringify({
          data: {
            guid: SHOPTET_PRODUCT_GUID,
            type: "product",
            visibility: "visible",
            name: "ReKrabice",
            defaultCategoryGuid: SHOPTET_CATEGORY_GUID,
            variants: [
              {
                code: "REKRABICE",
                price: "49.00",
                currencyCode: "CZK",
              },
            ],

            indexName: "rekrabice",
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

    await updateImage(accessToken);

    const responseData = JSON.parse(rawResponseText);
    return new Response(JSON.stringify(responseData), {
      status: 201,
    });
  } catch (error) {
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

import { NextRequest } from "next/server";
import { ShoptetAcessToken } from "../../types";
import { SHOPTET_PRODUCT_GUID } from "../../variables";

async function deleteProduct(access_token: ShoptetAcessToken) {
  const response = await fetch(
    `https://api.myshoptet.com/api/products/${SHOPTET_PRODUCT_GUID}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/vnd.shoptet.v1.0+json",
        "Shoptet-Access-Token": `${access_token}`,
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

export async function DELETE(req: NextRequest) {
  const { accessToken }: { accessToken: ShoptetAcessToken } = await req.json();

  if (!accessToken) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  try {
    await deleteProduct(accessToken);

    return new Response("Category deleted", {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}

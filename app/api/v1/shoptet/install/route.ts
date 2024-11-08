// app/api/install-addon/route.js

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response("Missing code parameter", { status: 400 });
  }

  console.log(request);

  // Replace these with your actual client ID and secret
  const clientId = "your_client_id";
  const clientSecret = "your_client_secret";
  const redirectUri = "https://yourdomain.com/api/install-addon";
  const oAuthServerTokenUrl =
    "https://yourshop.myshoptet.com/action/ApiOAuthServer/token";

  try {
    const response = await fetch(oAuthServerTokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
        scope: "api",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error obtaining OAuth Access Token:", errorData);
      return new Response("Failed to install ", { status: 500 });
    }

    const { access_token, eshopId, eshopUrl, contactEmail } =
      await response.json();

    // Securely store the access_token and other details in your database
    // Example: await saveToDatabase({ access_token, eshopId, eshopUrl, contactEmail });

    return new Response("Addon installed successfully", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Failed to install ", { status: 500 });
  }
}

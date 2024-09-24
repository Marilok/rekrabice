import { Box, Eshop } from "@/types/index";
import createClientServerService from "@/utils/supabase/serverService";

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request) {
  try {
    const { dataString } = await request.json();

    const apiKey = request.headers.get("api-key");

    if (!apiKey) {
      return new Response("Unauthorized - missing API key", { status: 401 });
    }

    if (!isApiKeyValid(apiKey)) {
      return new Response("Unauthorized", { status: 401 });
    }

    let tracking_name;
    if (dataString.includes("tracking_name")) {
      const url = new URL(dataString);
      tracking_name = url.searchParams.get("tracking_name");
    } else {
      tracking_name = dataString;
    }

    if (!tracking_name) {
      return new Response("Bad Request - missing tracking_name", {
        status: 400,
      });
    }

    if (!/^[A-Z0-9]{8}$/.test(tracking_name)) {
      return new Response("Bad Request - invalid structure of tracking_name", {
        status: 400,
      });
    }

    const supabase = createClientServerService();
    const boxIdResponse = await getBoxFromTrackingName(supabase, tracking_name);

    if (boxIdResponse instanceof Response) {
      return boxIdResponse;
    }

    const eshopIdResponse = await getEshopIdFromApiKey(supabase, apiKey);
    if (eshopIdResponse instanceof Response) {
      return eshopIdResponse;
    }

    const boxId = boxIdResponse;
    const eshopId = eshopIdResponse;

    await insertDispatch(supabase, boxId, eshopId);

    return new Response("OK", { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}

async function getBoxFromTrackingName(
  supabase: any,
  trackingName: Box["tracking_id"],
) {
  const { data, error } = await supabase
    .from("boxes")
    .select("box_id")
    .eq("tracking_id", trackingName)
    .single();

  if (error) {
    if (error.code === "PGRST116" || !data?.box_id) {
      return new Response("Box not found", { status: 404 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }

  return data.box_id;
}

async function getEshopIdFromApiKey(supabase: any, apiKey: string) {
  const { data, error } = await supabase
    .from("eshops_apis")
    .select("eshop_id")
    .eq("api_key", apiKey)
    .single();

  console.log(data || error);
  if (error) {
    if (error.code === "PGRST116" || data?.eshop_id == null) {
      return new Response("Eshop not found or invalid API key", {
        status: 404,
      });
    }
    return new Response("Internal Server Error", { status: 500 });
  }

  return data.eshop_id;
}

function isApiKeyValid(apiKey: string) {
  if (apiKey.length !== 128 || !apiKey.startsWith("re-")) {
    return false;
  }

  return true;
}

async function insertDispatch(
  supabase: any,
  box_id: Box["box_id"],
  eshop_id: Eshop["eshop_id"],
) {
  const { error } = await supabase.from("eshops_sent").insert([
    {
      eshop_id,
      box_id,
    },
  ]);

  if (error) {
    return new Response("Internal Server Error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}

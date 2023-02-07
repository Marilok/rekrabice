import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

type Data = {
  success?: boolean;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const signup = await supabase.rpc("landingpagesignup", {
      usermail: req.body.mail,
    });

    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error });
    console.log(error);
  }
}

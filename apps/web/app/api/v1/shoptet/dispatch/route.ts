import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // check where the request is coming from, if it is from shoptet servers

  // send an email to the customer

  return new NextResponse(null, { status: 200 });
}

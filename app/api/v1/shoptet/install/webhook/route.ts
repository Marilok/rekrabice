import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("Success", { status: 200 });
}

export async function POST() {
  return new NextResponse("Success", { status: 200 });
}

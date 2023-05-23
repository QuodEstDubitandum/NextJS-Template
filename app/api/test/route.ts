import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = "Hello World";
  return NextResponse.json({ data });
}

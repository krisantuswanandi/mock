import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    commission_to_paid: 69420000,
    total_agent: 69,
  });
}

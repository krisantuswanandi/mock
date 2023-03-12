import disbursements from "@/data/disbursements.json";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const disbursement = disbursements.find((d) => `${d.id}` === id);

  return NextResponse.json(disbursement);
}

export async function POST() {
  return NextResponse.json({
    message: "OK",
  });
}

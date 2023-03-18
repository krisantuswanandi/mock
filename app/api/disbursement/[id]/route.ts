import disbursements from "@/data/disbursements.json";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const disbursement = disbursements.find((d) => `${d.id}` === id);

  if (disbursement) {
    return NextResponse.json(disbursement);
  } else {
    return NextResponse.json(
      {
        message: "Data not found",
      },
      { status: 404 }
    );
  }
}

export async function POST() {
  return NextResponse.json({
    message: "OK",
  });
}

export async function PUT() {
  return NextResponse.json({
    message: "OK",
  });
}

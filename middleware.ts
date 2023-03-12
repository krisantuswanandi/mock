import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.method !== "OPTIONS" &&
    request.headers.get("authorization") !== "Bearer token123"
  ) {
    return NextResponse.json(
      {
        error: "invalid_token",
        error_description: "Access token is invalid or expired",
      },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: "/api/:path*",
};

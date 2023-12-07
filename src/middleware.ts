import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-next-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: {
      headers,
    },
  });
}

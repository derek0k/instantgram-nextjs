import { searchUsers } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const keyword = request.nextUrl.pathname.split("search/").pop();

  if (!keyword) {
    return new Response("Invalid Request", { status: 400 });
  }

  return searchUsers(keyword).then((data) => NextResponse.json(data));
}

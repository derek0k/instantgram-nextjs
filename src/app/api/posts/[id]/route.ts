import { auth } from "@/auth";
import { getPost } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const id = request.nextUrl.pathname.split("/").pop();

  if (!id) {
    return new Response("Invalid Request", { status: 400 });
  }

  return getPost(id) //
    .then((data) => NextResponse.json(data));
}

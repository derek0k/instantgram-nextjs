import { getLikedPostsOf, getPostsOf, getSavedPostsOf } from "@/service/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").slice(-2);

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;

  let fetchPosts = getPostsOf;
  if (query === "saved") {
    fetchPosts = getSavedPostsOf;
  } else if (query === "liked") {
    fetchPosts = getLikedPostsOf;
  }

  return fetchPosts(username).then((data) => NextResponse.json(data));
}

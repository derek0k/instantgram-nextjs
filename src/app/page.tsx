// SSR로 렌던링이 된다(사용자의 요청이 올때마다 이 페이지를 렌더링)
// 하지만 이 페이지에서 사용되는 SideBar은 서버컴포넌트(정적인 컴포넌트 - 보여주기만한다)
// 근데 FollowingBar와 Postlist의 경우 사용자의 정보만으로는 충분하지 않다.
// 사용자가 누굴 팔로우하고 있는지 또 각각 데이터를 받아와야한다. 데이터를 서버상에서 해주면 SSR, 데이터를 클라이언트 상태에서 할거면 CSR

import { auth } from "@/auth";
import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/signin");
  }

  return (
    <section className="flex flex-col md:flex-row w-full max-w-[850px] p-4">
      <div className="w-full basis-3/4 min-w-0">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/4 ml-8">
        <SideBar user={user} />
      </div>
    </section>
  );
}

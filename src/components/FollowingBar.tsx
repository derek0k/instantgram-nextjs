"use client";

import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import useMe from "@/hooks/me";

export default function FollowingBar() {
  const { user, isLoading } = useMe();
  const users = user?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20 "
            >
              <Avatar image={image} highlight />
              <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}

"use client";

import { DetailUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following;
  // const users = undefined;
  // const users = data?.following && [
  //   ...data?.following,
  //   ...data?.following,
  //   ...data?.following,
  //   ...data?.following,
  //   ...data?.following,
  // ];

  return (
    <section className="w-fuill flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ul className="w-full flex gap-2 ">
          {users.map(({ username, image }) => (
            <li key={username}>
              <Link
                href={`/user/${username}`}
                className="flex flex-col items-center w-20 "
              >
                <Avatar image={image} highlight />
                <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

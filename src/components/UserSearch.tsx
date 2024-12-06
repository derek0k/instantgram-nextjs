"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import GridSpinner from "./ui/GridSpinner";
import { ProfileUser } from "@/model/user";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("bob");
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>무언가가 잘못 되었습니다</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>찾는 사용자가 없습니다 🥲</p>
      )}
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <p>{user.username}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

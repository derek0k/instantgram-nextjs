import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ username, name, id, email, image }: OAuthUser) {
  return client.createIfNotExists({
    // id 값이 계속 변경되서 들어오므로 임시로 중복을 막기위해서 name으로 지정
    _id: name,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username == "${username}"][0]{
    ...,
    "id":_id,
    following[]->{username,image},
    followers[]->{username,image},
    "bookmarks":bookmarks[]->_id
  }`);
}

export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpoleUser = Pick<User, "username" | "image">;

export type DetailUser = User & {
  following: SimpoleUser[];
  followers: SimpoleUser[];
  bookmarks: string[];
};

export type ProfileUser = User & {
  following: number;
  followers: number;
};

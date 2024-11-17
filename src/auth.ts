import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { addUser } from "./service/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email || !id) {
        return false;
      }
      addUser({
        id: id,
        name: name || "",
        image,
        email,
        username: email.split("@")[0],
      });
      return true;
    },
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});

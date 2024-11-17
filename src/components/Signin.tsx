"use client";

import { signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

export default function Signin() {
  return (
    <ColorButton
      text={`Sign In with Github`}
      onClick={() => signIn("google")}
      size="big"
    />
  );
}

"use client";

import { signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

type Props = {
  callbackUrl: string;
};

export default function Signin({ callbackUrl }: Props) {
  return (
    <ColorButton
      text={`Sign In with Github`}
      onClick={() => signIn("google", { callbackUrl })}
      size="big"
    />
  );
}

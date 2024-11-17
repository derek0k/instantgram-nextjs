import { auth } from "@/auth";
import Signin from "@/components/Signin";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <section className="flex justify-center mt-[30%]">
      <Signin callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}

import { auth } from "@/auth";
import Signin from "@/components/Signin";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

export default async function SignInPage({ searchParams }: Props) {
  const session = await auth();
  const params = await searchParams;

  if (session) {
    redirect("/");
  }

  return (
    <section className="flex justify-center mt-[30%]">
      <Signin callbackUrl={params.callbackUrl ?? "/"} />
    </section>
  );
}

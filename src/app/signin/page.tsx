import { auth } from "@/auth";
import Signin from "@/components/Signin";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <section className="flex justify-center mt-[30%]">
      <Signin />
    </section>
  );
}

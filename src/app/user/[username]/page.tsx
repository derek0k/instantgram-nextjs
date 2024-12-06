import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function UserPage({ params }: Props) {
  const username = (await params).username;
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }
  return <UserProfile user={user} />;
}

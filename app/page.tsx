import SignInForm from "@/components/SignInForm";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div>{process.env.POSTGRES_DATABASE}</div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <SignInForm />
      </div>
    </>
  );
}

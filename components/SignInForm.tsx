"use client";

import { useQuery } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const test = useQuery(["test"], async () => {
    return fetch("/api/test").then((res) => res.json());
  });
  console.log(test);

  return (
    <>
      <div>{process.env.NEXT_PUBLIC_URL}</div>
      <button
        onClick={async () =>
          await signIn("google", {
            callbackUrl: `${process.env.NEXT_PUBLIC_URL}`,
          })
        }
      >
        Sign in with Goo
      </button>
    </>
  );
}

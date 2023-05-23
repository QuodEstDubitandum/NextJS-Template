"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function UserPage({ params }: { params: { user: string[] } }) {
  return (
    <div className="flex flex-row justify-between w-full">
      <div>{decodeURIComponent(params.user.join(" "))}</div>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
    </div>
  );
}

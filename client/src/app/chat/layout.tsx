"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function ChatLayout({ children }: PropsWithChildren) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  if (isSignedIn) {
    return children;
  }

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/login");
    }
  }, []);

  return null;
}

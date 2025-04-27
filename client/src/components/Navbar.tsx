"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function () {
  return (
    <nav className="bg-white shadow w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center flex-wrap">
        <Link href={"/"}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-end gap-2"
          >
            <img src="/icon.png" alt="logo" className="h-9 " />

            <div className="text-xl font-bold text-indigo-600 ">
              Lynkr - AI PDF Chat App
            </div>
          </motion.div>
        </Link>

        <SignedOut>
          <div className="flex items-center space-x-3 ">
            <Link
              href="/login"
              className="py-2 text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="py-2 text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              Register
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

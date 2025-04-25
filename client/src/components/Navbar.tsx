import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

export default function () {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 sticky top-0 bg-white">
      <div className="flex items-center gap-2">
        <img src="/icon.png" alt="logo" className="h-9" />
        <div className="font-bold text-xl">Lynkr - AI PDF Chat App</div>
      </div>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

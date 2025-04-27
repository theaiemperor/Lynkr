import { SignUp } from "@clerk/nextjs";

export default function () {
  return (
    <div className="flex justify-center items-center">
      <SignUp signInUrl="/login" forceRedirectUrl={"/chat"} />
    </div>
  );
}

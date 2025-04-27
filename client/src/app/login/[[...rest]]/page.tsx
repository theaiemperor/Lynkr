import { SignIn } from "@clerk/nextjs";

export default function () {
  return (
    <div className="flex justify-center items-center">
      <SignIn signUpUrl="/register" forceRedirectUrl={"/chat"} />
    </div>
  );
}

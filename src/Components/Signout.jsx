import { SignedOut, useClerk } from "@clerk/clerk-react";

const Signout = () => {
  const { signOut } = useClerk();
  return (
    <div>
      {/* <h1> Sign out </h1> */}
      <SignedOut afterSignOutUrl="/sign-in"></SignedOut>
    </div>
  );
};

export default Signout;

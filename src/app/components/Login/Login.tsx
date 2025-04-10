"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          className="bg-red-700 p-2 rounded-md text-white hover:bg-red-800 transition duration-300 ease-in-out"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
        <h2 className="text-2xl py-4">Please Login</h2>
        <button
          className="bg-stone-700 p-2 rounded-md text-white hover:bg-stone-800 transition duration-300 ease-in-out"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
};

export default Login;

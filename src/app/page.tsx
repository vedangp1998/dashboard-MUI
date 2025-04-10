"use client";

import { SessionProvider } from "next-auth/react";
import Header from "./components/Header/page";
import SideBar from "./components/SideMenu/page";
import Dashboard from "./dashboard/page";
import { useSession } from "next-auth/react";
import Login from "./components/Login/Login";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <AuthContent />
      <Login />
    </SessionProvider>
  );
}

export const AuthContent = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <>
      <SideBar />
      <Dashboard />
    </>
  );
};

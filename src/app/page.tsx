import Header from "./components/Header/page";
import SideBar from "./components/SideMenu/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <Dashboard />
    </>
  );
}

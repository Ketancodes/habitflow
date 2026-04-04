import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
}

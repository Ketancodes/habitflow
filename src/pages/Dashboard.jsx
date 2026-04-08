import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-[#181717]">
        <Sidebar />
        <main className="min-h-screen ml-60 bg-[#181717]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

import Sidebar from "../components/Sidebar";
import { Outlet, Link } from "react-router-dom";
import { Bell, Menu, X, Infinity as InfinityIcon } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-[#181717]">
        <div className="hidden lg:block ">
          <Sidebar className="fixed inset-y-0 left-0 w-60" />
        </div>

        {/* main navbar content hamburger + logo + profile n notification */}
        <header className="fixed left-0 top-0 z-40 flex h-16 w-full items-center justify-between border-b border-[#30313d] bg-[#181717]/95 px-4 text-white backdrop-blur lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#30313d] text-[#d8d5e5]"
          >
            <Menu size={24} />
          </button>

          <Link to="/dashboard" className="flex items-center gap-2">
            <InfinityIcon size={30} className="text-[#7c5cff]" />
            <span className="text-xl font-bold text-white">
              Habit<span className="text-[#7c5cff]">Flow</span>
            </span>
          </Link>

          <Link
            to="/dashboard/notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#30313d] text-[#d8d5e5]"
          >
            <Bell size={22} />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#ef4444]"></span>
          </Link>
        </header>

        {/* mobile drawer sidebar open  */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute inset-0 bg-black/60"
              aria-label="Close sidebar overlay"
            ></button>

            <aside className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-[#30313d] bg-[#1f1d1d] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#30313d] px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <InfinityIcon size={28} className="text-[#7c5cff]" />
                  <span className="text-lg font-bold">
                    Habit<span className="text-[#7c5cff]">Flow</span>
                  </span>
                </div>

                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#30313d] text-[#d8d5e5]"
                >
                  <X size={20} />
                </button>
              </div>

              <Sidebar
                className="h-full w-full border-r-0"
                onNavigate={() => setIsSidebarOpen(false)}
              />
            </aside>
          </div>
        )}
        <main className="min-h-screen  bg-[#181717] pt-16 lg:pt-0 lg:ml-60">
          <Outlet />
        </main>
      </div>
    </>
  );
}

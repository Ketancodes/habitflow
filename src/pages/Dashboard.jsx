import Sidebar from "../components/Sidebar";
import Today from "./Today";
export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar />
        <Today />
      </div>
    </>
  );
}

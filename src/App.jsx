import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MainDashboard from "./pages/MainDashboard";
import Today from "./pages/Today";
import Myhabits from "./pages/Myhabits";
import Progress from "./pages/Progress";
import Streaks from "./pages/Streaks";
import Calendar from "./pages/Calendar";
import Goals from "./pages/Goals";
import Journal from "./pages/Journal";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainDashboard />} />
          <Route path="today" element={<Today />} />
          <Route path="myhabits" element={<Myhabits />} />
          <Route path="progress" element={<Progress />} />
          <Route path="streaks" element={<Streaks />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="goals" element={<Goals />} />
          <Route path="journal" element={<Journal />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
//  bg-linear-to-b from-slate-50 via-white to-blue-50

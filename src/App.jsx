import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Features from "./components/Features";
import Placeholder from "./components/Placeholder";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Herosection />
        <Features />
        <Placeholder />
      </div>
    </>
  );
}

export default App;
//  bg-linear-to-b from-slate-50 via-white to-blue-50

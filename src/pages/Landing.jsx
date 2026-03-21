import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Features from "../components/Features";
import Placeholder from "../components/Placeholder";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Herosection />
        <Features />
        <Placeholder />
        <Cta />
        <Footer />
      </div>
    </>
  );
}

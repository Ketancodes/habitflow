import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Features from "../components/Features";
import Placeholder from "../components/Placeholder";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(circle_at_72%_22%,rgba(109,92,255,0.22),transparent_30%),radial-gradient(circle_at_85%_62%,rgba(124,58,237,0.16),transparent_32%),linear-gradient(180deg,#030612_0%,#050816_45%,#07051a_100%)] text-white">
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

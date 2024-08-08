import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <HeroSection />
    </main>
  );
}

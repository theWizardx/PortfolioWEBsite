import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Guestbook from "@/components/Guestbook";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <TechStack />
      <About />
      <Guestbook />
      <Contact />
    </div>
  );
}

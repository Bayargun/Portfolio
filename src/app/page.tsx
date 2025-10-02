import { Contact } from "./components/Contact";
import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

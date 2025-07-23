import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MyJourney from "@/components/MyJourney";
import MyProjects from "@/components/MyProject";

export default function Home() {
  return (
    <div className=" flex flex-col justify-start items-center space-y-10 overflow-x-hidden">
      <Hero />
      <Intro />
      <MyJourney />
      <MyProjects />
      <Contact />
    </div>
  );
}

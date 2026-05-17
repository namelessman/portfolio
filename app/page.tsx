import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <TopBar />
      <ScrollEffects />
      <main
        className="ml-14 sm:ml-20 md:ml-32 h-screen flex flex-col w-[calc(100vw-3.5rem)] sm:w-[calc(100vw-5rem)] md:w-[calc(100vw-8rem)] overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
        data-scroll-container
      >
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

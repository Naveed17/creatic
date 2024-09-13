import Image from "next/image";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import Counter from "./components/counter";
import LatestProjects from "./components/latestProjects";
import WhyUs from "./components/whyus";
import Testimonials from "./components/testimonials";
import GetInTouch from "./components/getInTouch";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <About />
      <Services />
      <Counter />
      <LatestProjects />
      <WhyUs />
      <div className="overflow-hidden">
        <Testimonials />
      </div>
      <GetInTouch />
    </main>
  );
}

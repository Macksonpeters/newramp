import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Feature from "@/components/features/feature";
import Hero from "@/components/hero/hero";
import OurStory from "@/components/our story/story";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Feature />
      <OurStory />
      <Contact />
    </div>
  );
}

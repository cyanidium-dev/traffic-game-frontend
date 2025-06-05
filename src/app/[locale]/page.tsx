import About from "@/components/home/about/About";
import Benefits from "@/components/home/benefits/Benefits";
import Blog from "@/components/home/blog/Blog";
import Hero from "@/components/home/hero/Hero";
import Offers from "@/components/home/offers/Offers";
import Partners from "@/components/home/partners/Partners";
import Vacancies from "@/components/home/vacancies/Vacancies";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Partners />
      <About />
      <Vacancies />
      <Blog />
      <Offers />
    </>
  );
}

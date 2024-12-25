import { Section } from "./_components/section";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />
    </div>
  );
}

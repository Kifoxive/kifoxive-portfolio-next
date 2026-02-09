"use server";

import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import WhatIDo from "./WhatIDo";
import WhyMe from "./WhyMe";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
      <WhatIDo />
      <WhyMe />
      <Contact />
    </div>
  );
}

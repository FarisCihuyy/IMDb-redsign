import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-20 bg-[url('/assets/images/banner.png')] bg-cover overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-black/80"></div>
      <div className="absolute left-0 top-0 w-1/2 bottom-0 bg-gradient-to-l from-transparent to-black/80"></div>
      <div className="relative z-10 space-y-6 max-w-md">
        <h1 className="font-bold text-5xl">Dune: Part Two</h1>
        <div className="flex gap-2.5 text-xs">
          <span className="border rounded-full px-4 py-2">Action</span>
          <span className="border rounded-full px-4 py-2">Advanture</span>
          <span className="border rounded-full px-4 py-2">Drama</span>
        </div>
        <p className="text-sm">
          Paul Atreides unites with Chani and the Fremen while seeking revenge
          against the conspirators who destroyed his family.
        </p>
        <h3 className="font-bold text-sm">In Theaters</h3>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Cta from "./Cta";

export default function Hero({}) {
  return (
    <section>
      <h1 className="container text-display-lg md:text-display-2xl font-medium text-center mt-20">
        Make <span className="italic">your home</span> an ode to joy
      </h1>
      <p className="mt-10 mx-auto text-center text-body-xl font-light w-3/5 text-neutral-700"> We turn your empty house to a lovely home, making the compact spaces with sapce saving furnitures. Making the unique tastes of yours into reality!</p>
      <div className="overflow-hidden relative">
        <div className="absolute translate-y-1/3 left-1/2 -translate-x-1/2  lg:left-28 z-10">
          <Cta />
        </div>
        <img src="./images/hero.webp" alt="" className="mt-24 object-cover" />
      </div>
    </section>
  );
}

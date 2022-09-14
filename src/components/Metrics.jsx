import React from "react";

export default function Metrics({}) {
  return (
    <section className="container grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 my-12 gap-8 place-items-center ">
      <MetricItem number="100%" content="satisfitation clients"/>
      <MetricItem number="250" content="employees on worldwide"/>
      <MetricItem number="3469" content="projects completed on 60 countries"/>
    </section>
  );
}

function MetricItem({number,content,classes = ""}) {
  return (
    <div className={"grid grid-cols-2 grid-rows-1 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center gap-4 " + classes}>
      <h5 className="text-display-xl text-right md:text-left lg:text-right -translate-y-2">{number}</h5>
      <p style={{letterSpacing: 1.5,}} className="text-body-sm font-normal uppercase">{content}</p>
    </div>
  );
}

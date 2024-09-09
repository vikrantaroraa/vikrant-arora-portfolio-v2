import React, { ElementType } from "react";

const TechIcon = ({ component }: { component: ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="absolute size-0">
        <linearGradient id="tech-icon-gradient">
          <stop offset={"0%"} stopColor="rgb(110 231 183)" />
          <stop offset={"100%"} stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;

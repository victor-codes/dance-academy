import React, { useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { animated, Transition, config } from "react-spring";
export const Button = () => {
  const [hover, setHover] = useState(false);
  return (
    // <Transition
    //   from={{ opacity: 0 }}
    //   enter={{ opacity: 1 }}
    //   leave={{ opacity: 0 }}
    //   delay={200}
    //   config={config.molasses}
    // >
      <div
        className="button_hover"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onMouseOver={() => {
          setHover(true);
        }}
        onClick={() => {
          setHover(true);
        }}
      >
        <button>Learn more {hover ? <ArrowIcon /> : ""}</button>
        <div className="button_under"></div>
      </div>
    // </Transition>
  );
};

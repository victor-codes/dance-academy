import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

export const ArrowIcon = () => {
  const [props, api] = useSpring(
    {
      from: { x: -10, opacity: 0 },
    },
    []
  );

  useEffect(() => {
    api.start({ x: 0, opacity: 1, delay: 0, config: config.wobbly });
  }, []);

  return (
    <animated.svg
      width="24"
      style={props}
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12.5H3M17 8.5L21 12.5L17 8.5ZM21 12.5L17 16.5L21 12.5Z"
        stroke="#FFE010"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </animated.svg>
  );
};

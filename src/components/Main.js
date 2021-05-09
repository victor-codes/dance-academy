import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./Main.module.css";
import { animated, useSpring, config } from "react-spring";
import { ChervonLeft } from "./assets/icon/ChervonLeft";
import { ChervonRight } from "./assets/icon/ChervonRight";
export default function Main() {
  const width = window.innerWidth;

  const [props, api] = useSpring(
    {
      from: { x: width, opacity: 0 },
    },
    []
  );

  useEffect(() => {
    api.start({ x: 0, opacity: 1, delay: 200, config: config.molasses });
  }, []);

  return (
    <>
        <div className={styles.left_background}></div>
        <div className={styles.right_background}></div>
        <div className={styles.center_image}>
          <animated.img
            className={styles.cener_image}
            style={props}
            src="https://res.cloudinary.com/victorcodes/image/upload/v1620485694/Dance%20Academy/photo-1596128124912-11e7648a8533-removebg_zmesnc.png"
            alt=""
          />
        </div>
        <div className={styles.hero}>
          <h1 className={styles.hug_content}>
            <span style={{ textAlign: "left" }} className={styles.hero_small}>
              Feel the
            </span>
            <div className={styles.hero_big}>
              <span>DANCE</span>
              <span>RHYTHM</span>
            </div>
            <span className={styles.hero_small}>inside your soul</span>
          </h1>
        </div>
        <div className={styles.more_info}>
          <div className={styles.left_info}>
            <svg
              width="3"
              className={styles.svg}
              height="120"
              viewBox="0 0 3 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="3" height="120" fill="white" />
            </svg>
            <div className={styles.left_info_text}>
              <span>Open master classes</span>
              <span>09.23.2017</span>
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <animated.p style={props}>Comtemporary dance style</animated.p>
          <div className={styles.gap}>
            <ChervonLeft />
            <ChervonRight />
          </div>
        </div>
    </>
  );
}

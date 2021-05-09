import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./About.module.css";
import { Button } from "./assets/icon/Button";

export default function About() {
  return (
    <div>
      {/* <Parallax pages={1.5}> */}
      <ParallaxLayer
        // style={{ height: "490px" }}
        offset={1}
        speed={1}
        className={styles.flex}
      >
        {/* <ParallaxLayer offset={1} speed={0.5} className={styles.flex}> */}
        <img
          className={styles.img}
          src="https://res.cloudinary.com/victorcodes/image/upload/v1620489730/Dance%20Academy/Annotation_2021-05-05_222826_twy6pv.jpg"
          alt=""
        />
        <div className={styles.center}>
          <h2 className={styles.about}>About Us</h2>
          <p className={styles.about_text}>
            At the Heartbeat Dance Academy, we have established a comprehensive
            collection of classes in order to offer you a complete dance
            education. Whether your intentions are to pursue a career in dance
            or enjoy a fun hobby, we offer you the knowledge and experience to
            achieve your goal!
          </p>
          <Button />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        // style={{ height: "490px" }}
        offset={1.7}
        speed={.8}
        className={styles.column_inverse}
      >
        <img
          className={styles.img}
          src="https://res.cloudinary.com/victorcodes/image/upload/v1620489730/Dance%20Academy/Annotation_2021-05-05_222826_twy6pv.jpg"
          alt=""
        />
        <div className={styles.center}>
          <h2 className={styles.about}>Our Classes</h2>
          <p className={styles.about_text}>
            Dancing classes cover a variety of styles: tap classical ballet,
            ballroom, latin, hip-hop, tap, contemporary, jazz and others. All of
            them are taught in spacious halls by professional internationally
            awarded dancers. Check the schedule to find the timing convient for
            you. Take a step forward with us!
          </p>
          <Button />
        </div>
      </ParallaxLayer>
      {/* </Parallax> */}
    </div>
  );
}

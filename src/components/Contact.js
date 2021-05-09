import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./Contact.module.css";
import { InputField } from "./assets/icon/InputField";
import { ContactButton } from "./assets/icon/ContactButton";

export default function Contact() {
  return (
    // <Parallax pages={1}>
    <ParallaxLayer
      // style={{ height: "514px" }}
      offset={2}
      speed={0.9}
      className={styles.contact}
    >
      <h2 className={styles.heading_2}>Contact Us</h2>
      <form className={styles.form} action="">
        <div className={styles.flex}>
          <InputField name="Name" />
          <InputField name="Phone Number" />
          <InputField name="Email" />
        </div>
        <div className={styles.flex}>
          <InputField name="Choose your class" />
          <InputField area={true} name="Comment" size="big" />
        </div>
      </form>
      <ContactButton />
    </ParallaxLayer>
    // </Parallax>
  );
}

import React from "react";
import { Facebook } from "./assets/icon/Facebook";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Instagram } from "./assets/icon/Instagram";
import { Twitter } from "./assets/icon/Twitter";

export default function Footer() {
  return (
    <ParallaxLayer
      offset={2.6}
      style={{ height: "164px !important" }}
      speed={1}
      style={{ backgroundColor: "#fff" }}
    >
      <footer>
        <div>
          <p>© 2017 Heartbeat Inc</p>
        </div>
        <div>
          <p></p>
        </div>
        <div className="social">
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <Twitter />
          </a>
        </div>
        <div className="map">
          <a href="/">Contacts</a>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </footer>
    </ParallaxLayer>
  );
}

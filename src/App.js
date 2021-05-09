import logo from "./logo.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "react-spring";

import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Parallax pages={2.89} config={config.wobbly}>
        <ParallaxLayer offset={0}
        speed={0.5}
        >
          <Nav />
          <Main />
        </ParallaxLayer>
        {/* <ParallaxLayer> */}
        <About />
        {/* </ParallaxLayer>
        <ParallaxLayer> */}
        <Contact />
        {/* </ParallaxLayer> */}
        <Footer />
        {/* </Parallax> */}
      </Parallax>
    </div>
  );
}

export default App;

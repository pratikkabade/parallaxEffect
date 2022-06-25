import { Parallax } from "@react-spring/parallax";
import React from "react";
import "../App.css"
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

const Home = () => {
  return (
    <div id="parallax-container">
      <Parallax pages={3}>
        <PageOne/>
        <PageTwo/>
        <PageThree/>
      </Parallax>
    </div>
  );
};

export default Home;

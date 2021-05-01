import React from "react";

import ImgSlider from "../Slider/Slider";
import Viewers from "../Viewers/Viewers";

import { Container } from "./Home.styles";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;

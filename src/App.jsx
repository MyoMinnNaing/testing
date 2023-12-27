import React from "react";
import Wrapper from "./components/UI/Wrapper";
import Header from "./components/header/Header";
import CreativeProject from "./components/CreativeProject";
import Slider from "./components/UI/Slider";

const App = () => {
  return (
    <Wrapper>
      <Header />

      {/* <CreativeProject /> */}

      <Slider />
    </Wrapper>
  );
};

export default App;

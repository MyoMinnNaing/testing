import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Slider = () => {
  return (
    <Splide
      options={{
        perPage: 1,
        rewind: true,
        gap: "1rem",
        pagination: false,
        classes: {},
      }}
      aria-label="My favorite Images"
    >
      <div className="splide__arrows"></div>

      <SplideSlide>
        <img
          className=" block mx-auto"
          src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/02.jpg"
          alt=""
        />
      </SplideSlide>

      <SplideSlide>
        <img
          className=" block mx-auto"
          src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/03-1.jpg"
          alt=""
        />
      </SplideSlide>

      <SplideSlide>
        <img
          className=" block mx-auto"
          src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/05.jpg"
          alt=""
        />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;

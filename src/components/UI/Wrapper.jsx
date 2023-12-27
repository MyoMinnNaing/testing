import React from "react";

const Wrapper = (props) => {
  return (
    <div className=" relative min-h-screen xl:container custom-border">
      <div className=" py-14"></div>
      <div className=" absolute top-0 left-0 mx-auto right-0 min-h-screen max-w-[80%] sm:max-w-[70%] md:max-w-[40%] custom-border"></div>
      {props.children}
    </div>
  );
};

export default Wrapper;

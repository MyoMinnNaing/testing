import React from "react";

const CreativeProject = () => {
  return (
    <section>
      <div className=" grid grid-rows-3 grid-cols-12">
        <div className=" col-span-4">
          <div className=" flex gap-1 items-center my-border-b w-[90%] pb-3 mt-5">
            <span className=" inline-block w-[10px] h-[10px] bg-[#c5a47ed9] rounded-full"></span>
            <p className=" text-[12px] uppercase tracking-[3px]">Discover</p>
          </div>
        </div>
        <div className=" col-span-8">
          <h1 className="  text-[36px] uppercase font-normal font-heading">
            <span className=" text-[#c5a47ed9] tracking-[5px]">Creative</span>{" "}
            Projects
          </h1>
          <p className=" text-[15px] text-[#777]">
            Architecture viverra tristique justo duis vitae diaminte neque
            nivamus aestan ateuene artines ariianu the ateliten finibus viverra
            nec lacus in the nedana mis erodino. Design nila iman the finise
            viverra nec a lacus miss viventa in the setlien suscipe no curabit
            tristue the seneoice misuscipit non sagie the fermen.
          </p>
        </div>
      </div>

      <div className=" relative grid grid-cols-12 gap-3">
        <div className=" col-span-6 px-[15px]   group absolute top-0 left-0">
          <div className="  ps-[90px] pb-[90px]  ">
            <a href="">
              <img
                className=" w-[450px] object-cover  duration-500 group-hover:scale-95 "
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/06.jpg"
                alt=""
              />
            </a>
            <div className=" absolute top-[80px] left-[40px] tracking-[5px]">
              <p className=" text-[12px] text-[#c5a47ed9] font-medium uppercase">
                Project 01
              </p>
              <h1 className=" text-[#c5a47ed9] text-[24px] uppercase font-semibold font-heading">
                intermediate hall
              </h1>
            </div>
          </div>
        </div>

        <div className="  col-span-6 mt-[75px] group  absolute top-0 left-[570px]">
          <div className="  ps-[90px] pb-[90px]   ">
            <a href="">
              <img
                className=" w-full object-cover  duration-500 group-hover:scale-95 "
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/02.jpg"
                alt=""
              />
            </a>
            <div className=" absolute top-[80px] left-[40px] tracking-[5px]">
              <p className=" text-[12px] text-[#c5a47ed9] font-medium uppercase">
                Project 02
              </p>
              <h1 className=" text-[#c5a47ed9] text-[24px] uppercase font-semibold font-heading">
                modern loft kitchen
              </h1>
            </div>
          </div>
        </div>

        <div className=" col-span-6 absolute  group top-[538px] left-[570px]">
          <div className=" relative ps-[90px] pb-[90px]  ">
            <a href="">
              <img
                className=" w-full object-cover  duration-500 group-hover:scale-95 "
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/04-1.jpg"
                alt=""
              />
            </a>
            <div className=" absolute top-[80px] left-[40px] tracking-[5px]">
              <p className=" text-[12px] text-[#c5a47ed9] font-medium uppercase">
                Project 02
              </p>
              <h1 className=" text-[#c5a47ed9] text-[24px] uppercase font-semibold font-heading">
                modern loft kitchen
              </h1>
            </div>
          </div>
        </div>

        <div className=" col-span-6 absolute  group top-[659px] left-0">
          <div className=" relative ps-[90px] pb-[90px]  ">
            <a href="">
              <img
                className=" w-[450px] object-cover  duration-500 group-hover:scale-95 "
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/03-1.jpg"
                alt=""
              />
            </a>
            <div className=" absolute top-[80px] left-[40px] tracking-[5px]">
              <p className=" text-[12px] text-[#c5a47ed9] font-medium uppercase">
                Project 02
              </p>
              <h1 className=" text-[#c5a47ed9] text-[24px] uppercase font-semibold font-heading">
                modern loft kitchen
              </h1>
            </div>
          </div>
        </div>

        <div className=" col-span-6 px-[15px]   group absolute top-[1000px] left-[570px]">
          <div className="  ps-[90px] pb-[90px]  ">
            <a href="">
              <img
                className=" w-[450px] object-cover  duration-500 group-hover:scale-95 "
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/06.jpg"
                alt=""
              />
            </a>
            <div className=" absolute top-[80px] left-[40px] tracking-[5px]">
              <p className=" text-[12px] text-[#c5a47ed9] font-medium uppercase">
                Project 01
              </p>
              <h1 className=" text-[#c5a47ed9] text-[24px] uppercase font-semibold font-heading">
                intermediate hall
              </h1>
            </div>
          </div>
        </div>

        <div className=" col-span-6 absolute  group  top-[1100px] left-0">
          <div className=" relative ps-[90px] pb-[90px]  ">
            <a href="">
              <img
                className=" w-[450px] object-cover  duration-500 group-hover:scale-95 "
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/03-1.jpg"
                alt=""
              />
            </a>
            <div className=" absolute top-[80px] left-[40px] tracking-[5px]">
              <p className=" text-[12px] text-[#c5a47ed9] font-medium uppercase">
                Project 02
              </p>
              <h1 className=" text-[#c5a47ed9] text-[24px] uppercase font-semibold font-heading">
                modern loft kitchen
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeProject;

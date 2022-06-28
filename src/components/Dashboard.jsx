import React from "react";
import picture from "../images/11222.jpg";

export const Dashboard = () => {
  return (
    <>
      <div className=" h-[100vh] flex justify-center justify-evenly bg-[#111111]">
        <div>
          <img src={picture} className="h-[90vh] w-[100%] ml-6" />
        </div>
        <div className=" w-[40%] m-28">
          <h5 className="text-[yellow] text-[20px]">Stifen Albort Jonny </h5>

          <h1 className="text-[60px] text-[#eeeef0] font-bold">
            Located In A <br /> Small Town
          </h1>
          <p className="text-[white]">
            Lorem vel ipsa doloribus! Mollitia laudantium velit voluptatem eos
            nisi{" "}
          </p>

          <div className="flex mt-20  text-[white] ">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum officia maxime obcaecati a iure eius.
            </p>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum officia maxime obcaecati a iure eius.
            </p>
          </div>
          

          <div className="flex justify-between mt-14">
          <div className="flex">
            <div className="rouneded-full">
              <img
                src={picture}
                className=" mt-6 rounded-full h-[10vh] w-[80px]"
              />
            </div>
            <div>
              <h1 className="text-[white] text-[20px] mt-6 ml-4">
                Stars & White
              </h1 >
              <h4  className="text-[yellow] text-[15px] ml-4">contract</h4> 
            </div>
          </div>
          <div className="text-[grey] text-[40px] m-auto">
          𝔐𝔬𝔲𝔫𝔱𝔞𝔦𝔫 ℭ𝔲𝔭
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import picture from "../images/11222.jpg";
import pic from "../images/2222.avif";
import Card from "./Card";
import { FaHamburger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRebel } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { stockData } from "../Data";
import CardTwo from "./form/CardTwo";
import CardThree from "./CardThree";

export const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);
  console.log(loggedInUser, localStorage.getItem("loggedInUser"));

  const [card, setCard] = useState([
    {
      title: "Best Quality food",
      subtitle: "services",
      content:
        "Lorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esse.",
      footer: "new features",
      icon: <FaHamburger />,
    },
    {
      title: "better Quality food",
      subtitle: "services",
      content:
        "Lorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esse.",
      footer: "new features",
      icon: <FaFacebook />,
    },
    {
      title: "Best Quality food",
      subtitle: "services",
      content:
        "Lorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esse.",
      footer: "new features",
      icon: <FaRebel />,
    },
  ]);

  const [cardTwo, setCardTwo] = useState([
    {
      icon: <FaStar />,
      content:
        "Lorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esseLorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esseLorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esse",
    },
    {
      icon: <FaStar />,
      content:
        "Lorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esseLorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esseLorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esse",
    },
    {
      icon: <FaStar />,
      content:
        "Lorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esseLorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esseLorem ipsum dolor sit amet consectetur  adipisicing elitPerspiciatis nisi unde adipisci deleniti maxime esse",
    },
  ]);

  return (
    <>
      <div className="overlay flex-wrap">
        <div>
          <nav className=" flex text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            {}
            <div>
              {" "}
              <img
                className="max-w-[100%] h-[15vh] rounded-lg"
                src={loggedInUser?.[0]?.img}
                alt=""
              />
            </div>

            <div className="max-w-[13%] px-3">
              {" "}
              <h1 className="bg-[black] font-medium text-[20px]">
                {loggedInUser?.[0]?.fullname}
              </h1>{" "}
              <h2 className="bg-[black]  text-[20px]">
                {loggedInUser?.[0]?.email}
              </h2>
            </div>

            <a href="#" className="flex justify-center md:ml-[250px]">
              <span className=" flex justify-center  md:text-[80px] sm:text-[50px] ml-32  font-semibold whitespace-nowrap  dark:text-white">
                {stockData.Navbar[0].itemOne}
              </span>
            </a>
          </nav>

          <div className="flex justify-center flex-wrap md:m-28 sm:mt-24  ">
            <div className="text-right mr-8 md:mt-10 sm:mt-24">
              <h2 className="text-yellow-600 text-4xl">
                {" "}
                {stockData.Navbar[0].itemSeven}
              </h2>
              <h3 className="text-white text-6xl">
                {" "}
                {stockData.Navbar[0].itemEight}
              </h3>
              <span className="text-white text-7xl">
                {" "}
                {stockData.Navbar[0].itemNine}
              </span>
              <p className="text-xl text-white mt-8">
                {stockData.Navbar[0].itemTen}{" "}
              </p>
              <button className="w-48 p-3 mt-8 font-medium md:ml-10 text-2xl capitalize rounded-full bg-yellow-400">
                {stockData.Navbar[0].itemEleven}
              </button>
            </div>
            <div className="my-10">
              <img src={pic} alt="" className="hidden md:block" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-[100vh] md:flex justify-center justify-evenly bg-[#111111] sm:inline ">
        <div>
          <img src={picture} className="md:h-[90vh] md:w-[100%] " />
        </div>
        <div className="md:w-[40%] sm:w-[100%] md:m-12  sm:m-0 md:border-2 md:border-red-300 md:p-4 sm:p-16 sm:bg-[black]">
          <h5 className="text-[yellow] text-[20px] font-bold m-4 ml-8">
            {stockData.cook[0].textOne}{" "}
          </h5>

          <h1 className="text-[60px] text-[#eeeef0] font-bold m-8">
          {stockData.cook[0].textTwo}
          </h1>
          <p className="text-[white] font-medium m-10">
          {stockData.cook[0].textThree}{" "}
          </p>

          <div className="flex mt-16   text-[white] m-6 ">
            <p className="font-medium mr-4">
            {stockData.cook[0].textFour}
            </p>
            <p className="font-medium ">
            {stockData.cook[0].textFour}
            </p>
          </div>

          <div className="flex justify-between mx-10">
            <div className="flex">
              <div className="">
                <img
                  src={picture}
                  className=" mt-6 rounded-full h-[9vh] sm:w-[80px]"
                />
              </div>
              <div>
                <h1 className="text-[white] text-[20px] font-bold mt-6 ml-4">
                {stockData.cook[0].textFive}
                </h1>
                <h4 className="text-[yellow] text-[15px] ml-4 font-medium ">
                {stockData.cook[0].textSix  }
                  
                </h4>
              </div>
            </div>
            <div className="text-[grey] text-[40px] m-auto">{stockData.Navbar[0].itemOne}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center md:h-[100vh] bg-[black] py-10">
          <h1 className="text-[80px] font-bold text-[white]">Core Featurs</h1>
          <span className="text-[40px] font-medium text-[white]">feature</span>

          <div className="md:flex sm:my-20 md:ml-20 sm:block sm:ml-8 ">
            {card.map((element) => {
              return <Card element={element} />;
            })}
          </div>
        </div>
      </div>

      <div className="overlay2">
        <div className="text-center pt-6">
          <h1 className="text-[60px] text-[white] font-bold ">POPULAR MEAL</h1>
          <span className="text-[35px] text-[white] font-medium">feature</span>
        </div>
        <div>
          <div className="md:flex justify-center py-28 sm:block ">
            <div className="md:m-10">
              {[1].map(() => {
                return <CardThree />;
              })}
            </div>
            <div className="md:m-10">
              {[1].map(() => {
                return <CardThree />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex sm:my-20 md:ml-20 sm:block sm:ml-8 ">
        {cardTwo.map((element) => {
          return <CardTwo element={element} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;

import pic from "../images/2222.avif";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigator = useNavigate();
  const onClickHandler = () => {
    navigator("/signinform");
  };
  const onClickHandler1 = () => {
    navigator("/signinform");

  };

  const handleClick = (e) => {
    e.preventDefault();
   const element = document.getElementById("mobile-menu")
    console.log(" i m clicked", element);
    element.classList.toggle("hidden")
  };

  return (
    <>
      <div className="overlay flex-wrap ">
        <div>
          <nav className=" text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-2">
              <a href="#" className="flex">
                <span className="self-center text-lg font-semibold whitespace-nowrap sm:text-2xl dark:text-white">
                  𝔐𝔬𝔲𝔫𝔱𝔞𝔦𝔫 ℭ𝔲𝔭
                </span>
              </a>

              <span className="text-3xl cursor-pointer md:hidden block ">
                <ion-icon name="menu-outline" onClick={handleClick}></ion-icon>
              </span>
              <div
                className=" w-full hidden md:block md:w-auto"
                id="mobile-menu"
              >
                <div></div>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black "
                    >
                      Contact
                    </a>
                  </li>
                  <div className="flex flex-col  text-sm font-medium text-white md:flex-row md:space-x-8">
                    <button
                      onClick={onClickHandler}
                      className="bg-red-600  md:w-18 h-8 w-24 rounded-xl hover:text-black"
                    >
                      {" "}
                      <a href="#">Sign In</a>{" "}
                    </button>
                    <button
                      onClick={onClickHandler1}
                      className="bg-green-600  md:w-18 h-8 w-24 rounded-xl hover:text-black"
                    >
                      <a href="#">Sign Up</a>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </nav>

          <div className="flex justify-center flex-wrap md:m-28 sm:m-0  ">
            <div className="text-right mr-8 mt-10">
              <h2 className="text-yellow-600 text-4xl">WE TAKE</h2>
              <h3 className="text-white text-6xl">PRIDE IN</h3>
              <span className="text-white text-7xl">OUR FOOD</span>
              <p className="text-xl text-white mt-8">
                Lorem ipsum dolor sit amet{" "}
              </p>
              <button className="w-48 p-3 mt-8 font-medium md:ml-10 text-2xl capitalize rounded-full bg-yellow-400">
                book table
              </button>
            </div>
            <div className="my-10">
              <img src={pic} alt="" className="hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;


// import React, { useState } from 'react'
// import Button from '../components/form/Button';

// const Navbar = () => {
//     let Links =[
//       {name:"HOME",link:"/"},
//       {name:"SERVICE",link:"/"},
//       {name:"ABOUT",link:"/"},
//       {name:"BLOG'S",link:"/"},
//       {name:"CONTACT",link:"/"},
//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//       text-gray-800'>
//         <span className='text-3xl text-indigo-600 mr-1 pt-2'>
//         <ion-icon name="logo-ionic"></ion-icon>
//         </span>
//         Designer
//       </div>
      
//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       <ion-icon name={open ? 'close':'menu'}></ion-icon>
//       </div>

//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//         <Button>
//           Get Started
//         </Button>
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar

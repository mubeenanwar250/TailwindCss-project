import pic from "../images/2222.avif";
import { mdiMenu } from '@mdi/js';

import Icon from "@mdi/react";
function Navbar() {
  return (
    <>
      <div className="overlay flex-wrap ">
        <div>
          <nav class=" text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
              <a href="#" class="flex">
                <span class="self-center text-lg font-semibold whitespace-nowrap sm:text-2xl dark:text-white">
                  𝔐𝔬𝔲𝔫𝔱𝔞𝔦𝔫 ℭ𝔲𝔭
                </span>
              </a>


                        <div className="text-white">
                         <Icon src={mdiMenu} />
                        </div>


      

              <div class="hidden w-full md:block md:w-auto" id="mobile-menu" >
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-white-900 border- border-gray-100 hover:bg-gray-50 hover:text-black "
                    >
                      Contact
                    </a>
                  </li>
                  <div className="flex flex-col ml-16 text-sm font-medium text-white md:flex-row md:space-x-8">
                    <button className="bg-red-600 md:w-18  w-24 rounded-xl hover:text-black">
                      {" "}
                      <a href="#">Sign In</a>{" "}
                    </button>
                    <button className="bg-green-600  md:w-18 w-24 rounded-xl hover:text-black">
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
              <img src={pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React from 'react'
import {stockData} from "../Data"
import pic1 from "../images/5.jpg";


function CardThree() {
  return (
    
    
         <div>
            <div class="flex mt-16  ">
              <div class=" md:w-24 sm:h-90  mb-4 ">
                <img src={pic1} class=" h-20 w-24 rounded-full" alt="" />
              </div>
              <div class=" w-11/12 ml-4 mb-2 pt-4 ">
                <h2 class="capitalize text-xl  font-bold font-sans text-[white]">
                  {stockData.meal[0].mealOne[0].head}
                  <span class="rounded-full px-4 py-1 bg-[yellow] text-[black]">
                    {stockData.meal[0].mealOne[0].Price}
                  </span>
                </h2>
                <p class="capitalize text-sm text-[white]">
                  {stockData.meal[0].mealOne[0].description}
                </p>
              </div>
            </div>
            <div class="flex">
              <div class=" w-24 mb-4 ">
                <img src={pic1} class=" md:h-20 md:w-20  rounded-full" alt="" />
              </div>
              <div class=" w-11/12 ml-4 mb-2 pt-4 ">
                <h2 class="capitalize text-xl   font-bold font-sans text-[white]">
                  {stockData.meal[1].mealTwo[0].head}
                  <span class="rounded-full px-4 py-1 bg-[yellow] text-[black]">
                    {stockData.meal[1].mealTwo[0].Price}
                  </span>
                </h2>
                <p class="capitalize text-sm text-[white]">
                  {stockData.meal[1].mealTwo[0].description}
                </p>
              </div>
            </div>
            <div class="flex">
              <div class=" w-24 mb-4 ">
                <img src={pic1} class="w-20 h-20 rounded-full" alt="" />
              </div>
              <div class=" w-11/12 ml-4 mb-2 pt-4 ">
                <h2 class="capitalize text-xl   font-bold font-sans text-[white]">
                  {stockData.meal[2].mealThree[0].head}
                  <span class="rounded-full px-4 py-1 bg-[yellow] text-[black]">
                    {stockData.meal[2].mealThree[0].Price}
                  </span>
                </h2>
                <p class="capitalize text-sm text-[white]">
                  {stockData.meal[2].mealThree[0].description}
                </p>
              </div>
            </div>
            <div class="flex">
              <div class=" w-24 mb-4">
                <img src={pic1} class="w-20 h-20 rounded-full" alt="" />
              </div>
              <div class=" w-11/12 ml-4 mb-2 pt-4 ">
                <h2 class="capitalize text-xl   font-bold font-sans text-[white]">
                  {stockData.meal[3].mealFour[0].head}
                  <span class="rounded-full px-4 py-1 bg-[yellow] text-[black]">
                    {stockData.meal[3].mealFour[0].Price}
                  </span>
                </h2>
                <p class="capitalize text-sm text-[white]">
                  {stockData.meal[3].mealFour[0].description}
                </p>
              </div>
            </div>
            <div class="flex">
              <div class=" w-24 ">
                <img src={pic1} class="w-20 h-20 rounded-full" alt="" />
              </div>
              <div class=" w-11/12 ml-4 mb-2 pt-4   ">
                <h2 class="capitalize text-xl   font-bold font-sans text-[white]">
                {stockData.meal[4].mealFive[0].head}

                  <span class="rounded-full px-4 py-1 bg-[yellow] text-[black]">
                  {stockData.meal[4].mealFive[0].Price}
                    
                  </span>
                </h2>
                <p class="capitalize  text-sm text-[white]">
                {stockData.meal[4].mealFive[0].description}
                  
                </p>
              </div>
            </div>
          </div>
    
  )
}

export default CardThree
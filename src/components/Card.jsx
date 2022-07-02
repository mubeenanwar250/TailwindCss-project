import React from "react";

function Card({element}) {
  return (
    <>
      <div className="flex my-16 ml-20 sm:bg-black">
        <div className="flex flex-col border-2 border-[red] h-[40vh] w-[70%]  ">
        <span className="text-[red] flex justify-center mt-6 text-[50px]">
{element.icon}
        </span>
        <h1 className="text-[20px] text-[white] font-bold">
          {element.title}
        </h1>
        <span className="font-semibold text-[yellow] mt-4">{element.subtitle}</span>
        <p className="font-medium text-[white] mt-6">
          {element.content}
        </p>
        <h4 className="font-semibold mt-6 text-[yellow]">{element.footer}</h4>
      </div>
      </div>
    </>
  );
}

export default Card;

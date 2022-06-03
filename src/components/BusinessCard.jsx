import Pic from "../images/5.jpg";

function BusinessCard() {
  return (
    <>
      <div className="shadow-xl bg-gray-400 h-96 sm:w-90 md:w-1/3 m-auto my-20 rounded-xl hover:shadow-2xl shadow-indigo-900 cursor-pointer relative flex-wrap">
        <div>
          <img
            src={Pic}
            alt=""
            className=" md:h-28 h-16 left-0 right-0 -top-9 rounded-full  mx-auto absolute md:left-0 md:right-0 md:-top-16 drop-shadow-2xl"
          />
        </div>

        <div className="text-center pt-14">
          <span className="text-purple-900 text-xl font-bold"> Mr Barcha </span>

          <h5>
            Front-end developer from{" "}
            <span className="font-bold mt-1">Gilgit-Baltistan</span>
          </h5>

          <h4 className="font-bold mt-2">Gilgit-Baltistan Pakistan</h4>
        </div>

        <div className="flex sm:mx-0 md:mx:12 md:justify-between lg:mx-20 mt-10 justify-between">
          <div className="text-center">
            <h1 className="font-bold">1598</h1>
            <p className="">Followers</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold">65</h1>
            <p>Following</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold">123</h1>
            <p>Article</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold">85</h1>
            <p>Works</p>
          </div>
        </div>

         <div className="flex sm:mx-0 md:mx-10 mt-10 md:justify-between justify-between">
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">1</div>
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">2</div>
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">3</div>
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">4</div>
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">5</div>
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">6</div>
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">7</div>
             <div className="rounded-full text-center p-2 w-10 text-red-300 bg-red-900">8</div>
         </div>

         <div className="flex mt-6 justify-center mx-auto justify-around">
             <button className="w-40 p-2 text-white bg-blue-600 rounded-full to-transparent border-0 border-white-900 hover:bg-red-300">Message</button>
             <button className="w-40 p-2 text-white bg-red-500  rounded-full to-transparent border-0 border-white-900 hover:bg-red-300">Follow</button>
         </div>

      </div>
    </>
  );
}

export default BusinessCard;

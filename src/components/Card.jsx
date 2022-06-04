import pic from "../images/1122.jpg";
import pic1 from '../images/2222.jpg';
import pic2 from '../images/4444.jpg'

function Card() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between justify-center w-auto bg-white-100 ">
        <div className="shadow-xl m-20 bg-gray-400 rounded-3xl hover:shadow-2xl shadow-indigo-900 cursor-pointer">
          <div>
            <img src={pic} alt='' className="h-2/5 rounded-t-3xl"  />
          </div>
          <div className="text-center mt-12">
            <span className="text-red-600 text-[200px] font-bold">4 days ago</span>
            <h1 className="text-4xl font-bold">Post one</h1>
            <p className="text-lg mt-8 font-special  ">
              Sit labore est consectetur veniam velit <br /> voluptate.
              Voluptate anim consequat aliqua voluptate proident Lorem aliquip{" "}
            </p>
            <div className="flex justify-between bg-red-600 mt-14 h-32  text-center rounded-b-3xl">
              <div className="py-8 border-r-4 border-black w-24">
                <h1 className="font-bold">4m</h1>
                <p>Read</p>
              </div>
              <div className="py-8 pr-14 border-r-4 border-black w-24">
                <h1 className="font-bold">5123</h1>
                <p>views</p>
              </div>
              <div className="py-8 pr-14 w-24">
                <h1 className="font-bold">32</h1>
                <p>comments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-20 shadow-xl bg-gray-400 rounded-3xl hover:w-6/12 cursor-pointer">
          <div>
            <img src={pic1} className="h-2/5 rounded-t-3xl " />
          </div>
          <div className="text-center mt-12">
            <span className="text-red-400 text-xl font-bold">5 days ago</span>
            <h1 className="text-4xl font-bold">Post Two</h1>
            <p className="text-lg mt-8 font-special">
              Sit labore est consectetur veniam velit <br /> voluptate.
              Voluptate anim consequat aliqua voluptate proident Lorem aliquip
            </p>
            <div className="flex justify-between bg-red-400 mt-20 h-32  text-center rounded-b-3xl">
              <div className="py-8 border-r-4 border-black w-24">
                <h1 className="font-bold">4m</h1>
                <p>Read</p>
              </div>
              <div className="py-8 pr-14 border-r-4 border-black w-24">
                <h1 className="font-bold">5123</h1>
                <p>views</p>
              </div>
              <div className="py-8 pr-14 w-24">
                <h1 className="font-bold">32</h1>
                <p>comments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-20 shadow-xl bg-gray-400 rounded-3xl hover:w-6/12 cursor-pointer">
          <div>
            <img src={pic2} className="h-2/5 rounded-t-3xl" />
          </div>
        '1': '1px',
          <div className="text-center mt-12">
            <span className="text-green-400 text-xl font-bold">6 days ago</span>
            <h1 className="text-4xl font-bold">Post Three</h1>
            <p className="text-lg mt-8 font-special ">
              Sit labore est consectetur veniam velit <br /> voluptate.
              Voluptate anim consequat aliqua voluptate proident Lorem aliquip{" "}
            </p>
            <div className="flex justify-between bg-green-400 mt-14 h-32 rounded-b-3xl text-center">
              <div className="py-8 border-r-4 border-black w-24">
                <h1 className="font-bold">4m</h1>
                <p>Read</p>
              </div>
              <div className="py-8 pr-14 border-r-4 border-black w-24">
                <h1 className="font-bold">5123</h1>
                <p>views</p>
              </div>
              <div className="py-8 pr-14 w-24">
                <h1 className="font-bold">32</h1>
                <p>comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

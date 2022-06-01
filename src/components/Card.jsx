import pic from "../images/1122.jpg";

function Card() {
  return (
    <>
      <div class="container mx-auto   flex-wrap   h-screen   ">
        <div className="flex justify-between    ">
          <div className="h-3/6 w-auto  m-20 ">
            <div>
              <img src={pic} className="h-2/5 rounded-t-lg" />
            </div>
            <div className="text-center mt-10">
              <span className="text-red-500 text-xl font-bold">4 days ago</span>
              <h1 className="text-4xl font-bold">Post one</h1>
              <p className="text-lg mt-8 ">
                Sit labore est consectetur veniam velit <br /> voluptate.
                Voluptate anim consequat aliqua voluptate proident Lorem aliquip{" "}
              </p>
              <div className="flex justify-between bg-red-500 mt-14 h-32 rounded-b-2xl ">
                <div className=" w-1/3 py-8 border-r-4 border-black">
                  <h1 className="font-bold">4m</h1>
                  <p>Read</p>
                </div>
                <div className=" w-1/3 py-8 border-r-4 border-black">
                  <h1 className="font-bold">5123</h1>
                  <p>views</p>
                </div>
                <div className=" w-1/3 py-8 ">
                  <h1 className="font-bold">32</h1>
                  <p>comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

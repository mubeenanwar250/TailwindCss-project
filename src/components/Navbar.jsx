function Navbar() {
  return (
    <>
      <div className="overlay">
        <div>
          <div className="justify-between md:flex bg-slate-900 p-3 md:flex bg-slate-500">
            <h2 className="text-xl md:text-4xl capitalize text-white font-bold ml-10 mt-2 hover:text-red-500  ">
              CodingLab
            </h2>
            <nav>
              <ul className=" flex flex-col text-xl font-medium text-white md:flex-row md:space-x-8 mt-4 ml-10 ">
                <li className="NavbarList">
                  <a href="#" >Home</a>
                </li>
                <li  className="NavbarList">
                  <a href="#">About</a>
                </li>
                <li  className="NavbarList">
                  <a href="#">Services</a>
                </li>
                <li  className="NavbarList">
                  <a href="#">Sontact</a>
                </li>
                <li  className="NavbarList">
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </nav>
          </div>

      
          <div>
            <h2 className="mt-60 sm:mt-48 md:mt-80 text-3xl font-bold md:text-6xl text-blue-50 capitalize text-center hover:text-yellow-400">
              Create Amazing Website <br />{" "}
              <span className="md:text-5xl">Pure Html & Css Only</span>
            </h2>
            <div className="mt-7 text-center">
              <button className="w-48 p-3 text-2xl text-slate-300 capitalize rounded to-transparent border-4 border-white-900 hover:bg-red-300">
                view menu
              </button>
              <button className="w-48 p-3 mt-3 font-medium md:ml-10 text-2xl capitalize rounded bg-white hover:bg-yellow-400">
                book table
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

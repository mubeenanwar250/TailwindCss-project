import "./App.css";
import pic from '../src/images/1122.jpg'

function App() {
  return (
    <>
      <div className="overlay">
        <div>
          <div className="justify-between center md:flex bg-neutral-900 p-3 ">
            <h2 className="text-xl md:text-4xl capitalize text-white font-bold ml-10 mt-2  ">
              CodingLab
            </h2>
            <nav>
              <ul className="flex ml-10 mt-4 flex-col text-xl font-medium text-white md:flex-row md:space-x-8 md:mt-3 md:text-3xl mr-5">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Sontact</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="mt-80 text-3xl font-bold md:text-6xl text-blue-50 capitalize text-center">
              Create Amazing Website <br />{" "}
              <span className="md:text-5xl">Pure Html & Css Only</span>
            </h2>
            <div className="mt-7 text-center">
              <button className="w-48 p-3 text-2xl text-slate-300 capitalize rounded to-transparent border-4 border-white-900">
                view menu
              </button>
              <button className="w-48 p-3 mt-3 font-medium md:ml-10 text-2xl capitalize rounded bg-white">
                book table
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-screen block flex justify-between">
      <div className="h-96 w-screen bg-red-600 m-3">
        <div>
          <img src={pic} className="h-30"/>
        </div>
        <div>
          <span>
            lorem
          </span>
           <h1>HEllo</h1>
        </div>
      </div>
      <div className="h-96 w-screen bg-red-600 m-3">
        <div>
          <img src={pic} className="h-30"/>
        </div>
        <div>
          <span>
            lorem
          </span>
           <h1>HEllo</h1>
        </div>
      </div>
      <div className="h-96 w-screen bg-red-600 m-3">
        <div>
          <img src={pic} className="h-30"/>
        </div>
        <div>
          <span>
            lorem
          </span>
           <h1>HEllo</h1>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

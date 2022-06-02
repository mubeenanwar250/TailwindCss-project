import "./App.css";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>

    <Navbar />
    <Card />
      {/* <div className="flex flex-col md:flex-row lg:flex-row">
        {[1, 2, 3].map(() => {
          return <Card />;
        })}
      </div> */}
    </>
  );
}

export default App;

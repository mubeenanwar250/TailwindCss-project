import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <>
     <div className="bg-gray-50">
     <Navbar />
      <Card />
      <BusinessCard />
     </div>
      {/* <div className="flex flex-col md:flex-row lg:flex-row">
        {[1, 2, 3].map(() => {
          return <Card />;
        })}
      </div> */}
    </>
  );
}

export default App;

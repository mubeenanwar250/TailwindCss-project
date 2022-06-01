import "./App.css";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>

    <Navbar />
      <div className="flex">
        {[1, 2, 3].map(() => {
          return <Card />;
        })}
      </div>
    </>
  );
}

export default App;

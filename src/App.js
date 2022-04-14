import React from "react";import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Sell from "./views/Sell";
function App() {
  // const [purchase, setPurchase] = useState("");

  // function addToPurchase(productId) {
  //   setPurchase(productId);
  // }

  return (
    // <div className="App w-full h-screen p-4 overflow-y-auto">
    //   <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
    //     {Array.from({ length: 25 }, (_, i) => (
    //       <ProductBox key={i} addToPurchase={addToPurchase} />
    //     ))}
    //   </div>
    // </div>

    // <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
    //   {Array.from({ length: 25 }, (_, i) => (
    //     <ProductBox key={i} addToPurchase={addToPurchase} />
    //   ))}
    // </div>
    <MainLayout>
      <Sell />
    </MainLayout>
  );
}

export default App;

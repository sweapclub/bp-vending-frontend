// import logo from "./logo.svg";
import "./App.css";
import ProductBox from "./components/ProductBox";
function App() {
  const n = 10;
  return (
    <div className="App w-full h-screen p-4 overflow-y-auto">
      {/* <div className="flex flex-row gap-4 flex-wrap">
        {Array.from({ length: 25 }, (_, i) => (
          <ProductBox className="col-span-3" key={i} />
        ))}
      </div> */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6">
        {Array.from({ length: 25 }, (_, i) => (
          <ProductBox key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;

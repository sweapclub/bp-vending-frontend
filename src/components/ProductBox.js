import React from "react";
import Coke from "../assets/product/coka-cola.png";


function ProductBox({ addToPurchase, productId }) {
  const empty = false;
  return (
    // w-56
    <div className=" ProductBox relative no-select">
      <div
        className={`ProductBox h-60 glass flex flex-col ${
          empty ? "grayscale opacity-50" : ""
        }`}
      >
        <div className="flex-1 relative">
          <img
            src={Coke}
            className=" absolute object-contain  w-full h-full"
            alt=""
          />
        </div>
        <div className="shrink w-full p-2 h-20 bg-white rounded-b-2xl flex">
          <div className="grow text-lg font-medium px-2 my-auto mx-0">
            Lorem ipsum
          </div>

          <div className="shrink text-xl text-center p-3 font-bold my-auto mx-0 text-green-600">
            150
          </div>
        </div>
      </div>
      {empty && (
        <div className="absolute top-1/3 -translate-y-1/2  w-full">
          <p className="font-semibold text-xl py-2 bg-red-500 text-white text-center">
            Out of stock
          </p>
        </div>
      )}

      {!empty && (
        <div
          className="absolute top-0 left-0 bg-transparent rounded-2xl cursor-pointer w-full h-full"
          onClick={() => addToPurchase(productId)}
        ></div>
      )}
    </div>
  );
}

export default ProductBox;

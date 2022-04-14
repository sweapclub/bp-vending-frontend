import React from "react";

function ProductBox({ addToPurchase, product }) {
  return (
    // w-56
    <div className=" ProductBox relative no-select">
      <div
        className={`ProductBox h-60 glass flex flex-col ${
          product.amount <= 0 ? "grayscale opacity-50" : ""
        }`}
      >
        <div className="flex-1 relative">
          <img
            src={"data:image/png;base64," + product.image}
            className=" absolute object-contain  w-full h-full"
            alt=""
          />
        </div>
        <div className="shrink w-full p-2 h-20 bg-white rounded-b-2xl flex">
          <div className="grow text-lg font-medium px-2 my-auto mx-0">
            {product.productName}
          </div>

          <div className="shrink text-xl text-center p-3 font-bold my-auto mx-0 text-green-600">
            {product.price}
          </div>
        </div>
      </div>
      {product.amount <= 0 && (
        <div className="absolute top-1/3 -translate-y-1/2  w-full">
          <p className="font-semibold text-xl py-2 bg-red-500 text-white text-center">
            Out of stock
          </p>
        </div>
      )}

      {!product.amount <= 0 && (
        <div
          className="absolute top-0 left-0 bg-transparent rounded-2xl cursor-pointer w-full h-full"
          onClick={() => addToPurchase(product)}
        ></div>
      )}
    </div>
  );
}

export default ProductBox;

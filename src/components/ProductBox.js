import React from "react";
import Coke from "../assets/product/coka-cola.png";
function ProductBox() {
  return (
    // w-56 
    <div className="ProductBox h-60 glass flex flex-col hover:drop-shadow-md">
      <div className="grow relative">
        <div className="absolute top-1/2 -translate-y-1/2">
          <img src={Coke} className="w-fit object-cover" />
        </div>
      </div>
      <div className="shrink w-full p-2 h-12 bg-white rounded-b-2xl text-lg ">Coka cola</div>
    </div>
  );
}

export default ProductBox;

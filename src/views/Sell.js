import React, { useEffect, useState } from "react";import ProductBox from "../components/ProductBox";
import PurchaseModal from "../components/PurchaseModal";
function Sell() {
  const [purchase, setPurchase] = useState(null);

  function addToPurchase(productId) {
    setPurchase(productId);
  }
  function closeDialog(isDone) {
    if (isDone) {

    }
    setPurchase(null);
  }

  useEffect(() => {
    if (purchase !== null) {
      console.log("Open purchase dialog");
    }
  }, [purchase]);

  return (
    <div className="relative">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Array.from({ length: 25 }, (_, i) => (
          <ProductBox key={i} productId={i} addToPurchase={addToPurchase} />
        ))}
      </div>
      {purchase ? <PurchaseModal closeDialog={closeDialog} /> : null}
    </div>
  );
}

export default Sell;

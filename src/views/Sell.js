import React, { useEffect, useState } from "react";
import ProductBox from "../components/ProductBox";
import PurchaseModal from "../components/PurchaseModal";
import * as productApi from "../api/product";
import { RESPONSE_STATUS } from "../common/constants";
function Sell() {
  const [purchase, setPurchase] = useState(null);
  const [products, setPrpducts] = useState([]);

  const getAllProduct = async () => {
    const res = await productApi.getAllProduct();
    if (res && res.status === RESPONSE_STATUS.SUCCESS) {
      setPrpducts(res.data);
    } else {
      console.log("die ...");
    }
  };

  function addToPurchase(productId) {
    setPurchase(productId);
  }
  function closeDialog(isDone) {
    if (isDone) {
      getAllProduct();
    }
    setPurchase(null);
  }

  useEffect(() => {
    let refreshRate = 10;
    getAllProduct();
    const interval = setInterval(() => {
      if (refreshRate === 0) {
        getAllProduct();
        refreshRate = 10;
      } else {
        refreshRate -= 1;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (purchase !== null) {
      console.log("Open purchase dialog");
    }
  }, [purchase]);

  return (
    <div className="relative">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {products.map((p) => (
          <ProductBox
            key={p.productId}
            product={p}
            addToPurchase={addToPurchase}
          />
        ))}
      </div>
      {purchase ? (
        <PurchaseModal product={purchase} closeDialog={closeDialog} />
      ) : null}
    </div>
  );
}

export default Sell;

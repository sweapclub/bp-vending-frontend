import React, { useEffect, useState } from "react";
import { BiMoney, BiCoin } from "react-icons/bi";

const Change = ({ payment, closeDialog }) => {
  const [coins, setCoins] = useState([]);
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const coinList = [1, 5, 10];
    const bankList = [20, 50, 100, 500, 1000];
    setCoins(payment.data.filter((e) => coinList.includes(+e.toc)));
    setBanks(payment.data.filter((e) => bankList.includes(+e.toc)));
  }, [payment]);

  const renderCoin = () => {
    return coins.map((e) => {
      return (
        <div className="flex flex-row py-2" key={"c-" + e.toc}>
          <div className="text-yellow-500">
            <BiCoin size="32px" />
          </div>
          <p className="grow px-2">{e.toc} Baht</p>
          <div className="px-2">{e.amount} ea.</div>
        </div>
      );
    });
  };

  const renderBank = () => {
    return banks.map((e) => {
      return (
        <div className="flex flex-row py-2" key={"b-" + e.toc}>
          <div className="text-green-500">
            <BiMoney size="32px" />
          </div>
          <p className="grow px-2">{e.toc} Baht</p>
          <div className="px-2">{e.amount} ea.</div>
        </div>
      );
    });
  };

  const renderDetail = () => {
    if (payment.data.length !== 0) {
      return (
        <>
          <p className="text-lg py-2">Change detail</p>
          <div className="flex flex-col divide-y">
            {renderBank()}
            {renderCoin()}
          </div>
        </>
      );
    }
  };

  return (
    <div className="">
      <div className="text-center py-4">
        <p className="text-xl font-semibold">Have a good day !!</p>
        <p className="text-sm">thank you for your purchase</p>
      </div>
      <hr />
      {renderDetail()}
    </div>
  );
};

export default Change;

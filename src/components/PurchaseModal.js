import React, { useEffect, useState } from "react";
import Coke from "../assets/product/coka-cola.png";
import { InputCoin, InputBank } from "./InputMoney";
import { AiFillCloseCircle } from "react-icons/ai";

const PurchaseModal = ({ closeDialog }) => {
  const [coin_1, setCoin_1] = useState(0);
  const [coin_5, setCoin_5] = useState(0);
  const [coin_10, setCoin_10] = useState(0);
  const [bank_20, setBank_20] = useState(0);
  const [bank_50, setBank_50] = useState(0);
  const [bank_100, setBank_100] = useState(0);
  const [bank_500, setBank_500] = useState(0);
  const [bank_1000, setBank_1000] = useState(0);
  const [total, setTotal] = useState(0);

  const [ableToPurchase, setAbleToPurchase] = useState(false);

  const [countDown, setCountDown] = useState(5);

  const sendPurchaseOrder = () => {
    let timer = 5;
    const inter = setInterval(() => {
      timer -= 1
      setCountDown(timer);
      if (timer === 0) {
        clearInterval(inter);
        closeDialog();
      }
    }, 1000);
    setAbleToPurchase(true);
  };

  const price = 15;

  useEffect(() => {
    let sum = 0;
    sum += coin_1;
    sum += coin_5 * 5;
    sum += coin_10 * 10;
    sum += bank_20 * 20;
    sum += bank_50 * 50;
    sum += bank_100 * 100;
    sum += bank_500 * 500;
    sum += bank_1000 * 1000;
    setTotal(sum);
  }, [
    coin_1,
    coin_5,
    coin_10,
    bank_20,
    bank_50,
    bank_100,
    bank_500,
    bank_1000,
  ]);

  return (
    <>
      <div className="fixed inset-0 z-10 h-full">
        <div className="text-center fixed inset-0 overflow-auto outline-0">
          <div className="top-20 relative inline-block pb-0 text-left align-middle sm:max-w-md w-full drop-shadow-md">
            <div className="p-3 text-white bg-blue-700 rounded-t-md font-semibold text-xl flex ">
              <p>Purchasing</p>
              <span className="flex-1" />
              <button
                onClick={() => {
                  closeDialog(false);
                }}
              >
                <AiFillCloseCircle size="24px" />
              </button>
            </div>
            <div className="rounded-b-md bg-white p-4 text-lg">
              {!ableToPurchase ? (
                <>
                  <div className="flex divide-x h-32">
                    <div className="shrink relative sm:w-40 w-24">
                      <img
                        src={Coke}
                        className=" absolute object-contain w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="grow px-4 align-middle self-center font-semibold ">
                      <p>Kitkat chakow</p>
                      <p>
                        Price : <span className="text-green-600">15</span> Baht
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex font-semibold pt-2 flex-">
                    <p className="">Add coin</p>
                    <span className="flex-1"></span>
                    <p className="min-w-24">
                      Total : <span className="text-green-600">{total}</span>
                    </p>
                  </div>
                  <div className="flex divide-y flex-col">
                    <InputCoin value="1" total={coin_1} adjust={setCoin_1} />
                    <InputCoin value="5" total={coin_5} adjust={setCoin_5} />
                    <InputCoin value="10" total={coin_10} adjust={setCoin_10} />
                    <InputBank value="20" total={bank_20} adjust={setBank_20} />
                    <InputBank value="50" total={bank_50} adjust={setBank_50} />
                    <InputBank
                      value="100"
                      total={bank_100}
                      adjust={setBank_100}
                    />
                    <InputBank
                      value="500"
                      total={bank_500}
                      adjust={setBank_500}
                    />
                    <InputBank
                      value="1000"
                      total={bank_1000}
                      adjust={setBank_1000}
                    />
                  </div>
                  <button
                    disabled={price > total}
                    className=" disabled:grayscale disabled:hover w-full p-4 mt-2 text-white bg-green-500  font-bold rounded"
                    onClick={() => sendPurchaseOrder()}
                  >
                    Purchase
                  </button>
                </>
              ) : (
                <> congras you done ! we will close in {countDown}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PurchaseModal;

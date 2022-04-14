import React from "react";
import { BiMoney, BiCoin, BiUpArrow, BiDownArrow } from "react-icons/bi";

const InputCoin = ({ value, total, adjust }) => {
  return (
    <div className="flex items-center py-1">
      <div className="text-yellow-500">
        <BiCoin size="32px" />
      </div>
      <p className="grow px-2">{value} Baht</p>
      <div className="px-2">Amount : {total}</div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            adjust(total + 1);
          }}
        >
          <BiUpArrow size="22px" />
        </button>
        <button
          onClick={() => {
            if (total > 0) {
              adjust(total - 1);
            }
          }}
        >
          <BiDownArrow size="22px" />
        </button>
      </div>
    </div>
  );
};

const InputBank = ({ value, total, adjust }) => {
  return (
    <div className="flex items-center py-1">
      <div className="text-green-500">
        <BiMoney size="32px" />
      </div>
      <p className="grow px-2">{value} Baht</p>
      <div className="px-2">Amount : {total}</div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            adjust(total + 1);
          }}
        >
          <BiUpArrow size="22px" />
        </button>
        <button
          onClick={() => {
            if (total > 0) {
              adjust(total - 1);
            }
          }}
        >
          <BiDownArrow size="22px" />
        </button>
      </div>
    </div>
  );
};

export { InputCoin, InputBank };

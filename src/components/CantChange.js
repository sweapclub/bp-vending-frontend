import React from "react";
const CantChange = ({ payment, closeDialog }) => {
  return (
    <>
      <div className="text-center py-4">
        <p className="text-xl font-semibold">{payment.errorMessage}</p>
        <p className="text-sm">Sorry ...</p>
      </div>
      <>
        <hr />
        <p className="text-lg py-2">Suggestion</p>
        <div className="flex flex-col divide-y">
          <p className="text-gray-400 font-light py-2">
            - Input Equal to price{" "}
          </p>

          {payment.suggestion.map((e, i) => (
            <p className="text-gray-400 font-light py-2" key={"sugges-" + i}>
              - {e}
            </p>
          ))}
        </div>
      </>
    </>
  );
};

export default CantChange;

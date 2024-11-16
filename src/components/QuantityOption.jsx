import React from "react";

function QuantityOption({ onClickAdd, onClickLess, quantity }) {
  return (
    <div className="flex flex-row items-center border border-gray-300 rounded-full shadow-sm">
      <button
        onClick={onClickLess}
        className="py-1 px-2 text-xs font-bold border-r bg-gray-50 rounded-tl-full rounded-bl-full active:bg-gray-100"
      >
        -
      </button>
      <p className="py-1 px-2 text-xs">{quantity}</p>
      <button
        onClick={onClickAdd}
        className="py-1 px-2 text-xs font-bold border-l bg-gray-50 rounded-tr-full rounded-br-full active:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}

export default QuantityOption;

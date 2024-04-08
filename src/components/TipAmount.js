import React from "react";

function TipAmount({ percentage, handleClick, tipPercentage }) {
  return (
    <button
      onClick={() => handleClick(percentage)}
      className={`cursor-pointer rounded-md ${percentage == tipPercentage ? 'bg-strong-cyan' : 'bg-very-dark-cyan'} px-4 py-3`}
    >
      <span className="text-2xl font-bold text-white">{percentage}%</span>
    </button>
  );
}

export default TipAmount;

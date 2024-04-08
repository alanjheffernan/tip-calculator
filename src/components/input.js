import React from "react";

const Input = ({ icon, value, handleChange, placeholder }) => {
  return (
    <div className="flex w-full cursor-pointer justify-between rounded-md bg-very-light-grayish-cyan px-5 py-4 focus-within:border-strong-cyan">
      {icon && <img className="p-1" src={icon} alt="icon" />}
      <input
        className=" w-full cursor-pointer bg-very-light-grayish-cyan text-right text-2xl font-bold outline-none"
        type="number"
        step="0.01"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

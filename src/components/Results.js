import React from "react";

function Results({
  totalAmountPerPerson,
  tipAmountPerPerson,
  handleReset,
  disableResetButton,
}) {
  return (
    <section className="rounded-2xl bg-very-dark-cyan px-6 pt-10 sm:m-4 sm:flex sm:w-1/2 sm:flex-col sm:justify-between">
      <div className="mb-6 flex flex-col justify-between">
      <div className="mb-9 flex justify-between">
        <div>
          <p className=" text-base font-bold text-white">Tip Amount </p>
          <p className="text-xs font-bold text-light-grayish-cyan">/ person </p>
        </div>
        <h5 className="text-4xl font-bold text-strong-cyan">
          ${tipAmountPerPerson.toFixed(2)}
        </h5>
      </div>
      <div className="mb-9 flex justify-between">
        <div>
          <p className=" text-base font-bold text-white">Total</p>
          <p className="text-xs font-bold text-light-grayish-cyan">/ person </p>
        </div>
        <h5 className="text-4xl font-bold text-strong-cyan">
          ${totalAmountPerPerson.toFixed(2)}
        </h5>
      </div>
      </div>
        <button
          onClick={() => handleReset()}
          disabled={disableResetButton}
          className="mb-6 w-full  rounded-md bg-strong-cyan px-3 py-4 disabled:bg-dark-grayish-cyan"
        >
          <p className="text-xl font-bold text-very-dark-cyan">RESET</p>
        </button>
      
    </section>
  );
}

export default Results;

import React, { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import Input from "./components/input";
import personIcon from "./images/icon-person.svg";
import dollarIcon from "./images/icon-dollar.svg";
import TipAmount from "./components/TipAmount";
import Results from "./components/Results";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipPercentage, setTipPercentage] = useState("");
  const [customTipPercentage, setCustomTipPercentage] = useState(0);

  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);

  const [disableResetButton, setDisableResetButton] = useState(true);

  const handleAmountChange = (e) => {
    setBillAmount(e.target.value);
  };

  const handleNumberOfPeople = (e) => {
    setNumberOfPeople(e.target.value);
  };

  useEffect(() => {
    if (numberOfPeople > 0) {
      setTipAmountPerPerson(billAmount / numberOfPeople);
      setTotalAmountPerPerson(
        (billAmount * (1 + tipPercentage / 100)) / numberOfPeople,
      );
      setDisableResetButton(false);
    }
  }, [tipPercentage, billAmount, numberOfPeople]);

  const handleCustomTipChange = (e) => {
    const customTip = e.target.value;
    setCustomTipPercentage(e.target.value);
    setTipPercentage(customTip);
  };

  const handleTipAmountChange = (percentage) => {
    setCustomTipPercentage("");
    setTipPercentage(percentage);
  };

  const handleReset = () => {
    setBillAmount("");
    setNumberOfPeople("");
    setTipPercentage("");
    setCustomTipPercentage("");
    setTotalAmountPerPerson(0);
    setTipAmountPerPerson(0);

    setDisableResetButton(true);
  };

  return (
    <main className="bg-light-grayish-cyan">
      <div className="flex items-center justify-center">
        <img className="py-10" src={logo} alt="logo" />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 sm:m-auto  sm:bg-light-grayish-cyan">
        <div className="bg-white sm:flex sm:max-h-[480px] sm:max-w-[920px] sm:flex-row sm:rounded-3xl">
          <div className="w-full p-4 sm:w-1/2 sm:px-4 sm:py-10">
            <p className="mb-2 text-base font-bold text-dark-grayish-cyan">
              Bill
            </p>
            <Input
              icon={dollarIcon}
              value={billAmount}
              handleChange={handleAmountChange}
              placeholder={0}
            />
            <p className="mb-4 mt-9 text-base font-bold text-dark-grayish-cyan">
              Select Tip %
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-2">
              <TipAmount
                percentage={5}
                handleClick={handleTipAmountChange}
                tipPercentage={tipPercentage}
              />
              <TipAmount
                percentage={10}
                handleClick={handleTipAmountChange}
                tipPercentage={tipPercentage}
              />
              <TipAmount
                percentage={15}
                handleClick={handleTipAmountChange}
                tipPercentage={tipPercentage}
              />
              <TipAmount
                percentage={25}
                handleClick={handleTipAmountChange}
                tipPercentage={tipPercentage}
              />
              <TipAmount
                percentage={50}
                handleClick={handleTipAmountChange}
                tipPercentage={tipPercentage}
              />
              <Input
                handleChange={handleCustomTipChange}
                value={customTipPercentage}
                placeholder={"Custom"}
              />
            </div>
            <p className="mt-9 text-base font-bold text-dark-grayish-cyan">
              Number of People
            </p>
            <Input
              icon={personIcon}
              value={numberOfPeople}
              handleChange={handleNumberOfPeople}
              placeholder={0}
            />
          </div>
          <Results
            tipAmountPerPerson={tipAmountPerPerson}
            totalAmountPerPerson={totalAmountPerPerson}
            disableResetButton={disableResetButton}
            handleReset={handleReset}
          />
        </div>
      </div>
    </main>
  );
}

export default App;

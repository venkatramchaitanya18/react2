import { useEffect, useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("");
  const [currentExpression, setCurrentExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(currentExpression);
        setText(( ) => (
          <>
            {currentExpression} <br/> {result}
          </>
        ));
        setCurrentExpression("");
      } catch (error) {
        setText(() => (
          <>
            {currentExpression} <br /> Error
          </>
        ));
        setCurrentExpression("");
      }
    } else if (value === "X") {
      setCurrentExpression(
        (prevExpression) => prevExpression.slice(0, -1)  
      );
    } else {
      setCurrentExpression((prevExpression) => prevExpression + value);
    }
  };

  useEffect(() => {
    console.log(currentExpression);
  }, [currentExpression]);

  const numberButtons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "=",
  ];
  const operatorButtons = ["X", "/", "*", "-", "+"];

  return (
    <div className="w-96 mx-auto p-4 bg-gray-200 rounded-lg shadow-lg">
      <div
        className="w-full h-40 text-2xl py-2  text-black text-right px-3 mb-4 bg-white border rounded-lg overflow-auto"
        style={{ maxHeight: "200px", scrollbarWidth: "none" }}
      >
        {text}
        <br />
        {currentExpression}
      </div>
      <div className="grid grid-cols-4 gap-2 h-full">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-2 h-full">
            {numberButtons.map((btn) => (
              <button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className="btn text-2xl p-2 rounded-lg"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-rows-5 gap-2 h-full">
            {operatorButtons.map((btn) => (
              <button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className="btn text-2xl p-2 rounded-lg"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

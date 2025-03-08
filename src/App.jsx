import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [currentResult, setCurrentResult] = useState(
    "No operation performed yet"
  );
  const [result, setResult] = useState([]); // History log

  const handleDivide = () => {
    if (num2 === 0) {
      setCurrentResult("Cannot divide by zero");
      setResult((prevResult) => [
        ...prevResult,
        `User attempted to divide by zero`,
      ]);
    } else {
      const division = num1 / num2;
      setCurrentResult(`Division: ${num1} / ${num2} = ${division}`);
      setResult((prevResult) => [
        ...prevResult,
        `User divided ${num1} by ${num2}`,
      ]);
    }
  };

  const handleSubtract = () => {
    const difference = num1 - num2;
    setCurrentResult(`Difference: ${num1} - ${num2} = ${difference}`);
    setResult((prevResult) => [
      ...prevResult,
      `User subtracted ${num2} from ${num1}`,
    ]);
  };

  const handleProduct = () => {
    const product = num1 * num2;
    setCurrentResult(`Product: ${num1} * ${num2} = ${product}`);
    setResult((prevResult) => [
      ...prevResult,
      `User multiplied ${num1} by ${num2}`,
    ]);
  };

  const handleAdd = () => {
    const sum = num1 + num2;
    setCurrentResult(`Sum: ${num1} + ${num2} = ${sum}`);
    setResult((prevResult) => [
      ...prevResult,
      `User added ${num1} and ${num2} together`,
    ]);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div>
          <label htmlFor="num1">Number 1:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="num2">Number 2:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>

        <p>
          <strong>Last Operation Result:</strong> {currentResult}
        </p>

        <button onClick={handleAdd}>Sum</button>
        <button onClick={handleSubtract}>Difference</button>
        <button onClick={handleProduct}>Product</button>
        <button onClick={handleDivide}>Divide</button>
      </div>

      <div className="log">
        <h3>Operations Log:</h3>
        {result.map((str, index) => (
          <p key={index}>{str}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

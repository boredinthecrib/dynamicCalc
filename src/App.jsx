import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [currentResult, setCurrentResult] = useState(
    "No operation performed yet"
  );
  const [result, setResult] = useState([]);

  const handleDivide = () => {
    if (num2 === 0) {
      setCurrentResult("Cannot divide by zero");
      setResult((prevResult) => [
        ...prevResult,
        "User attempted to divide by zero",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-96 max-w-sm">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Simple Calculator
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm">Number 1:</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-1"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm">Number 2:</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-1"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>

        <p className="text-gray-800 font-semibold text-center text-lg mb-6">
          {currentResult}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white p-3 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sum
          </button>
          <button
            onClick={handleSubtract}
            className="bg-green-500 text-white p-3 rounded-lg transition duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Difference
          </button>
          <button
            onClick={handleProduct}
            className="bg-yellow-500 text-white p-3 rounded-lg transition duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Product
          </button>
          <button
            onClick={handleDivide}
            className="bg-red-500 text-white p-3 rounded-lg transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Divide
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-lg rounded-xl p-6 w-96 max-w-sm">
        {result.length > 0 && (
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Operations Log:
          </h3>
        )}

        <div className="h-40 overflow-y-auto border border-gray-300 p-3 rounded-lg bg-gray-50">
          {result.map((str, index) => (
            <p key={index} className="text-sm text-gray-700 mb-2">
              {str}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

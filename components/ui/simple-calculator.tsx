"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default export of the CalculatorComponent function
export default function CalculatorComponent() {
  // State hooks for managing input numbers and the result
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // Handler for updating num1 state on input change
  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
  };

  // Handler for updating num2 state on input change
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
  };

  // Function to perform addition and set the result
  const add = (): void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
  };

  // Function to perform subtraction and set the result
  const subtract = (): void => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };

  // Function to perform multiplication and set the result
  const multiply = (): void => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };

  // Function to perform division and set the result
  const divide = (): void => {
    if (parseFloat(num2) !== 0) {
      setResult((parseFloat(num1) / parseFloat(num2)).toString());
    } else {
      setResult("Error: Division by zero");
    }
  };

  // Function to clear the inputs and result
  const clear = (): void => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  // JSX return statement rendering the calculator UI
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('https://cdn.pixabay.com/photo/2023/07/31/17/51/math-8161584_1280.png')] bg-no-repeat bg-cover ">

      <Card className="w-full max-w-2xl  border-2 border-black p-6 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Card header with title */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Simple Calculator By Yusra Saleem
          </CardTitle>
        </CardHeader>
        {/* Card content including inputs, buttons, and result display */}
        <CardContent className="space-y-4">
          {/* Input fields for numbers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="  flex flex-col space-y-2">
              <Label htmlFor="num1">Number 1</Label>
              <Input
                className=" border  bg-white border-black"
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter a number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2">Number 2</Label>
              <Input
                id="num2"
                className=" border bg-white border-black"
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter a number"
              />
            </div>
          </div>
          {/* Buttons for arithmetic operations */}
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="text-2xl  bg-white border border-black font-bold text-gray-700 dark:text-gray-300"
              onClick={add}
            >
              +
            </Button>
            <Button
              variant="outline"

              className="text-2xl  border  bg-white border-black font-bold text-gray-700 dark:text-gray-300"
              onClick={subtract}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="text-2xl  bg-white border border-black font-bold text-gray-700 dark:text-gray-300"
              onClick={multiply}
            >
              *
            </Button>
            <Button
              variant="outline"
              className="text-2xl  bg-white border border-black font-bold text-gray-700 dark:text-gray-300"
              onClick={divide}
            >
              /
            </Button>
          </div>
          {/* Display the result */}
          <div className="flex flex-col text-xl space-y-2 ">
            <Label htmlFor="result">Result</Label>
            <Input
              id="result"
              className=" border  bg-white border-black "
              type="text"
              value={result}
              placeholder="Result"
              readOnly
            />
          </div>
          {/* Clear button to reset inputs and result */}
          <Button variant="outline" className="w-full text-white border-2 border-gray-400 bg-gray-800" onClick={clear}>
            Clear
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
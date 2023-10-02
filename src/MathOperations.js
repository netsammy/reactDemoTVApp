import React, { useState } from 'react';

function MathOperations() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
  };

  const handleDivide = () => {
    setResult(num1 / num2);
  };

  return (
    <div>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <br />
      <label>
        Number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <br />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <br />
      <label>
        Result:
        <input type="number" value={result} readOnly />
      </label>
    </div>
  );
}

export default MathOperations;
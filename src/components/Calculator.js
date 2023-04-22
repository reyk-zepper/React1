import React from "react";
import styled from "styled-components";
import { useState } from "react";
import * as math from "mathjs";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.value;
    setResult(result.concat(value));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleEqual = () => {
    try {
      const evaluatedResult = math.evaluate(result);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult("Invalid input");
    }
  };

  return (
    <StyledCalculator>
      <input type="text" placeholder="0" id="answer" value={result} />
      <input type="button" value="9" onClick={handleClick} />
      <input type="button" value="8" onClick={handleClick} />
      <input type="button" value="7" onClick={handleClick} />
      <input type="button" value="6" onClick={handleClick} />
      <input type="button" value="5" onClick={handleClick} />
      <input type="button" value="4" onClick={handleClick} />
      <input type="button" value="3" onClick={handleClick} />
      <input type="button" value="2" onClick={handleClick} />
      <input type="button" value="1" onClick={handleClick} />

      <input type="button" value="0" onClick={handleClick} />
      <input type="button" value="." onClick={handleClick} />
      <input type="button" value="+" onClick={handleClick} />
      <input type="button" value="-" onClick={handleClick} />
      <input type="button" value="*" onClick={handleClick} />
      <input type="button" value="/" onClick={handleClick} />
      <input type="button" value="%" onClick={handleClick} />

      <input type="button" value="=" onClick={handleEqual} />
      <input type="button" value="Clear" onClick={handleClear} />
    </StyledCalculator>
  );
}

const StyledCalculator = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1rem;
  width: 100vw;
  height: 80vh;
  background-color: #f5f5f5;
  input {
    border: none;
    border-radius: 0.5rem;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
  }
  #answer {
    grid-column: 1 / -1;
    font-size: 3rem;
    text-align: right;
    padding: 1rem;
  }
  input[value="="] {
    grid-column: 1 / -1;
    background-color: #ff9800;
    color: white;
    &:hover {
      background-color: #f57c00;
    }
  }
  input[value="Clear"] {
    grid-column: 1 / -1;
    background-color: #f44336;
    color: white;
    &:hover {
      background-color: #d32f2f;
    }
  }
`;

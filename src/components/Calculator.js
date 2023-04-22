import React from "react";
import styled from "styled-components";

export default function Calculator() {
  return (
    <StyledCalculator>
      <input type="text" placeholder="0" id="answer" />
      <input type="button" value="9" />
      <input type="button" value="8" />
      <input type="button" value="7" />
      <input type="button" value="6" />
      <input type="button" value="5" />
      <input type="button" value="4" />
      <input type="button" value="3" />
      <input type="button" value="2" />
      <input type="button" value="1" />

      <input type="button" value="0" />
      <input type="button" value="." />
      <input type="button" value="+" />
      <input type="button" value="-" />
      <input type="button" value="*" />
      <input type="button" value="/" />
      <input type="button" value="%" />
      <input type="button" value="=" />
      <input type="button" value="Clear" />
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

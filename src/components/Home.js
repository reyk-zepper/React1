import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const navigate = useNavigate();

  const handleCounterClick = () => {
    navigate("/counter");
  };
  const handleCalculatorClick = () => {
    navigate("/calculator");
  };

  return (
    <StyledButtonBox>
      <h1>you're HOME now</h1>
      <button onClick={handleCounterClick}>
        click me to the <strong>COUNTER</strong>
      </button>
      <button onClick={handleCalculatorClick}>
        click me to the <strong>CALCULATOR</strong>
      </button>
    </StyledButtonBox>
  );
}

const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    padding: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

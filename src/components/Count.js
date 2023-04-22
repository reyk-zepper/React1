import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleClick = () => {
    setCount(count * 2);
  };

  useEffect(() => {
    console.log({ count });
  }, [count]);

  return (
    <>
      <StyledCounter>
        <h1>Counter</h1>
        <StyledButtonCounter onClick={handleClick}>{count}</StyledButtonCounter>
        <StyledButton onClick={() => setCount(count + 1)}>+</StyledButton>
        {count > 0 && <StyledButton onClick={decrement}>-</StyledButton>}
      </StyledCounter>
    </>
  );
}

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #282c34;
  color: white;
  font-size: 2rem;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
`;

const StyledButtonCounter = styled.button`
  border: red solid 1px;
  font-size: 10rem;
  margin: 1rem;
  border-radius: 1rem;
  :hover {
    background-color: grey;
    color: #282c34;
  }
`;

const StyledButton = styled.button`
  border: red solid 1px;
  font-size: 3rem;
  margin: 1rem;
  border-radius: 50%;
  :hover {
    background-color: coral;
    color: #282c34;
  }
`;

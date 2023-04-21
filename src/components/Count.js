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
    <StyledCounter>
      <h1>Counter</h1>
      <button onClick={handleClick}>{count}</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count > 0 && <button onClick={decrement}>-</button>}
    </StyledCounter>
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
  button {
    font-size: 2rem;
    margin: 1rem;
  }
  p {
    font-size: 4rem;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 1rem;
  }
`;

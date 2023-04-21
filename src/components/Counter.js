import React from "react";
import styled from "styled-components";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <StyledCounter>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
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
`;

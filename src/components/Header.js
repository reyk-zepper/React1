import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <ul>
        <li>Home</li>
        <li>Counter</li>
        <li>About</li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100vw;
  background-color: coral;
  color: white;
  font-size: 2rem;
  text-align: center;
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 1rem;
      cursor: pointer;
    }
  }
`;

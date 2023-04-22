import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/counter"}>
          <li>Counter</li>
        </Link>
        <Link to={"/calculator"}>
          <li>Calculator</li>
        </Link>
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

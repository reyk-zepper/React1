import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/counter");
  };

  return (
    <div>
      <h1>you're HOME now</h1>
      <button onClick={handleClick}>click me to the COUNTER</button>
    </div>
  );
}

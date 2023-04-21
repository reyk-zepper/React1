import React from "react";

export default function User({ name, kind }) {
  return (
    <div>
      <h1>hello my name is {name}</h1>
      <p>i'm a {kind}</p>
    </div>
  );
}

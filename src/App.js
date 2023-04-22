import React from "react";
import Counter from "./components/Count";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Errorpage from "./components/Errorpage";
import { Route, Routes } from "react-router-dom";

import RickAndMorty from "./components/RickAndMorty";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/counter"
          element={
            <>
              <Header />
              <Counter />
            </>
          }
        />
        <Route
          path="/calculator"
          element={
            <>
              <Header />
              <Calculator />
            </>
          }
        />
        <Route
          path="/rickandmorty"
          element={
            <>
              <Header />
              <RickAndMorty />
            </>
          }
        />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

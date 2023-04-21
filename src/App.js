import React from "react";
import Counter from "./components/Count";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Errorpage from "./components/Errorpage";
import { Route, Routes } from "react-router-dom";

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
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

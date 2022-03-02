import React from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Footer,
  Possibility,
  Blog,
  WhatGPT3,
  Header,
  Features,
} from "./containers";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

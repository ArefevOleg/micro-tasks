import React, { useState } from "react";
import "./App.css";
import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { Header } from "./site/Header";
import { Button } from "./site/Button";
import { NewComponent } from "./site/NewComponent";

function App() {


  return (
    <>
      <Header titleHeader={"Header menu"} />
      <NewComponent />
    </>
  );
}

export default App;

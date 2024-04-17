import React, { useState } from "react";
import "./App.css";
import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { Header } from "./site/Header";
import { Button } from "./site/Button";

function App() {
const Button1Foo = () => {
console.log('im MalGanis')
}

const Button2Foo = () => {
  console.log('im Trall')
}


  return (
    <>
      <Header titleHeader={"Header"} />
      <Body titleBody={"Body"} />
      <Footer titleFooter={"Footer"} />
      <Button name="MyYoutobeChanel-1" callback={Button1Foo}/>
      <Button name="MyYoutobeChanel-2" callback={Button2Foo}/>
    </>
  );
}

export default App;

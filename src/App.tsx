import React, { useState } from "react";
import "./App.css";
import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { Header } from "./site/Header";
import { Button } from "./site/Button";
import { log } from "console";

function App() {
const Button1Foo = (subscriber: string, age: number, address: string) => {
console.log(subscriber, age, address)
}

const Button2Foo = (subscriber: string) => {
  console.log(subscriber)
}

const Button3Foo = () => {
  console.log('im stupid button')
}

// let a = 1;
let [a, setA] = useState (0)

const onClickHandler = () => {
  setA (++a);
  console.log(a)
}

const reset = () => {
  setA (0);
}

  return (
    <>
      <Header titleHeader={"Header"} />
      <Body titleBody={"Body"} />
      <Footer titleFooter={"Footer"} />
      <Button name={"MyYoutobeChanel-1"} callBack={()=>Button1Foo('im MalGanis', 33, 'Live in Moscow')}/>
      <Button name={"MyYoutobeChanel-2"} callBack={()=>Button2Foo('im Trall')}/>
      <Button name={"stupid button"} callBack={Button3Foo}/>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={reset}>0</button>
    </>
  );
}

export default App;

import React, {useState} from "react";
import "./App.css";
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import styled from "styled-components";

function App() {
    let [messege, setMessage] = useState(
        [
            {messege: "messege1"},
            {messege: "messege2"},
            {messege: "messege3"},
        ])

    const addMessage = (title: string) => {
        let neeMwssege = {messege: title}
        setMessage([neeMwssege,...messege])

    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {messege.map((el, index) => {
                return (
                    <div key={index}>{el.messege}</div>
                )
            })}
        </div>
    )
}

export default App;

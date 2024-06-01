import React, { useState } from "react";
import "./App.css";
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";
function App() {
    let [messege, setMessege] = useState(
        [
            {messege: "messege1"},
            {messege: "messege2"},
            {messege: "messege3"},
        ])

return (
    <div>
        <FullInput />
        {messege.map((el, index) => {
            return <div key={index}>{el.messege}</div>
        })}
    </div>
)}

export default App;

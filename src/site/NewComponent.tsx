import React, {useState} from "react";
import {Button} from "./Button";

type MoneyType = "Dollars" | "Ruble" | "All"

export const NewComponent = () => {
    const [money, setMoney] = useState([
        {banknots: "Dollars", value: 100, number: " a1234567890"},
        {banknots: "Dollars", value: 50, number: " z1234567890"},
        {banknots: "Ruble", value: 100, number: " w1234567890"},
        {banknots: "Dollars", value: 100, number: " e1234567890"},
        {banknots: "Dollars", value: 50, number: " c1234567890"},
        {banknots: "Ruble", value: 100, number: " r1234567890"},
        {banknots: "Dollars", value: 50, number: " x1234567890"},
        {banknots: "Ruble", value: 50, number: " v1234567890"},
    ]);
let [filter, setFilter] = useState()


    let currentMoney = money.filter(filterMoney => filterMoney.banknots === "Ruble");

    let dollars = () => {

    }

    let ruble = () => {

    }

    let all = () => {

    }

    return (
        <div>
            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={"Dollars"} callBack={dollars} />
                <Button name={"Ruble"} callBack={ruble} />
                <Button name={"All"} callBack={all} />
            </div>
        </div>
    );
};

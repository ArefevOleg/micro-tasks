import React, { useState } from "react";

// type NewComponentType = {
//   //students: Array<StydentType> 1й способ
//   students: StydentType[];
// };

// type StydentType = {
//   id: number;
//   name: string;
//   age: number;
// };

export const NewComponent = () => {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);


  let correntMoney = money.filter((filterMoney)=>filterMoney.banknots==='RUBLS')

  return (
    <div>
      <ul>
        {correntMoney.map((objectFromStudentsArray) => {
          return (
            <li>
              <span>{objectFromStudentsArray.banknots}</span>
              <span>{objectFromStudentsArray.value}</span>
              <span>{objectFromStudentsArray.number}</span>
            </li>
          );
        })}
      </ul>
      <button></button>
    </div>
   
  );
};

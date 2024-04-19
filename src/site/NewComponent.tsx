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

type FilterType = 'all' | 'Dollars' | 'RUBLS'

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
  //  если nameButton === 'Dollars' то отрисуй так:
  // correntMoney = money.filter((filterMoney)=>filterMoney.banknots==='Dollars')

  //  если nameButton === 'RUBLS' то отрисуй так:
  // correntMoney = money.filter((filterMoney)=>filterMoney.banknots==='RUBLS')

const [filter, setFilter] = useState<FilterType>('all')

let correntMoney = money;

if (filter === 'Dollars') {
  correntMoney = money.filter((filterMoney)=>filterMoney.banknots==='Dollars')
} 
if (filter === 'RUBLS') {
  correntMoney = money.filter((filterMoney)=>filterMoney.banknots==='RUBLS')
}
  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
    
  };

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
      <div>
        <button onClick={() => onClickFilterHandler("all")}>all</button>
        <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
        <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
      </div>
    </div>
  );
};

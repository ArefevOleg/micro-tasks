// import React, {MouseEvent} from 'react'

type ButtonPropsType = {
  name: string
}




export const Button = (props: ButtonPropsType) => {
//   const myFirstSybscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Hello im Oleg");
//   };

//   const myTwoSybscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Hello im Ivan");
//   };

// const onClickHandler = (name: string) => {
//   console.log(name)
// }

  return (
    <div>
      <button>{props.name}</button>
      {/* <button onClick = {(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler('Oleg')}>MyYoutobeChanelk-1</button>
      <button onClick = {(event: React.MouseEvent<HTMLButtonElement>) =>onClickHandler('Ivan')}>MyYoutobeChanelk-2</button> */}
    </div>
  );
};


// import React, {MouseEvent} from 'react'

type ButtonPropsType = {
  name: string
  callBack: () => void
}

export const Button = ({callBack, name}: ButtonPropsType) => {


  return (
    <div>
      <button onClick = {callBack}>{name}</button>
    </div>
  );
};

import {Button} from "./Button";
import {ChangeEvent, useState} from "react";

type InputType = {
    addMessage: (title: string) => void
}

export const FullInput = ({addMessage}: InputType) => {
    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
const onclickBtnHandler = () => {
    addMessage(title)
    setTitle("")
}

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <Button title={"+"} callBack={onclickBtnHandler}/>
        </div>
    )
}
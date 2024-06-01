import {Button} from "./Button";

export const FullInput = () => {
    return (
        <div>
            <input type="text"/>
            <Button title={"+"} callBack={() => ("+")}/>
        </div>
    )
}
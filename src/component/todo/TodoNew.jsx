import { useState } from "react";

const TodoNew = (props) => {

    const { AddNewTodo } = props;

    // AddNewTodo('Khang');

    const [valueInput, setValueInput] = useState("Khang");

    const handleClick = () => {
        console.log("check value ip: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name);

    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>My name is {valueInput}</div>
        </div>
    );
}

export default TodoNew;
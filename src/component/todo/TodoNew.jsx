import { useState } from "react";

const TodoNew = (props) => {

    const { AddNewTodo } = props;

    const [valueInput, setValueInput] = useState("");

    const handleClick = () => {
        AddNewTodo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name);

    }



    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => {
                    handleOnChange(event.target.value)
                }}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    );
}

export default TodoNew;
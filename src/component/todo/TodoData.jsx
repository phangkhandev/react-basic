
const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    }
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name},{item.id}</div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => { handleDeleteTodo(item.id) }}
                        >Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoData;
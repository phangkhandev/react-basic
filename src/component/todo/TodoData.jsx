
const TodoData = (props) => {
    const { todoList } = props;
    return (
        <div className='todo-data'>
            <div>todo-body</div>
            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>
    );
}

export default TodoData;
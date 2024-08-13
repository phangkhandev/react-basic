import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import Logo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "PHAN DUONG KHANG" },
    { id: 2, name: "KHANG PHAN DUONG" }
  ]);

  const AddNewTodo = (name) => {

  }


  return (
    <div className="todo-container">
      <div className="todo-title">ToDo List</div>
      <TodoNew
        AddNewTodo={AddNewTodo}
      />
      <TodoData
        todoList={todoList}
      />
      <div className='todo-img'>
        <img className='logo' src={Logo} alt="" />
      </div>
    </div>
  )
}

export default App

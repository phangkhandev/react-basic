import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import Logo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const deleteTodo = (id) => {
    const result = todoList.filter(item => item.id !== id);
    setTodoList(result);


    // setTodoList(e => e.filter(item => item.id !== id))


  }


  return (
    <div className="todo-container">
      <div className="todo-title">ToDo List</div>
      <TodoNew
        AddNewTodo={AddNewTodo}
      />

      <div>
        {todoList.length === 0 ?
          <div className='todo-img'>
            <img className='logo' src={Logo} />
          </div>
          :
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
        }
      </div>
    </div>
  )
}

export default App

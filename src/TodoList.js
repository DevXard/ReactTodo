import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { useState } from 'react';
import {v4 as uuid} from 'uuid'


const TodoList = () => {
    const [data, setData] = useState([])
    
    const addNewTodo = (todo) => {
        setData(t => ([...t, {todo, id: uuid()}]))
        
    }

    const removeTodo = (id) => {
        setData(data => data.filter(todo => todo.id !== id))
    }
    return (
        <div>
            <h2>Todo List</h2>
            <NewTodoForm addNewTodo={addNewTodo} />
            {data.map((todo) => <Todo id={todo.id} removeTodo={removeTodo} key={todo.id} todo={todo.todo} />)}
        </div>
    )
}

export default TodoList;
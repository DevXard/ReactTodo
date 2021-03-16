const Todo = ({id, todo, removeTodo}) => {
    return(
         <div data-test-id="todo" >{todo} <button  onClick={() => removeTodo(id)}>X</button></div> 
    )
}

export default Todo;
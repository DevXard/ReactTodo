import {useState} from 'react';

const NewTodoForm = ({addNewTodo}) => {
    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewTodo(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input 
            id="todo"
            type="text"
            name='todo'
            value={formData}
            onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;
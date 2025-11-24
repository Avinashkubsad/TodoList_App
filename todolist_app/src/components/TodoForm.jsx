import React,{useState} from 'react'


export const TodoForm = ({addTodo}) => {
  const [value,setvalue] = useState("")     //declaree the setvalue, and value to store the input data


  const handlesubmit = e =>{
    e.preventDefault();    // to prevent page from reloading on submit

    addTodo(value) //addtodo is a function passed as a prop from the parent component TodoWrapper.jsx
  }
  return (
    <form className='Todoform' onSubmit={handlesubmit}>
        <input type ="text" className='todo-input' placeholder="Add a task to do today ?"
        onChange= {(e) => setvalue(e.target.value)}/>
        <button  type ="submit" className="todo-btn">
            ADD TASK
        </button>
    </form>
  )
}

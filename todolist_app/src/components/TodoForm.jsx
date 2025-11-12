import React,{useState} from 'react'


export const TodoForm = () => {
  const [value,setvalue] = useState("")     //declaree the setvalue, and value to store the input data


  const handlesubmit = e =>{
    e.preventDefault();    // to prevent page from reloading on submit

    console.log(value)
  }
  return (
    <form className='Todoform' onSubmit={handlesubmit}>
        <input type ="text" className='todo-input' placeholder="Add a task to do today"
        onChange= {(e) => setvalue(e.target.value)}/>
        <button  type ="submit" className="todo-btn">
            ADD TASK
        </button>
    </form>
  )
}

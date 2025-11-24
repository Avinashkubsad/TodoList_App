import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'   // to generate unique id for each todo item
//uuidv4()   // initialize the uuid function

export const TodoWrapper = () => {
  const[todos,setTodos] = useState([])


  const addTodo = todo =>{
      setTodos([...todos, {id:uuidv4(),task :todo,completed:false, isEditing :false}])
      console.log(todos);

  }
  return (
    <>
    <h1>Hi Avinash Welcome Buddy!!</h1>
    <h2>
      Ready to To do something Productive Todayy!!
    </h2>
    <div className='TodoWrapper'>

   <TodoForm  addTodo={addTodo}>{/* addTodo is a property & {addTodo} is a function */}
</TodoForm>

    </div>
    </>
  )
}

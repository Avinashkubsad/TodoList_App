import React,{useState} from 'react'
import { TodoForm } from './TodoForm'

export const TodoWrapper = () => {
  const[todos,setTodos] = useState([])
  return (
    <>
    <h1>Hi Avinash Welcome Buddy!!</h1>
    <h2>
      Ready to To do something useful Todayy!!
    </h2>
    <div className='TodoWrapper'>

      <TodoForm>
        
      </TodoForm>
    </div>
    </>
  )
}

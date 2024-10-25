import React from 'react'
import { useAddtodoMutation,  } from '../../services/todo'

function NewTodo() {
   var [addTodoFn]=useAddtodoMutation()
  return (
    <div>
      <h1>newtodo</h1>
      <input type="text" id="d1"/>
      <button onClick={()=>{addTodoFn({title:document.getElementById("d1").value})}}>addtodo</button>
    </div>
  )
}

export default NewTodo

import { useContext, useState } from 'react'
import { saveToDo } from '../service/todoService'
import { Context } from '../state/ContextProvider'

const TodoForm = ({ categoryParent }) => {
  const { dispatch } = useContext(Context)
  const [userInput, setUserInput] = useState('')
  const onSubmitToDo = async (event) => {
   
    event.preventDefault()
    const postTodo = { task: userInput, fkCategoryId: categoryParent.id, done: false }
    const newState = await saveToDo(postTodo)
    if(newState){
      dispatch({ type: 'add-todo', payload: newState })
      setUserInput("")
    }
  }
  return (
    <form onSubmit={(event) => onSubmitToDo(event)}>
      <label id="todos">
        <input placeholder='New toDo' onChange={(event) => setUserInput(event.target.value)} value={userInput} />
      </label>
    </form>
  )
}

export default TodoForm
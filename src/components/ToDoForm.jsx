import { useContext, useState } from 'react'
import { saveToDo } from '../services/ToDoServices'
import { Context } from '../state/ContextProvider'

const TodoForm = ({ categoryParent }) => {
  const { dispatch } = useContext(Context)
  const [userInput, setUserInput] = useState('')
  const onSubmitToDo = async (e) => {
    e.preventDefault()
    const postTodo = { task: userInput, fkCategoryId: categoryParent.fkCategoryId, done: false }
    const newState = await saveToDo(postTodo)
    if(newState){
      dispatch({ type: 'add-todo', payload: newState })
      setUserInput("")
    }
  }
  return (
    <form onSubmit={(e) => onSubmitToDo(e)}>
      <label>
        <input placeholder='New toDo' onChange={(e) => setUserInput(e.target.value)} value={userInput} />
      </label>
    </form>
  )
}

export default TodoForm
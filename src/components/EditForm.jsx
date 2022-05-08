import { useContext } from 'react'
import { Context } from '../state/ContextProvider'
import {saveCategories} from '../service/categoryService'
import { updateToDo } from '../service/todoService'

const EditForm = ({text, setText}) => {
  const { dispatch } = useContext(Context)
  const onSubmit = async (e) => {
    e.preventDefault()
    const updatedTodo = {...text}
    const newState = await updateToDo(updatedTodo)
    if(newState){
        dispatch({type:"update-todo",payload:newState})
        setText({})
    }
    
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>
        <input value={text.task} onChange={(e) => setText({...text, task:e.target.value})} placeholder='Input text' />
      </label>
    </form>
  )
}

export default EditForm
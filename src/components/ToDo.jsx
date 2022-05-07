import { useContext } from 'react'
import { deleteToDo, updateToDo } from '../service/todoService'
import { Context } from '../state/ContextProvider'
const Todo = ({ todo }) => {
  const { dispatch } = useContext(Context)

  const deleteSingleToDo = async (todo) => {
    const response = await deleteToDo(todo)
    if(response.status === 200){
      dispatch({ type: 'remove-todo', payload: todo })
    }
  }
  const decorationDone = {
    textDecoration: "line-through",
  };
  
  const updateCheck = async (todo) => {
    const todoCheck = { ...todo, done: !todo.done }
    const newState = await updateToDo(todoCheck)
    if(newState){
      dispatch({ type: 'update-todo', payload: newState })
    }
  }
  return (
    <div style={{ border: 'solid black 1px' }}>
      <h3 style={todo.done ? decorationDone : {}}>{todo.task} </h3>
      <input type='checkbox' checked={todo.done} onChange={() => updateCheck(todo)} />
      <button onClick={() => deleteSingleToDo(todo)}>Delete</button>
      <button>Update</button>
    </div>
  )
}
export default Todo
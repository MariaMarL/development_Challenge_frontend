import { useContext } from 'react'
import { deleteToDo, updateToDo } from '../service/todoService'
import { Context } from '../state/ContextProvider'
import { VscTrash } from 'react-icons/Vsc';
import { BiEdit } from 'react-icons/Bi';
import "./list.css";

const Todo = ({ todo, setText }) => {
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

  const editTodo = (todo)=>{
    setText(todo)
  }
  
  return (
    
    <div  >
      <h3 id="id" style={todo.done ? decorationDone : {}}>{todo.task} </h3>
      <input type='checkbox' checked={todo.done} onChange={() => updateCheck(todo)} />
      <button className= "btn" id="Erase" onClick={() => deleteSingleToDo(todo)}><VscTrash /></button>
      {!todo.done && <button className= "btn" onClick={()=>editTodo(todo)}><BiEdit/></button>}
    </div>
  )
}
export default Todo
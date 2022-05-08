import { useContext, useState } from 'react'
import { Context } from '../state/ContextProvider'
import Todo from './Todo'
import TodoForm from './TodoForm'
import {deleteCategories} from '../service/categoryService'
import EditForm from './EditForm'
import { VscTrash } from 'react-icons/Vsc';
import "./list.css";

const Category = ({ category }) => {
  const [text,setText]=useState({})
  const { dispatch } = useContext(Context)
  const deleteSingleCategory = async (category) => {
    const response = await deleteCategories(category)
    if(response.status == 200){
      dispatch({ type: 'remove-category', payload: category })
    }
  }
  return (
    
      <ul >
        <h2>{category.categoryName}</h2>
        <button className = "btn" id="Erase" onClick={() => deleteSingleCategory(category)}><VscTrash /></button>
        {
          text.task? <EditForm setText = {setText} text={text}/>: <TodoForm categoryParent={category} /> 
        }
        {category.toDoList.map((todo) => (
        <Todo key={todo.id} todo={todo} set={setText} />
        ))}
      </ul>
    
  )}
export default Category
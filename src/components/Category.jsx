import { useContext } from 'react'
import { Context } from '../state/ContextProvider'
import Todo from './Todo'
import TodoForm from './TodoForm'
import {deleteCategories} from '../service/categoryService'

const Category = ({ category }) => {
  const { dispatch } = useContext(Context)
  const deleteSingleCategory = async (category) => {
    const response = await deleteCategories(category)
    if(response.status == 200){
      dispatch({ type: 'remove-category', payload: category })
    }
  }
  return (
    <ul>
      <li>
        <h2>{category.categoryName}</h2>
        <button onClick={() => deleteSingleCategory(category)}>Delete</button>
        <TodoForm categoryParent={category} />
        {category.toDoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </li>
    </ul>
  )}
export default Category
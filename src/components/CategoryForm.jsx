import { useContext, useState } from 'react'
import { Context } from '../state/ContextProvider'
import {saveCategories} from '../service/categoryService'
import "./list.css";

const CategoryForm = () => {
  const { dispatch } = useContext(Context)
  const [title, setTitle] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault()
    if(title){
      const newCategory = {categoryName: title}
      const response = await saveCategories(newCategory)
      dispatch({type: "add-category", payload: response})
      setTitle("")
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h1>Add Category  </h1>
      <label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='New Category' />
      </label>
    
    </form>
  )
}

export default CategoryForm
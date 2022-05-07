import { useContext } from 'react'
import { Context } from '../state/ContextProvider'
import Category from './Category'

const CategoryList = () => {
  const { state } = useContext(Context)
  
  return (
    <>
      {state.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </>
  )
}

export default CategoryList

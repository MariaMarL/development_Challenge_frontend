const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case 'add-todo':
        return payload
      case 'remove-todo':
        const parentCategory = state.find((category) => category.id === payload.FKCategoryId)
        if (parentCategory) {
          const filteredList = parentCategory.todoList.filter((todo) => todo.id !== payload.id)
          const newState = state.map((category) =>
            category.id === parentCategory.id ? { ...parentCategory, todoList: filteredList } : category
          )
          return newState
        }
        //return state
      case 'update-todo':
        return payload

      case 'add-category':
        return [...state, payload]

      case 'remove-category':
        return state.filter((category) => category.id !== payload.id)

      case 'load-state':
        return payload
        
      default:
        throw Error('Illegal action')
    }
  }
  
  export default reducer
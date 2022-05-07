import React, { createContext, useEffect, useReducer } from 'react'
import { getCategories } from '../service/categoryService';
import reducer from './Reducer';


export const Context = createContext({});

const ContextProvider = ( { children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    const loadCategory = async () => {
        const data = await getCategories()
        dispatch({type: "load-state", payload: data })
    }

    useEffect(() => {
        loadCategory()
    },[])

  return (
        <Context.Provider value={{state, dispatch}}>
          {children}
        </Context.Provider>
    )
}

export default ContextProvider
import React, { createContext, useEffect, useReducer } from 'react'
import { getCategory } from '../service/CategoryService';
import reducer from './Reducer';


export const Context = createContext({});

const ContextProvider = ( { children }) => {

    //dispatch is the trigger that execute the state changes
    const [state, dispatch] = useReducer(reducer, [])

    const loadCategory = async () => {
        const data = await getCategory()
        dispatch({type: "get-category", payload: data })
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
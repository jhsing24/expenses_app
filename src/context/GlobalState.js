import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial state
const initState = {
    transactions: [
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Salary', amount:30},
        {id:3, text:'Books', amount:-10},
        {id:4, text:'Camera', amount:-150}
    ]
}

//Create context
export const GlobalContext = createContext(initState)

//Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
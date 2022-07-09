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

    //Actions
    function deleteTrans(id) {
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        })
    }

    function addTrans(transaction) {
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTrans, addTrans
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
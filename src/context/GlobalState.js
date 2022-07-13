import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial state
const initState = {
    transactions: [
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
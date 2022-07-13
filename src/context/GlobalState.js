import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//Initial state
const initState = {
    transactions: JSON.parse(localStorage.getItem("transactions") || "[]")
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
        let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
        transactions = transactions.filter(transaction => transaction.id !== id)
        console.log(transactions)
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    function deleteAllTrans() {
        dispatch({
            type: 'DELETE_ALL_TRANS'
        })
        localStorage.clear();
    }

    function addTrans(transaction) {
        var transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
        console.log(transactions)
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        })
        transactions.push(transaction)
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }


    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTrans, addTrans, deleteAllTrans
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default (state, action) => {
    switch(action.type){
        case 'DELETE_ALL_TRANS':
            return {
                transactions: []
            }
        case 'DELETE_TRANS':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANS':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state
    }
}
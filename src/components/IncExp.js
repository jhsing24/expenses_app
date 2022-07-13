import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncExp = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount)
  
  //Calculate Income
  const inc = amounts
    .filter(item => item>0)
    .reduce((acc,item) => (acc+=item),0)
    .toFixed(2)
  
  //Calculate Expenses
  const exp = (amounts
    .filter(item => item < 0)
    .reduce((acc,item) => (acc+=item),0)* -1)
    .toFixed(2)

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${inc}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${exp}</p>
        </div>
      </div>
  )
}

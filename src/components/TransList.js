import React, { useContext } from 'react'
import { Trans } from './Trans';
import { GlobalContext } from '../context/GlobalState'

export const TransList = () => {
    const { transactions } = useContext(GlobalContext);
  return (
    <div>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction => (
                <Trans key={transaction.id} transaction={transaction}/>
            ))}
        </ul>
    </div>
  )
}
import React, { useContext } from 'react'
import { Trans } from './Trans';
import { GlobalContext } from '../context/GlobalState'

export const TransList = () => {
    const { transactions, deleteAllTrans } = useContext(GlobalContext);
    
    const onSub = e => {
      e.preventDefault()


      deleteAllTrans();
    }
  return (
    <div>
        <h3>History</h3>
        {transactions.length===0?
        
      <h4 className='nothing'>Nothing here yet...</h4>
      :
      <div>
        <ul className="list">
          {transactions.map(transaction => (
              <Trans key={transaction.id} transaction={transaction}/>
          ))}
        </ul>
        <button className="delete-all-btn" onClick={onSub}>Clear All Transactions</button>
      </div>
        }
    </div>
  )
}

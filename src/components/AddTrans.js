import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTrans = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)
    const { addTrans } = useContext(GlobalContext)

    const onSub = e => {
      e.preventDefault()

      const newTrans = {
         id: Math.floor(Math.random()*100000000),
         text,
         amount: +amount
      }

      addTrans(newTrans)
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSub}>
            <div className="form-control">
            <label htmlFor="text">Name</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)
            </label>
          <input type="number" placeholder="Enter amount..."  value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
        
    </>
  )
}

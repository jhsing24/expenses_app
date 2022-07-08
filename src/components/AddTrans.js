import React, {useState} from 'react'

export const AddTrans = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)
  return (
    <>
        <h3>Add new transaction</h3>
        <form>
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

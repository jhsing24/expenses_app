import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddTrans = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(new Date());
    const { addTrans } = useContext(GlobalContext)

    const onSub = e => {
      e.preventDefault()

      const newTrans = {
         id: Math.floor(Math.random()*100000000),
         text,
         amount: +amount,
         date: date.toDateString()
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
                <h2 style={{margin: 0, fontSize: "12px"}}>(negative - expense, positive - income)</h2>
            </label>
          <input type="number" placeholder="Enter amount..."  value={amount} onChange={(e) => setAmount(e.target.value)}/>
          <div className="form-control">
            <label htmlFor="date">Date <br />
            </label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>
        </div>
        <button disabled={amount==0 || !text} className="btn">Add transaction</button>
      </form>
        
    </>
  )
}

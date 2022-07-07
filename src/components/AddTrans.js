import React from 'react'

export const AddTrans = () => {
  return (
    <>
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control">
            <label htmlFor="text">Name</label>
            <input type="text" id="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)
            </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        
    </>
  )
}

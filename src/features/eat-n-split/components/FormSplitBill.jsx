import React, { useState } from 'react'
import Button from './Button'
const FormSplitBill = ({selectedFriend, onSplitBill}) => {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser: '';
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  function handleSubmit(e){
    e.preventDefault();
    if(!bill || !paidByUser) return;
     onSplitBill(whoIsPaying === 'user'? paidByFriend : -paidByUser )
  }

  return (
    <form action="" className='form-split-bill' onSubmit={handleSubmit}>
        <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
        {/* ...BILL... */}
        <label>💰 Bill Value</label>
        <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))} />

        {/* ...PAID BY USER */}
        <label>👤 Your Expenses</label>
        <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value)> bill ? paidByUser : Number(e.target.value))  }/>

        {/* Friends  Expenses */}
        <label>👥 {selectedFriend.name}'s' expense</label>
        <input type="text" value={paidByFriend} disabled />

        {/* ...WHO IS PAYING... */}
        <label>💵 Who is paying the bill</label>
        <select value={whoIsPaying}  onChange={(e)=>setWhoIsPaying(e.target.value)}>
          <option value="user">you</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        {/* SPLIT BILL BUTTON */}
        <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill
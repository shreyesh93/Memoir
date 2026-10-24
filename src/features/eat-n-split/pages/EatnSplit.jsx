import React, { useState } from 'react'
import './index.css'
import FriendsList from '../components/FriendsList';
import FormAddFriend from '../components/FormAddFriend';
import Button from '../components/Button';
import FormSplitBill from '../components/FormSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


const EatnSplit = () => {
  const [friends, setFriends]= useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend(){
    setShowAddFriend((showAddFriend)=> !showAddFriend)
  }

  function handleAddFriend(friend){
    setFriends(friends=>[...friends, friend])
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend){
    // setSelectedFriend(friend)
    setSelectedFriend((curr) => curr?.id === friend.id?null:friend);
    setShowAddFriend(false)
  }

  function handleSplitBill(value){
    setFriends(friends=> friends.map((friend)=> friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value}: friend));
    setSelectedFriend(null)
    
  }


return (
  <div className="eat-split-page">

    <header className="splitwise-header">
      <h1>Eat n Split 🍽️</h1>
      <p>Good food, great company, fair splits.</p>
    </header>

    <div className="app">

      <section className="sidebar friends-section">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && (
          <FormAddFriend
            onhandleAddFriend={handleAddFriend}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </section>

      <section className="split-bill-section">
        {selectedFriend ? (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        ) : (
          <div className="split-bill-placeholder">
            <h2>Split a bill</h2>
            <p>Select a friend to start splitting expenses.</p>
          </div>
        )}
      </section>

    </div>
  </div>
);

}

export default EatnSplit
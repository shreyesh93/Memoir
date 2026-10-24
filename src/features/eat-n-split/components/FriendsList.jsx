import React from 'react'
import Friend from './Friend';
const FriendsList = ({friends, onSelectFriend, selectedFriend}) => {
   
  return (
    <ul>
      {/* ...Mapping each items in the array and sending the data to Friend.jsx component (which has the structure). Then the friend component is rendered here */}
        {
            friends.map((friend)=><Friend friend={friend} key={friend.id} onSelectFriend={onSelectFriend} selectedFriend={selectedFriend}/>)
        }
    </ul>
  )
}

export default FriendsList
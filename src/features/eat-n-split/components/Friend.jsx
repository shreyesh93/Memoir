import React from "react";
import Button from "./Button";
const Friend = ({ friend, onSelectFriend, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected?'selected':""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {/*....Balance in red, green , black....*/}
      {friend.balance <0 && <p className="red">You Owe {friend.name} {Math.abs(friend.balance)}€</p>}
      {friend.balance >0 && <p className="green">{friend.name} owe's you {Math.abs(friend.balance)}€</p>}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={()=>onSelectFriend(friend)}>{isSelected?"Close":"Select"}</Button>
    </li>
      

  );
};

export default Friend;

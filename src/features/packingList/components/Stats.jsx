import '../pages/index.css'

import React from 'react'

const Stats = ({items}) => {
  if(!items.length) return <p className='stats'><em>Start adding some items to your list ▶️</em></p>

  const numItems = items.length;
  // const packedItems = items.reduce((count, item)=>item.packed?count+1:count, 0);
  const packedItems = items.filter((item)=>item.packed).length;
  const percentage = Math.round((packedItems/numItems)*100)
  

  return (
    <footer className='stats'>
      {percentage===100? 'You got everything! Ready to go ✈️' :

        (`💼 You have ${numItems} items on your list, and you are already packed ${packedItems} (${percentage}%)`)
      }
    </footer>
  )
}

export default Stats
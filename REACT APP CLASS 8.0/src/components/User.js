import React from 'react'
import { useState  } from 'react';
const User = () => {
  const [count,setCount]=useState(0);
  const [count1,setCount1]=useState(0);
  const [count2,setCoun2]=useState(0);
  return (
    <div className='user-card'>
      <h1>{count}</h1>
      <h2>Name:Rupendra</h2>
      <h3>Location:Bhopal</h3>
      <h3>Contact:rupendra2708@gmail.com</h3>
    </div>
  )
}

export default User;

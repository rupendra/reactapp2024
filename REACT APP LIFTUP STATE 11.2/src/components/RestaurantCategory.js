import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  
  const handleClick=()=>{
    setShowIndex();
  }
  return (
   <div>
     <div className="w-6/12 bg-[#29292b] shadow-lg p-4 m-auto my-4 ">
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
          <span className='font-semibold text-white'>{data.title} ({data.itemCards.length})</span> <span className='text-white font-semibold'>⨈</span>
        </div>
        {showItems &&  <ItemList items={data.itemCards}/>}
     </div>
   </div> 
  )
}

export default RestaurantCategory

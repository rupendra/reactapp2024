import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import {useRestaurentMenu} from "../utils/useRestaurentMenu";
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
  const {resId}=useParams();
  const resInfo=useRestaurentMenu(resId);
  if(resInfo===null) return <Shimmer/>;
  const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
  const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);
   return(
    <div className='text-center '>
      <h1 className='font-bold mt-10 text-xl'>{name}</h1>
      <h3 className='font-bold'>{cuisines.join(",")}</h3>
      {
        categories.map((category)=>
      <RestaurantCategory key={category.card?.card.title} data={category.card?.card}/>)
      }
    </div>
  )
}
export default RestaurantMenu;

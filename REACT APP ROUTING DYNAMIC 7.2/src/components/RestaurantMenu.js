import React from 'react'
import { useEffect ,useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';
const RestaurantMenu = () => {
  const [resInfo,setResInfo]=useState(null) 
  const {resId}=useParams();
  console.log(resId);
   useEffect(()=>{
    fetchMenu();
   },[]);

   const fetchMenu=async()=>{
    const data=await fetch(MENU_API_URL+resId);

    const json=await data.json();
    console.log(json);
    setResInfo(json.data);
   } 

   if(resInfo===null) return <Shimmer/>;

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
  const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
   return(
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
       {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price/100} Rs.</li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu

import React from 'react'
import { useEffect ,useState} from 'react'
import Shimmer from './Shimmer';
const RestaurantMenu = () => {
  const [resInfo,setResInfo]=useState(null) 
  
   useEffect(()=>{
    fetchMenu();
   },[]);

   const fetchMenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=673425&catalog_qa=undefined&submitAction=ENTER");

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

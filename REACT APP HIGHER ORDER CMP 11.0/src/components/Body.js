import { useEffect, useState } from 'react';
import RestaurantCard,{withPromotedLabel} from './RestaurantCart';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchText,setsearchText]=useState("");
  const RestaurantCardPromoted =withPromotedLabel(RestaurantCard);
   useEffect(()=>{
     fetchData(); 
   },[]);
   const fetchData= async()=>{
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json=await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   }  

   const onlineStatus=useOnlineStatus();
   if(onlineStatus === false) return (<h1>Your are Offline</h1>);
   
  return listOfRestaurants.length===0?(<Shimmer/>):(
    <div className="body">
      <div className="flex items-center">  
       <div className='search  p-4'>
        <input type="text" className='border border-solid border-black' value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
        <button className='bg-[#29292b] text-white px-4 py-1 m-4 rounded-2xl' onClick={()=>{
        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredRestaurants);
        }}>Search</button>
       </div>
        <div>
        <button
          className="bg-[#29292b] text-white px-4 py-1 m-4 rounded-2xl"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
            console.log(filteredList);
          }}
        > 
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {
          filteredRestaurants.map((restaurant,index) => (
          <Link key={restaurant.info.id}
           to={"/restaurants/"+restaurant.info.id}
           >
           {restaurant.info ? <RestaurantCardPromoted resData={restaurant}/> :<RestaurantCard  resData={restaurant} /> }
           
           </Link>
           ))
        }
      </div>
    </div>
  );
};

export default Body;

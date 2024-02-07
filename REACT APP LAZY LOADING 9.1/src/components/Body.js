import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCart';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchText,setsearchText]=useState("");
   useEffect(()=>{
     fetchData(); 
   },[]);
   const fetchData= async()=>{
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json=await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   }  

   const onlineStatus=useOnlineStatus();
   if(onlineStatus === false) return (<h1>Your are Offline</h1>);
   
  return listOfRestaurants.length===0?(<Shimmer/>):(
    <div className="body">
      <div className="filter"> 
       <div className='search'>
        <input type="text" className='search-box' value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
        <button onClick={()=>{
        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredRestaurants);
        }}>Search</button>
       </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {
          filteredRestaurants.map((restaurant,index) => (
          <Link key={restaurant.info.id}
           to={"/restaurants/"+restaurant.info.id}
           ><RestaurantCard  resData={restaurant} /></Link>
           ))
        }
      </div>
    </div>
  );
};

export default Body;

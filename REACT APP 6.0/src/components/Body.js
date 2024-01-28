import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCart';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
   
  //  useEffect(()=>{
  //    fetchData(); 
  //  },[]);
  //  const fetchData= async()=>{
  //   const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');

  //   const json=await data.json();
  //   console.log(json);
  //   setListOfRestaurants(json.data.cards[2].data.data.cards);
  //  } 

   
  return listOfRestaurants.length===0?(<Shimmer/>):(
    <div className="body">
      <div className="filter"> 
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        > 
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
            listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
           ))
        }
      </div>
    </div>
  );
};

export default Body;

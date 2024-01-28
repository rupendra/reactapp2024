import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCart';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurants,setFilteredRestaurants]=useState(resList);
  const [searchText,setsearchText]=useState("");
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
       <div className='search'>
        <input type="text" className='search-box' value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
        <button onClick={()=>{
        const filteredRestaurants=listOfRestaurants.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredRestaurants);
        }}>Search</button>
       </div>
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
          filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
           ))
        }
      </div>
    </div>
  );
};

export default Body;

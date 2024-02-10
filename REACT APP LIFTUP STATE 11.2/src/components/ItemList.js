
import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    console.log(items);
    return (
     <div>
         {items.map((item)=>
              (
                <div className="text-white p-2 m-2 border-b-2 text-left flex justify-between " key={item.card.info.id}>
                   <div className="w-9/12">
                     <div className="py-2">
                       <p>{item.card.info.name}</p>
                       <p>₹-{item.card.info.price/100}</p>
                     </div>
                     <p className="text-xs">{item.card.info.description}</p>
                   </div>
                    <div className="w-3/12 p-4">
                       <div className="absolute mx-6 mt-10">
                         <button className="bg-white font-bold text-black px-3 shadow-lg">Add + </button>
                       </div>
                      <img src={CDN_URL+ item.card.info.imageId} className="w-full h-20"/>
                    </div>
                </div>
              )
          )}
     </div>    
    )
}
export default ItemList;
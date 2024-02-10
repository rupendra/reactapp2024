import { useContext } from 'react';
import UserContext from '../utils/UserContext';
const Grocery=()=>{
 const data = useContext(UserContext);
    return (
        <div>
          
           <h1 className='font-bold'> {data.loggedInUser}</h1>
            Our Grocery online store ,and we have a lot of child components inside this 
            web page
        </div>
    );
}

export default Grocery;
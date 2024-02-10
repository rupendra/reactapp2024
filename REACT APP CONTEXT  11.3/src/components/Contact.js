import { useContext } from 'react';
import UserContext from '../utils/UserContext';
    
const Contact = () => {
  const data=useContext(UserContext);
  return (
    <div>
      <h1>Mahesh Kalchuri:9424826936</h1>
      <h1>{data.loggedInUser}</h1>
    </div>
  )
}

export default Contact

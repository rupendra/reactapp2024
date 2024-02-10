import { LOGO_URL } from '../utils/constants';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
const Header = () => {
    const  [btnName,setbtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const data = useContext(UserContext);
    return (
        <div className="justify-between flex shadow-lg bg-[#29292b] text-white font-bold">  
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="w-24" />
            </div>
            <div className="nav-items flex items-center">
                <ul className='flex'>
                    <li className='px-5'>Online status :{onlineStatus ? "🟢" :"🔴"}</li>
                    <li className='px-5'><Link to="/">Home</Link></li>
                    <li className='px-5'><Link to="/about">About Us</Link></li>
                     <li className='px-5'><Link to="/contact">Contact Us</Link></li>
                    <li className='px-5'><Link to="/grocery">Grocery</Link></li>
                    <li className='px-5'>Cart</li>
                    <li className=" cursor-pointer px-5" onClick={()=>{
                       if(btnName=='Login'){
                        setbtnName("Logout");
                        }
                        else{
                            setbtnName("Login");
                        }
                    }}>{btnName}</li>
                    <li className='px-5'>{btnName==='Logout' && data.loggedInUser}</li>
                </ul> 
            </div>
        </div>
    );
};

export default Header;

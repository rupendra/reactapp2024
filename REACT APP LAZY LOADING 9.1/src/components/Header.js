import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';
const Header = () => {
    const  [btnName,setbtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    console.log(onlineStatus);  
    return (
        <div className="header">  
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status :{onlineStatus ? "🟢" :"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li className="login-btn" onClick={()=>{
                       if(btnName=='Login'){
                        setbtnName("Logout");
                        }
                        else{
                            setbtnName("Login");
                        }
                    }}>{btnName}</li>
                </ul> 
            </div>
        </div>
    );
};

export default Header;

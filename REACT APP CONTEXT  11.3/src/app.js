import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.
const AppLayout = () => {
  const [userName,setUserName]=useState();

  useEffect(()=>{
    const user={
      name:"Rupendra Gonnade"
    }
    setUserName(user.name);
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};
//lazy is a named export
const Grocery=lazy(()=>import('./components/Grocery')); 
const appRouter=createBrowserRouter([
  { 
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:(<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>)
      },
      {
        path:"/restaurants/:resId",//resId will be dynamic
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>,
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRouter}/>);

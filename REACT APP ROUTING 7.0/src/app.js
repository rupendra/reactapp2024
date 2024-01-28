import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

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
      }
    ],
    errorElement:<Error/>,
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRouter}/>);

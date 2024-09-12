
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteContextProvider } from "./store/RouteContextProvider";

import './App.css';

import LandingPage from "./pages/LandingPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      
    } 
  
   
  ]);


  return (
    <RouteContextProvider>
      <RouterProvider router={router} />
    </RouteContextProvider>
    // <LandingPage/>
  )
}

export default App


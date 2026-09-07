import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login.jsx'      
import App from './App.jsx' 
import Home from './pages/Home.jsx'
import Favorite from './pages/Favorite.jsx' 
import AppStatus from './pages/AppStatus.jsx'
import Profile from './pages/Profile.jsx'
import JobDetail from './pages/JobDetail.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "home", element: <Home /> },        
      { path: "favorite", element: <Favorite /> },
      { path: "status", element: <AppStatus /> },  
      { path: "profile", element: <Profile /> }, 
      { path: "job/:id", element: <JobDetail /> },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>,
)
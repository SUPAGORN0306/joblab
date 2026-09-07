import { Outlet, Link } from "react-router-dom";
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div className="app-layout">
      <div className="page-background"></div>

      <div className="tabbar">
        <Link to="/home">
          <img src="/home.svg" alt="Home" />
        </Link>
        <Link to="/favorite">
          <img src="/heart.svg" alt="Favorite" />
        </Link>
        <Link to="/status">
          <img src="/status.svg" alt="AppStatus" />
        </Link>
        <Link to="/profile">
          <img src="/human.svg" alt="Profile" />
        </Link>
      </div>   

      <div className="main-content-area">
        <Outlet /> 
      </div>
      
      <SpeedInsights />
    </div>
  );
}
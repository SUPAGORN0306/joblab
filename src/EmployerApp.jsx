import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './index.css';

export default function EmployerApp() {
  return (
    <div className="app-layout">
      <div className="page-background"></div>

      {/* แถบเมนูด้านซ้ายสำหรับฝั่ง Employer */}
      <div className="tabbar">
        {/* หน้าแดชบอร์ดหลัก / ภาพรวมโพสต์ */}
        <Link to="/employer/dashboard" title="Dashboard">
          <img src="/home.svg" alt="Dashboard" />
        </Link>
        
        {/* หน้าสร้างประกาศงานใหม่ */}
        <Link to="/employer/post-job" title="Post Job">
          <img src="/status.svg" alt="Post Job" />
        </Link>
        
        {/* หน้าโปรไฟล์บริษัท / จัดการบัญชี */}
        <Link to="/employer/profile" title="Company Profile">
          <img src="/human.svg" alt="Company Profile" />
        </Link>
      </div>   

      {/* พื้นที่แสดงผลหน้าย่อยต่างๆ ผ่าน Outlet */}
      <div className="main-content-area">
        <Outlet /> 
      </div>
    </div>
  );
}
import React from 'react';
import '../AppStatus.css';

export default function AppStatus() {
  return (
    <div className="status-container">
      {/* ส่วนหัวข้อ */}
      <div className="status-header">
        {/* <span className="subtitle">Your pipeline</span> */}
        <h1>Application status</h1>
      </div>

      {/* ส่วนกล่องสถิติด้านบน */}
      {/* ส่วนกล่องสถิติด้านบน */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total applications</span>
          <span className="stat-value total-app">24</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">In review</span>
          <span className="stat-value in-review-val">9</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Interviews</span>
          <span className="stat-value interview-val">3</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Response rate</span>
          <span className="stat-value response-val">38%</span>
        </div>
      </div>

      {/* ส่วนคอลัมน์บอร์ด (Kanban Columns) */}
      <div className="kanban-board">
        {/* คอลัมน์ที่ 1: Applied */}
        <div className="kanban-column applied">
          <div className="column-header">
            <span className="dot applied"></span>
            <span className="column-title">Applied</span>
            <span className="column-count">11</span>
          </div>
          <div className="card-list">
            <div className="job-card">
              <h3>UX Researcher</h3>
              <p className="company">Notion</p>
              <p className="date">Applied Sep 2</p>
            </div>
            <div className="job-card">
              <h3>Web Designer</h3>
              <p className="company">BeReal</p>
              <p className="date">Applied Aug 30</p>
            </div>
            <div className="job-card">
              <h3>Brand Designer</h3>
              <p className="company">Figma</p>
              <p className="date">Applied Aug 28</p>
            </div>
          </div>
        </div>

        {/* คอลัมน์ที่ 2: In review */}
        <div className="kanban-column in-review">
          <div className="column-header">
            <span className="dot in-review"></span>
            <span className="column-title">In review</span>
            <span className="column-count">9</span>
          </div>
          <div className="card-list">
            <div className="job-card">
              <h3>Product Designer</h3>
              <p className="company">Wise</p>
              <p className="date">Updated Sep 1</p>
            </div>
            <div className="job-card">
              <h3>UI Engineer</h3>
              <p className="company">Linear</p>
              <p className="date">Updated Aug 29</p>
            </div>
          </div>
        </div>

        {/* คอลัมน์ที่ 3: Interview */}
        <div className="kanban-column interview">
          <div className="column-header">
            <span className="dot interview"></span>
            <span className="column-title">Interview</span>
            <span className="column-count">3</span>
          </div>
          <div className="card-list">
            <div className="job-card">
              <h3>Senior Product Designer</h3>
              <p className="company">Amazon</p>
              <p className="date">Interview Sep 6</p>
            </div>
            <div className="job-card">
              <h3>Design Lead</h3>
              <p className="company">Orion</p>
              <p className="date">Interview Sep 9</p>
            </div>
          </div>
        </div>

        {/* คอลัมน์ที่ 4: Closed */}
        <div className="kanban-column closed">
          <div className="column-header">
            <span className="dot closed"></span>
            <span className="column-title">Closed</span>
            <span className="column-count">1</span>
          </div>
          <div className="card-list">
            <div className="job-card">
              <h3>Junior Designer</h3>
              <p className="company">Canva</p>
              <p className="date">Not selected</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
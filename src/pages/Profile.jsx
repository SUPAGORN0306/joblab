import React from 'react';
import '../Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div>
          <h1>User profile</h1>
        </div>
        <button className="edit-profile-btn">Edit profile</button>
      </div>

      <div className="profile-grid">
        
        <div className="profile-card-left">
          <div className="avatar-wrapper">
            <span>Avatar</span>
          </div>

          <div className="profile-info">
            <h2>Nichakan Srisuk</h2>
            <p>Product Designer · Bangkok, TH</p>
          </div>

          {/* วงกลมแสดง Profile Strength */}
          <div className="profile-strength-container">
            <div className="strength-circle">
              <span className="strength-value">79%</span>
            </div>
            <span className="strength-label">Profile strength</span>
          </div>

          {/* ป้ายทักษะ (Skills) */}
          <div className="skills-container">
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Design systems</span>
            <span className="skill-tag">Prototyping</span>
            <span className="skill-tag">User research</span>
          </div>
        </div>

        {/* โครงสร้างฝั่งขวา: ข้อมูลติดต่อ และ ประสบการณ์ */}
        <div className="profile-right-column">
          
          {/* ข้อมูลติดต่อ (Contact Details) */}
          <div className="profile-card-right">
            <h3 className="section-title">Contact details</h3>
            <div className="contact-grid">
              <div className="contact-field">
                <span className="field-label">Email</span>
                <div className="field-box">nichakan@email.com</div>
              </div>
              <div className="contact-field">
                <span className="field-label">Phone</span>
                <div className="field-box">+66 91 234 5678</div>
              </div>
              <div className="contact-field">
                <span className="field-label">Location</span>
                <div className="field-box">Bangkok, Thailand</div>
              </div>
              <div className="contact-field">
                <span className="field-label">Resume</span>
                <div className="field-box">Nichakan_Resume.pdf</div>
              </div>
            </div>
          </div>

          {/* ประสบการณ์ทำงาน (Experience) */}
          <div className="profile-card-right">
            <h3 className="section-title">Experience</h3>
            <div className="experience-list">
              
              <div className="experience-item">
                <span className="dot experience"></span>
                <div className="experience-details">
                  <h3>Product Designer</h3>
                  <p className="company-location">Wise — Remote</p>
                  <p className="duration">2023 - Present</p>
                </div>
              </div>

              <div className="experience-item">
                <span className="dot experience"></span>
                <div className="experience-details">
                  <h3>UI/UX Designer</h3>
                  <p className="company-location">BeReal — Los Angeles</p>
                  <p className="duration">2021 - 2023</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
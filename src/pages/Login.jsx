import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

export default function Login() {
  const navigate = useNavigate();
  
  const [isSignUp, setIsSignUp] = useState(true);
  const [userType, setUserType] = useState('seeker');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleGuest = () => {
    navigate('/home');
  };

  return (
    <div className="login-container">
      
      {/* Header Title */}
      <div className="login-header">
        <h1>Welcome to JObJAB</h1>
        <p>Log in to save jobs, track applications, and get matched.</p>
      </div>

      {/* Main Card Container */}
      <div className="login-card">
        
        {/* Toggle Tab: Log in / Sign up */}
        <div className="login-tabs">
          <button 
            type="button"
            onClick={() => setIsSignUp(false)}
            className={`tab-btn ${!isSignUp ? 'active-login' : ''}`}
          >
            Log in
          </button>
          <button 
            type="button"
            onClick={() => setIsSignUp(true)}
            className={`tab-btn ${isSignUp ? 'active-signup' : ''}`}
          >
            Sign up
          </button>
        </div>

        {/* User Type Selection */}
        <div className="user-type-grid">
          <div 
            onClick={() => setUserType('seeker')}
            className={`type-card ${userType === 'seeker' ? 'selected' : ''}`}
          >
            <div className="type-title">
              <span className={`dot ${userType === 'seeker' ? 'dot-active' : ''}`}></span>
              <span>Job seeker</span>
            </div>
            <p className="type-desc">Find & apply to jobs</p>
          </div>

          <div 
            onClick={() => setUserType('employer')}
            className={`type-card ${userType === 'employer' ? 'selected' : ''}`}
          >
            <div className="type-title">
              <span className={`dot ${userType === 'employer' ? 'dot-active' : ''}`}></span>
              <span>Employer</span>
            </div>
            <p className="type-desc">Post job openings</p>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="login-form">
          
          {isSignUp && (
            <div className="input-group">
              <label>Full name</label>
              <input 
                type="text" 
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="you@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">
              {isSignUp ? 'Create account' : 'Log in'}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Continue as guest */}
        <div className="guest-container">
          <button type="button" onClick={handleGuest} className="guest-btn">
            Continue as guest
          </button>
        </div>

      </div>
    </div>
  );
}
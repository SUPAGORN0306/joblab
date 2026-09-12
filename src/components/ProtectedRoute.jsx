// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, activeRole, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        padding: 40,
        textAlign: 'center',
        color: '#8c9bae',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Loading...
      </div>
    );
  }

  // ยังไม่ login → เด้งไปหน้า login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // login แล้ว แต่ activeRole ไม่ตรง
  if (requiredRole && activeRole !== requiredRole) {
    return (
      <Navigate
        to={activeRole === 'employer' ? '/employer/dashboard' : '/home'}
        replace
      />
    );
  }

  return children;
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/AuthPages.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Login failed');
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <AuthForm
          mode="login"
          onSubmit={handleSubmit}
          error={error}
          icons={{
            email: faEnvelope,
            password: faLock
          }}
        />
        <p className="auth-link">
          Don't have an account? <span onClick={() => navigate('/')}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
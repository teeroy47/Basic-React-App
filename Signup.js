import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/AuthPages.css';

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Registration failed');
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Your Account</h2>
        <AuthForm
          mode="register"
          onSubmit={handleSubmit}
          error={error}
          icons={{
            username: faUser,
            email: faEnvelope,
            password: faLock
          }}
        />
        <p className="auth-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
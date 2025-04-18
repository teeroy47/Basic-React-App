import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AuthForm.css';

const AuthForm = ({ mode, onSubmit, error, icons }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    username: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      setErrors((prev) => ({
        ...prev,
        email: value && !validateEmail(value) ? 'Invalid email format' : ''
      }));
    }
    if (name === 'password') {
      setErrors((prev) => ({
        ...prev,
        password: value && value.length < 8 ? 'Password must be at least 8 characters' : ''
      }));
    }
    if (name === 'username' && mode === 'register') {
      setErrors((prev) => ({
        ...prev,
        username: value && !/^[a-zA-Z0-9]+$/.test(value) ? 'No special characters allowed' : ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data =
      mode === 'login'
        ? { email: formData.email, password: formData.password }
        : formData;
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {error && <div className="error-message">{error}</div>}

      {mode === 'register' && (
        <div className={`form-group ${errors.username ? 'error' : ''}`}>
          <div className="input-with-icon">
            <FontAwesomeIcon icon={icons.username} className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          {errors.username && <span className="error-text">{errors.username}</span>}
        </div>
      )}

      <div className={`form-group ${errors.email ? 'error' : ''}`}>
        <div className="input-with-icon">
          <FontAwesomeIcon icon={icons.email} className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className={`form-group ${errors.password ? 'error' : ''}`}>
        <div className="input-with-icon">
          <FontAwesomeIcon icon={icons.password} className="input-icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
        {errors.password && <span className="error-text">{errors.password}</span>}
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={Object.values(errors).some((err) => err)}
      >
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
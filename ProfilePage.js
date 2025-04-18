import React from 'react';
import Profile from '../components/Profile/Profile';
import { useNavigate } from 'react-router-dom';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <button className="logout-btn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
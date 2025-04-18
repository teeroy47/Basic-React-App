import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  const fetchProfile = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile?email=${encodeURIComponent(email)}`, {
        headers: {
          'X-API-Key': 'EXAM2024-KEY-5678'
        }
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to fetch profile');
      setProfileData(data);
      setNewUsername(data.username);
      setError('');
    } catch (err) {
      setError(err.message);
      setProfileData(null);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'EXAM2024-KEY-5678'
        },
        body: JSON.stringify({
          email,
          username: newUsername
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Update failed');
      setProfileData({ ...profileData, username: newUsername });
      setIsEditing(false);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-search">
        <input
          type="email"
          placeholder="Enter email to fetch profile"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={fetchProfile}>Fetch Profile</button>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      {profileData && (
        <div className="profile-details">
          <div className="profile-field">
            <strong>Username:</strong>
            {isEditing ? (
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            ) : (
              <span>{profileData.username}</span>
            )}
          </div>
          <div className="profile-field">
            <strong>Email:</strong>
            <span>{profileData.email}</span>
          </div>
          <div className="profile-field">
            <strong>Registered:</strong>
            <span>{new Date(profileData.createdAt).toLocaleString()}</span>
          </div>
          
          {isEditing ? (
            <div className="profile-actions">
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit Username</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileList.css';

interface Profile {
  nickname: string;
  profilePic: string;
}

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const profiles = JSON.parse(localStorage.getItem(currentUser.email + '_profiles') || '[]');
    setProfiles(profiles);
  }, []);

  const handleProfileCreate = () => {
    navigate('/create-profile');
  };

  return (
    <div className="profile-container">
      <h2>Profiles</h2>
      {profiles.length === 0 ? (
        <div>
          <p>No profiles found</p>
          <button onClick={handleProfileCreate}>Create Profile</button>
        </div>
      ) : (
        <div className="profile-container">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-item" onClick={() => navigate('/movies', { state: { profile } })}>
              <img src={profile.profilePic} alt="Profile" />
              <p>{profile.nickname}</p>
            </div>
          ))}
        </div>
      )}
      {profiles.length > 0 && <button onClick={handleProfileCreate}>Create Profile</button>}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProfileList;

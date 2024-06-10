import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileCreate.css';

const ProfileCreate: React.FC = () => {
  const [nickname, setNickname] = useState<string>('');
  const [profilePic, setProfilePic] = useState<string>('');
  const navigate = useNavigate();

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setProfilePic(event.target.result.toString());
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleProfileSave = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const profiles = JSON.parse(localStorage.getItem(currentUser.email + '_profiles') || '[]');
    profiles.push({ nickname, profilePic });
    localStorage.setItem(currentUser.email + '_profiles', JSON.stringify(profiles));
    navigate('/profiles');
  };

  return (
    <div className="profile-create-container">
      <h2>Create Profile</h2>
      <input type="text" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <input type="file" accept="image/*" onChange={handleProfilePicChange} />
      {profilePic && <img src={profilePic} alt="Profile" />}
      <button onClick={handleProfileSave}>Save Profile</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProfileCreate;

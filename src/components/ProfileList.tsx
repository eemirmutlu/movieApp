import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileList.css';

interface Profile {
  nickname: string;
  profilePic: string;
}

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null); // Profil silme işlemi için index
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const profiles = JSON.parse(localStorage.getItem(currentUser.email + '_profiles') || '[]');
    setProfiles(profiles.slice(0, 4));
  }, []);

  const handleProfileCreate = () => {
    navigate('/create-profile');
  };

  const handleProfileDelete = () => {
    if (deleteIndex !== null) {
      const updatedProfiles = [...profiles];
      updatedProfiles.splice(deleteIndex, 1);
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      localStorage.setItem(currentUser.email + '_profiles', JSON.stringify(updatedProfiles));
      setProfiles(updatedProfiles);
      setDeleteIndex(null); // Index'i sıfırla
      setShowModal(false); // Modalı kapat
    }
  };

  const openModal = (index: number) => {
    setDeleteIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleProfileItemClick = (profile: Profile) => {
    navigate('/movies', { state: { profile } });
  };

  const handleDeleteButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    event.stopPropagation(); // Olayın yayılmasını engelle
    openModal(index);
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
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-item" onClick={() => handleProfileItemClick(profile)}>
              <img src={profile.profilePic} alt="Profile" />
              <p>{profile.nickname}</p>
              <button className="delete-profile-button" onClick={(e) => handleDeleteButtonClick(e, index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      {profiles.length > 0 && <button onClick={handleProfileCreate}>Create Profile</button>}
      <button onClick={() => navigate(-1)}>Back</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this profile?</p>
            <div className="modal-buttons">
              <button onClick={handleProfileDelete}>Yes</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileList;

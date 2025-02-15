import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useGlobalState } from '../../Context/GlobalStateContext';

interface ProfileSectionProps {
  onSaveProfile: (avatar: string, username: string, bio: string) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onSaveProfile }) => {
  const { selectedIconUrl, setSelectedIconUrl, username, setUsername } = useGlobalState();
  const [bio, setBio] = useState<string>('');
  const [showAvatarMenu, setShowAvatarMenu] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [iconResults, setIconResults] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const handleSaveProfile = () => {
    if (!selectedIconUrl || !username.trim()) {
      alert('Please select an avatar and enter a username before saving.');
      return;
    }
    onSaveProfile(selectedIconUrl, username, bio);
    setIsEditing(false); // Switch to published mode
  };

  const handleEditProfile = () => {
    setIsEditing(true); // Switch to editing mode
  };

  const handleAvatarSelect = (icon: string) => {
    const iconUrl = `https://api.iconify.design/${icon}.svg`;
    setSelectedIconUrl(iconUrl);
    setShowAvatarMenu(false);
  };

  const handleEditAvatar = () => {
    setShowAvatarMenu(true);
  };

  const searchIcons = async (query: string) => {
    if (!query) {
      setIconResults([]);
      return;
    }
    try {
      const response = await fetch(`https://api.iconify.design/search?query=${encodeURIComponent(query)}&limit=20`);
      const data = await response.json();
      setIconResults(data.icons);
    } catch (error) {
      console.error('Error fetching icons:', error);
    }
  };

  return (
    <div className="mb-12 space-y-8">
      {/* Avatar Selection */}
      {isEditing ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-textPrimary">Choose Your Avatar</h3>
          {/* Display Selected Avatar and Username at the Top */}
          {selectedIconUrl && (
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={selectedIconUrl}
                  alt="Selected Avatar"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0) invert(1)' }} // Ensure icons are white
                />
              </div>
              <span className="text-textPrimary text-lg font-bold">{username || 'Your Username'}</span>
            </div>
          )}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              searchIcons(e.target.value);
            }}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
            placeholder="Search for icons..."
          />
          {searchQuery && (
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
              {iconResults.map((icon, index) => (
                <button
                  key={index}
                  onClick={() => handleAvatarSelect(icon)}
                  className="p-2 rounded-lg bg-primary hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon
                    icon={icon}
                    className="w-12 h-12 text-textPrimary"
                    style={{ filter: 'brightness(0) invert(1)' }} // Ensure icons are white
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            {selectedIconUrl ? (
              <img
                src={selectedIconUrl}
                alt="Selected Avatar"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0) invert(1)' }} // Ensure icons are white
              />
            ) : (
              <Icon
                icon="mdi:user"
                className="w-16 h-16 text-textPrimary"
                style={{ filter: 'brightness(0) invert(1)' }} // Ensure icons are white
              />
            )}
          </div>
          <span className="text-textPrimary text-xl font-bold">{username || 'Your Username'}</span>
        </div>
      )}

      {/* Username */}
      <div className="space-y-2">
        <label htmlFor="username" className="text-textPrimary font-medium font-tomorrow">
          Username
        </label>
        {isEditing ? (
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
            placeholder="Enter your username"
          />
        ) : (
          <p className="text-textPrimary">{username}</p>
        )}
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <label htmlFor="bio" className="text-textPrimary font-medium font-tomorrow">
          Bio
        </label>
        {isEditing ? (
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
            placeholder="Tell us about yourself..."
            rows={4}
          />
        ) : (
          <p className="text-textPrimary">{bio || 'No bio provided.'}</p>
        )}
      </div>

      {/* Edit / Save Button */}
      <div className="mt-6">
        {isEditing ? (
          <button
            onClick={handleSaveProfile}
            className="px-8 py-2 rounded-lg bg-accent text-textPrimary hover:bg-opacity-90 transition-all font-tomorrow"
          >
            Save Profile
          </button>
        ) : (
          <button
            onClick={handleEditProfile}
            className="px-8 py-2 rounded-lg bg-accent text-textPrimary hover:bg-opacity-90 transition-all font-tomorrow"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
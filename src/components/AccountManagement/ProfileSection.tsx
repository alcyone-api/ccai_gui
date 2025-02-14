import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'; // Import Iconify
import { useGlobalState } from '../Context/GlobalStateContext'; // Import the global state hook

interface ProfileSectionProps {
  onSaveProfile: (avatar: string, username: string) => void;
}

// Avatar SVGs (local avatars)
interface Avatar {
  id: string;
  name: string;
  svg: JSX.Element;
}

const avatars: Avatar[] = []; // Add your local avatars here if needed

const ProfileSection: React.FC<ProfileSectionProps> = ({ onSaveProfile }) => {
  const { selectedIconUrl, setSelectedIconUrl, username, setUsername } = useGlobalState();
  const [showAvatarMenu, setShowAvatarMenu] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [iconResults, setIconResults] = useState<string[]>([]);
  const [isDirty, setIsDirty] = useState<boolean>(false); // Track changes

  // Track changes to username or avatar
  useEffect(() => {
    const isUsernameChanged = username.trim() !== '';
    const isAvatarChanged = !!selectedIconUrl; // Check if an avatar is selected
    setIsDirty(isUsernameChanged || isAvatarChanged);
  }, [username, selectedIconUrl]);

  // Fetch icons from Iconify based on search query
  const searchIcons = async (query: string) => {
    if (!query) {
      setIconResults([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.iconify.design/search?query=${encodeURIComponent(query)}&limit=20`
      );
      const data = await response.json();
      setIconResults(data.icons);
    } catch (error) {
      console.error('Error fetching icons:', error);
    }
  };

  const handleAvatarSelect = (icon: string) => {
    const iconUrl = `https://api.iconify.design/${icon}.svg`; // Construct CDN URL
    setSelectedIconUrl(iconUrl); // Update global state
    setShowAvatarMenu(false); // Hide the avatar selection menu
  };

  const handleEditAvatar = () => {
    setShowAvatarMenu(true); // Reopen the avatar selection menu
  };

  const handleSaveProfile = () => {
    // Save the profile
    onSaveProfile(selectedIconUrl, username);
    console.log('Profile saved:', { selectedIconUrl, username });
  };

  return (
    <div className="font-tomorrow bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h2 className="text-2xl font-bold text-accent mb-6 font-tomorrow">Developer Profile</h2>
      <div className="space-y-6">
        {/* Avatar Selection */}
        {showAvatarMenu ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-textPrimary">Choose Your Avatar</h3>

            {/* Search Bar */}
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

            {/* Display Search Results */}
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
                      style={{
                        filter: 'brightness(0) invert(1)', // Convert black to white
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            {/* Display Selected Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden">
              {selectedIconUrl ? (
                <img
                  src={selectedIconUrl}
                  alt="Selected Avatar"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0) invert(1)', // Convert black to white
                  }}
                />
              ) : (
                <Icon
                  icon="mdi:user"
                  className="w-16 h-16 text-textPrimary"
                  style={{
                    filter: 'brightness(0) invert(1)', // Convert black to white
                  }}
                /> // Fallback icon
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
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
            placeholder="Enter your username"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-start space-x-4">
          {/* Edit Button */}
          <button
            onClick={handleEditAvatar}
            disabled={!isDirty}
            className={`px-6 py-2 rounded-lg transition-all font-tomorrow ${
              isDirty
          ? 'bg-accent text-textPrimary hover:bg-opacity-90'
          : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            Edit Avatar
          </button>

          {/* Save Changes Button */}
          <button
            onClick={handleSaveProfile}
            disabled={!isDirty}
            className={`px-6 py-2 rounded-lg transition-all font-tomorrow ${
              isDirty
          ? 'bg-accent text-textPrimary hover:bg-opacity-90'
          : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
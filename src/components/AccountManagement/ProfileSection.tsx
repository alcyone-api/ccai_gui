import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useGlobalState } from '../Context/GlobalStateContext';
import TippingProgram from './TippingProgram';
import TechnologiesSection from './TechnologiesSection';

interface ProfileSectionProps {
  onSaveProfile: (avatar: string, username: string) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onSaveProfile }) => {
  const { selectedIconUrl, setSelectedIconUrl, username, setUsername } = useGlobalState();
  const [showAvatarMenu, setShowAvatarMenu] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [iconResults, setIconResults] = useState<string[]>([]);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  useEffect(() => {
    setIsDirty(!!username.trim() || !!selectedIconUrl);
  }, [username, selectedIconUrl]);

  const handleSaveProfile = () => {
    if (!selectedIconUrl || !username.trim()) {
      alert('Please select an avatar and enter a username before saving.');
      return;
    }
    onSaveProfile(selectedIconUrl, username);
    setSaveSuccess(true);
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
    <div className="space-y-8 relative z-10">
      {/* Avatar and Username Section */}
      <div className="bg-secondary p-8 rounded-2xl shadow-card">
        <h2 className="text-2xl font-bold text-accent mb-6 font-tomorrow">Developer Profile</h2>
        {showAvatarMenu ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-textPrimary">Choose Your Avatar</h3>
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
                    <Icon icon={icon} className="w-12 h-12 text-textPrimary" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              {selectedIconUrl ? (
                <img src={selectedIconUrl} alt="Selected Avatar" className="w-full h-full object-cover" />
              ) : (
                <Icon icon="mdi:user" className="w-16 h-16 text-textPrimary" />
              )}
            </div>
            <span className="text-textPrimary text-xl font-bold">{username || 'Your Username'}</span>
          </div>
        )}

        <div className="space-y-2 mt-6">
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

        {/* Save Profile Button */}
        <div className="mt-6">
          <button
            onClick={handleSaveProfile}
            disabled={!isDirty}
            className={`px-6 py-2 rounded-lg transition-all font-tomorrow ${
              isDirty ? 'bg-accent text-textPrimary hover:bg-opacity-90' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Tipping Program Section */}
      <TippingProgram isProfileComplete={!!selectedIconUrl && !!username.trim()} />

      {/* Save Success Messages */}
      {saveSuccess && (
        <div className="text-green-500 font-medium">Profile saved successfully!</div>
      )}
    </div>
  );
};

export default ProfileSection;
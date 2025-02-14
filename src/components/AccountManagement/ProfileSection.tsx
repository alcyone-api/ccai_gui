import React, { useState } from 'react';

// Avatar SVGs
const avatars = [
  {
    id: 'analyzer',
    name: 'The Analyzer',
    svg: (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="45" fill="#4F46E5" />
        <rect x="30" y="40" width="40" height="20" fill="#FFFFFF" />
        <circle cx="40" cy="50" r="5" fill="#4F46E5" />
        <circle cx="60" cy="50" r="5" fill="#4F46E5" />
      </svg>
    ),
  },
  {
    id: 'warrior',
    name: 'The Warrior',
    svg: (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="45" fill="#EF4444" />
        <path d="M30,70 L50,30 L70,70 Z" fill="#FFFFFF" />
        <rect x="45" y="60" width="10" height="20" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'cryptic',
    name: 'The Cryptic',
    svg: (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="45" fill="#6B7280" />
        <circle cx="50" cy="50" r="30" fill="#FFFFFF" />
        <path d="M40,40 L60,60 M60,40 L40,60" stroke="#6B7280" strokeWidth="5" />
      </svg>
    ),
  },
  {
    id: 'rogue',
    name: 'The Rogue',
    svg: (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="45" fill="#10B981" />
        <rect x="30" y="40" width="40" height="20" fill="#FFFFFF" />
        <path d="M40,50 L60,50 M50,40 L50,60" stroke="#10B981" strokeWidth="5" />
      </svg>
    ),
  },
  {
    id: 'wizard',
    name: 'The Wizard',
    svg: (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="45" fill="#F59E0B" />
        <path d="M50,30 L70,70 L30,70 Z" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="10" fill="#F59E0B" />
      </svg>
    ),
  },
];

interface ProfileSectionProps {
  onSaveProfile: (avatar: string, username: string) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onSaveProfile }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>('analyzer');
  const [username, setUsername] = useState<string>('');
  const [showAvatarMenu, setShowAvatarMenu] = useState<boolean>(true);

  const handleAvatarSelect = (avatarId: string) => {
    setSelectedAvatar(avatarId);
    setShowAvatarMenu(false); // Hide the avatar selection menu
  };

  const handleSaveProfile = () => {
    onSaveProfile(selectedAvatar, username); // Pass data to parent
  };

  return (
    <div className="bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h2 className="text-2xl font-bold text-accent mb-6 font-tomorrow">Developer Profile</h2>
      <div className="space-y-6">
        {/* Avatar Selection */}
        {showAvatarMenu ? (
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-textPrimary">Choose Your Avatar</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {avatars.map((avatar) => (
                <button
                  key={avatar.id}
                  onClick={() => handleAvatarSelect(avatar.id)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    selectedAvatar === avatar.id
                      ? 'bg-accent/20 border-2 border-accent'
                      : 'bg-primary hover:bg-accent/10'
                  }`}
                >
                  {avatar.svg}
                  <p className="text-textPrimary text-sm mt-2">{avatar.name}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            {/* Display Selected Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden">
              {avatars.find((avatar) => avatar.id === selectedAvatar)?.svg}
            </div>
            <span className="text-textPrimary text-xl font-bold">{username}</span>
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

        {/* Save Button */}
        <button
          className="px-8 py-3 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all font-tomorrow"
          onClick={handleSaveProfile}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
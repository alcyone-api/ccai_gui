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

// Predefined list of technologies with icons
const technologies = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Django', icon: 'logos:django-icon' },
  { name: 'Flask', icon: 'logos:flask' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Kubernetes', icon: 'logos:kubernetes' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Front End', icon: 'ion:code-slash' },
  { name: 'Back End', icon: 'ion:server' },
  { name: 'Database', icon: 'ion:database' },
];

// Skill levels
const skillLevels = [
  { level: 'Beginner', value: 'beginner' },
  { level: 'Novice', value: 'novice' },
  { level: 'Intermediate', value: 'intermediate' },
  { level: 'Advanced', value: 'advanced' },
  { level: 'Professional', value: 'professional' },
];

const ProfileSection: React.FC<ProfileSectionProps> = ({ onSaveProfile }) => {
  const { selectedIconUrl, setSelectedIconUrl, username, setUsername } = useGlobalState();
  const [showAvatarMenu, setShowAvatarMenu] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [iconResults, setIconResults] = useState<string[]>([]);
  const [isDirty, setIsDirty] = useState<boolean>(false); // Track changes

  // New state for $CRAFT tipping program
  const [optInProgram, setOptInProgram] = useState<boolean>(false);
  const [telegramHandle, setTelegramHandle] = useState<string>('');
  const [xAccountHandle, setXAccountHandle] = useState<string>('');
  const [isProgramDirty, setIsProgramDirty] = useState<boolean>(false); // Track changes in program section

  // New state for technologies/skills
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    { name: string; icon: string; skillLevel: string }[]
  >([]);
  const [techSearchQuery, setTechSearchQuery] = useState<string>('');
  const [techSearchResults, setTechSearchResults] = useState<{ name: string; icon: string }[]>([]);

  // New state for validation and confirmation messages
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [optInSuccess, setOptInSuccess] = useState<boolean>(false);

  // Track changes to username or avatar
  useEffect(() => {
    const isUsernameChanged = username.trim() !== '';
    const isAvatarChanged = !!selectedIconUrl; // Check if an avatar is selected
    setIsDirty(isUsernameChanged || isAvatarChanged);
  }, [username, selectedIconUrl]);

  // Track changes in program section
  useEffect(() => {
    const isProgramChanged = optInProgram && (telegramHandle.trim() !== '' || xAccountHandle.trim() !== '');
    setIsProgramDirty(isProgramChanged);
  }, [optInProgram, telegramHandle, xAccountHandle]);

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

  // Search for technologies
  useEffect(() => {
    if (techSearchQuery) {
      const results = technologies.filter((tech) =>
        tech.name.toLowerCase().includes(techSearchQuery.toLowerCase())
      );
      setTechSearchResults(results);
    } else {
      setTechSearchResults([]);
    }
  }, [techSearchQuery]);

  const handleAvatarSelect = (icon: string) => {
    const iconUrl = `https://api.iconify.design/${icon}.svg`; // Construct CDN URL
    setSelectedIconUrl(iconUrl); // Update global state
    setShowAvatarMenu(false); // Hide the avatar selection menu
  };

  const handleEditAvatar = () => {
    setShowAvatarMenu(true); // Reopen the avatar selection menu
  };

  const handleSaveProfile = () => {
    // Validate avatar and username
    if (!selectedIconUrl || !username.trim()) {
      alert('Please select an avatar and enter a username before saving.');
      return;
    }

    // Save the profile
    onSaveProfile(selectedIconUrl, username);
    setSaveSuccess(true); // Show success message
    setOptInSuccess(false); // Reset opt-in success message

    // If opted in, show additional confirmation
    if (optInProgram && (telegramHandle.trim() || xAccountHandle.trim())) {
      setOptInSuccess(true);
    }

    console.log('Profile saved:', { selectedIconUrl, username });
    console.log('Program details:', { optInProgram, telegramHandle, xAccountHandle });
  };

  const handleSaveProgram = () => {
    // Save the program details
    console.log('Program details saved:', { optInProgram, telegramHandle, xAccountHandle });
  };

  const handleOptOut = () => {
    setOptInProgram(false);
    setTelegramHandle('');
    setXAccountHandle('');
    console.log('Opted out of the program');
  };

  const handleAddTechnology = (tech: { name: string; icon: string }) => {
    if (!selectedTechnologies.some((t) => t.name === tech.name)) {
      setSelectedTechnologies([...selectedTechnologies, { ...tech, skillLevel: 'beginner' }]);
    }
    setTechSearchQuery(''); // Clear search query
    setTechSearchResults([]); // Clear search results
  };

  const handleRemoveTechnology = (techName: string) => {
    setSelectedTechnologies(selectedTechnologies.filter((t) => t.name !== techName));
  };

  const handleSkillLevelChange = (techName: string, skillLevel: string) => {
    setSelectedTechnologies((prev) =>
      prev.map((tech) =>
        tech.name === techName ? { ...tech, skillLevel } : tech
      )
    );
  };

  // Check if avatar and username are set (required for opting in)
  const isProfileComplete = selectedIconUrl && username.trim();

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

        {/* Technologies/Skills Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-textPrimary">Technologies & Skills</h3>

          {/* Search Bar for Technologies */}
          <input
            type="text"
            value={techSearchQuery}
            onChange={(e) => setTechSearchQuery(e.target.value)}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
            placeholder="Search for technologies..."
          />

          {/* Display Search Results */}
          {techSearchQuery && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {techSearchResults.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => handleAddTechnology(tech)}
                  className="p-2 rounded-lg bg-primary hover:bg-accent/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <Icon icon={tech.icon} className="w-6 h-6 text-textPrimary" />
                  <span className="text-textPrimary">{tech.name}</span>
                </button>
              ))}
            </div>
          )}

          {/* Display Selected Technologies with Skill Levels */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-primary rounded-lg p-2"
              >
                <Icon icon={tech.icon} className="w-6 h-6 text-textPrimary" />
                <span className="text-textPrimary">{tech.name}</span>
                <select
                  value={tech.skillLevel}
                  onChange={(e) => handleSkillLevelChange(tech.name, e.target.value)}
                  className="bg-primary text-textPrimary rounded-lg p-1 focus:outline-none"
                >
                  {skillLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.level}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleRemoveTechnology(tech.name)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Icon icon="mdi:close" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* $CRAFT Tipping Program Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-textPrimary">$CRAFT Tipping Program</h3>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="optInProgram"
              checked={optInProgram}
              onChange={(e) => setOptInProgram(e.target.checked)}
              disabled={!isProfileComplete} // Disable if profile is incomplete
              className="w-4 h-4 text-accent rounded focus:ring-accent"
            />
            <label htmlFor="optInProgram" className="text-textPrimary font-medium">
              I agree to be contacted at my social media handles and will provide guidance to someone about how to set up their application for a reasonable tip in CRAFT tokens. I have sufficient experience in building and deploying software, and will abide by the community code of honor.
            </label>
          </div>

          {optInProgram && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="telegramHandle" className="text-textPrimary font-medium">
                  Telegram Handle
                </label>
                <input
                  type="text"
                  id="telegramHandle"
                  value={telegramHandle}
                  onChange={(e) => setTelegramHandle(e.target.value)}
                  className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
                  placeholder="Enter your Telegram handle"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="xAccountHandle" className="text-textPrimary font-medium">
                  X Account Handle
                </label>
                <input
                  type="text"
                  id="xAccountHandle"
                  value={xAccountHandle}
                  onChange={(e) => setXAccountHandle(e.target.value)}
                  className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
                  placeholder="Enter your X account handle"
                />
              </div>
            </div>
          )}
        </div>

        {/* Save Success Messages */}
        {saveSuccess && (
          <div className="text-green-500 font-medium">
            Profile saved successfully!
            {optInSuccess && (
              <span className="block text-green-500">
                You have successfully opted into the $CRAFT tipping program.
              </span>
            )}
          </div>
        )}

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

          {/* Save Program Details Button */}
          {optInProgram && (
            <button
              onClick={handleSaveProgram}
              disabled={!isProgramDirty}
              className={`px-6 py-2 rounded-lg transition-all font-tomorrow ${
                isProgramDirty
                  ? 'bg-accent text-textPrimary hover:bg-opacity-90'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
            >
              Save Program Details
            </button>
          )}

          {/* Opt Out Button */}
          {optInProgram && (
            <button
              onClick={handleOptOut}
              className="px-6 py-2 rounded-lg bg-red-500 text-textPrimary hover:bg-red-600 transition-all font-tomorrow"
            >
              Opt Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
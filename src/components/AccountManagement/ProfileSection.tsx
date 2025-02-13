// components/AccountManagement/ProfileSection.tsx
import React, { useState } from 'react';

// Mock technology options with icons (replace with actual icons or images)
const techOptions = [
  { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
  { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
  { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
  { name: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
  { name: 'Docker', icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.worldvectorlogo.com/logos/kubernetes.svg' },
];

const ProfileSection = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<string>('');
  const [techStack, setTechStack] = useState<{ name: string; icon: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTech = (tech: { name: string; icon: string }) => {
    if (!techStack.some((t) => t.name === tech.name)) {
      setTechStack([...techStack, tech]);
    }
  };

  const handleRemoveTech = (techName: string) => {
    setTechStack(techStack.filter((tech) => tech.name !== techName));
  };

  const filteredTechOptions = techOptions.filter((tech) =>
    tech.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-secondary p-8 rounded-2xl shadow-card relative z-20 max-w-2xl mx-auto mt-10"> {/* Added z-20 and mt-10 */}
      <h2 className="text-2xl font-bold text-textPrimary mb-6 font-tomorrow">Developer Profile</h2>
      <div className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-primary flex items-center justify-center text-textPrimary">
                <span className="text-sm">No Image</span>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="profile-upload"
          />
          <label
            htmlFor="profile-upload"
            className="px-6 py-2 bg-accent text-textPrimary rounded-lg cursor-pointer hover:bg-opacity-90 transition-all font-tomorrow"
          >
            Upload Picture
          </label>
        </div>

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

        {/* Bio */}
        <div className="space-y-2">
          <label htmlFor="bio" className="text-textPrimary font-medium font-tomorrow">
            Bio
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
            placeholder="Tell us about yourself"
            rows={4}
          />
        </div>

        {/* Skill Level */}
        <div className="space-y-2">
          <label htmlFor="skill-level" className="text-textPrimary font-medium font-tomorrow">
            Skill Level
          </label>
          <select
            id="skill-level"
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
          >
            <option value="">Select your skill level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        {/* Technology Stack */}
        <div className="space-y-2">
          <label htmlFor="tech-stack" className="text-textPrimary font-medium font-tomorrow">
            Technology Stack
          </label>
          {/* Selected Technologies */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center bg-primary px-3 py-1 rounded-lg"
              >
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 mr-2" />
                <span className="text-textPrimary text-sm">{tech.name}</span>
                <button
                  onClick={() => handleRemoveTech(tech.name)}
                  className="ml-2 text-textPrimary hover:text-accent transition-all"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          {/* Search and Add Technology */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
              placeholder="Search for a technology"
            />
            {searchQuery && (
              <div className="absolute mt-2 w-full bg-secondary rounded-lg shadow-lg z-30">
                {filteredTechOptions.map((tech) => (
                  <div
                    key={tech.name}
                    onClick={() => handleAddTech(tech)}
                    className="flex items-center p-2 hover:bg-primary cursor-pointer"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5 mr-2" />
                    <span className="text-textPrimary">{tech.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <button
          className="px-8 py-3 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all font-tomorrow"
          onClick={() => {
            console.log('Profile saved:', { username, bio, skillLevel, techStack, profilePicture });
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
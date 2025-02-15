import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Icon } from '@iconify/react'; // Import Iconify
import { useGlobalState } from '../Context/GlobalStateContext'; // Import the global state hook

interface User {
  id: string;
  username: string;
  avatar: string;
  telegramHandle: string;
  xAccountHandle: string;
  bio: string; // Added bio field
  technologies: { name: string; icon: string; skillLevel: string }[];
  rating: number;
}

const UserSearchComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>('');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('rating');
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Fetch users who have opted into the program (mock data for now)
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        username: 'Alice',
        avatar: 'https://api.iconify.design/mdi:user.svg',
        telegramHandle: '@alice',
        xAccountHandle: '@alice_x',
        bio: 'Senior frontend developer with 5+ years of experience in React and JavaScript. Passionate about teaching and mentoring.',
        technologies: [
          { name: 'React', icon: 'logos:react', skillLevel: 'advanced' },
          { name: 'Node.js', icon: 'logos:nodejs-icon', skillLevel: 'intermediate' },
        ],
        rating: 4.5,
      },
      {
        id: '2',
        username: 'Bob',
        avatar: 'https://api.iconify.design/mdi:user.svg',
        telegramHandle: '@bob',
        xAccountHandle: '@bob_x',
        bio: 'Backend developer specializing in Python, Django, and REST APIs. Loves solving complex problems.',
        technologies: [
          { name: 'Python', icon: 'logos:python', skillLevel: 'professional' },
          { name: 'Django', icon: 'logos:django-icon', skillLevel: 'advanced' },
        ],
        rating: 4.0,
      },
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  // Filter and sort users based on search query, skill level, and technology
  useEffect(() => {
    let filtered = users.filter((user) => {
      const matchesSearchQuery = user.username.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSkillLevel = selectedSkillLevel
        ? user.technologies.some((tech) => tech.skillLevel === selectedSkillLevel)
        : true;
      const matchesTechnology = selectedTechnology
        ? user.technologies.some((tech) => tech.name === selectedTechnology)
        : true;
      return matchesSearchQuery && matchesSkillLevel && matchesTechnology;
    });

    // Sort users
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'username') {
      filtered.sort((a, b) => a.username.localeCompare(b.username));
    }

    setFilteredUsers(filtered);
  }, [searchQuery, selectedSkillLevel, selectedTechnology, sortBy, users]);

  // Handle user card click to navigate to the user's profile
  const handleUserClick = (userId: string) => {
    navigate(`/user/${userId}`); // Navigate to the user's profile page
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32 mb-24">
        <div className="max-w-4xl w-full mx-auto font-tomorrow">
          <h2 className="text-2xl font-bold text-accent mb-6 animate-fade-in-up">Find Mentors</h2>
          <p className="text-textPrimary mb-8 animate-fade-in-up">
          Get expert help setting up your CodeCraft app by connecting with experienced developers who can provide guidance, troubleshooting, and feedback in exchange for reasonable tips in $CRAFT. Browse developer profiles to see their skill sets, experience levels, and areas of expertise. Check reviews and ratings from other Crafters to find trusted experts. Whether you need help debugging, setting up features, or optimizing performance, skilled developers are available to assist. Show appreciation for their help by tipping in $CRAFT and supporting the community. Find the right expert, get the help you need, and keep your projects moving forward.
          </p>
          <div className="space-y-6 animate-fade-in-up">
            {/* Search Bar */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Search by username..."
            />

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedSkillLevel}
                onChange={(e) => setSelectedSkillLevel(e.target.value)}
                className="p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent flex-grow"
              >
                <option value="">All Skill Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
              </select>

              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent flex-grow"
              >
                <option value="">All Technologies</option>
                <option value="React">React</option>
                <option value="Python">Python</option>
                <option value="Node.js">Node.js</option>
                <option value="Django">Django</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent flex-grow"
              >
                <option value="rating">Sort by Rating</option>
                <option value="username">Sort by Username</option>
              </select>
            </div>

            {/* User List */}
            <div className="space-y-6">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex flex-col p-6 bg-primary/40 rounded-lg shadow-md space-y-4 cursor-pointer hover:bg-secondary transition-colors"
                  onClick={() => handleUserClick(user.id)} // Navigate to user profile on click
                >
                  {/* Top Row: Avatar, Username, Socials, and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img
                          src={user.avatar}
                          alt={user.username}
                          className="w-full h-full object-cover"
                          style={{
                            filter: 'brightness(0) invert(1)', // Convert black to white
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-textPrimary">{user.username}</h3>
                        <div className="flex space-x-3 mt-1">
                          <a
                            href={`https://t.me/${user.telegramHandle.slice(1)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                          >
                            <Icon icon="mingcute:telegram-fill" className="w-6 h-6 text-blue-500" />
                          </a>
                          <a
                            href={`https://x.com/${user.xAccountHandle.slice(1)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                          >
                            <Icon icon="ri:twitter-x-fill" className="w-6 h-6 text-textPrimary" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon icon="mdi:star" className="w-6 h-6 text-yellow-500" />
                      <span className="text-textPrimary">{user.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Middle Row: Bio */}
                  <p className="text-textPrimary/80 text-sm">{user.bio}</p>

                  {/* Bottom Row: Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {user.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 rounded-lg p-2"
                      >
                        <Icon icon={tech.icon} className="w-6 h-6 text-textPrimary" />
                        <span className="text-sm text-textPrimary">{tech.name}</span>
                        <span className="text-sm text-textPrimary">({tech.skillLevel})</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearchComponent;
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'; // Import Iconify
import { useGlobalState } from '../Context/GlobalStateContext'; // Import the global state hook

interface User {
  id: string;
  username: string;
  avatar: string;
  telegramHandle: string;
  xAccountHandle: string;
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

  // Fetch users who have opted into the program (mock data for now)
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        username: 'Alice',
        avatar: 'https://api.iconify.design/mdi:user.svg',
        telegramHandle: '@alice',
        xAccountHandle: '@alice_x',
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

  return (
    <div className="mt-32 font-tomorrow bg-secondary p-8 rounded-2xl shadow-card relative z-30">
      <h2 className="text-2xl font-bold text-accent mb-6 font-tomorrow">Find Mentors</h2>
      <div className="space-y-6">
        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
          placeholder="Search by username..."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <select
            value={selectedSkillLevel}
            onChange={(e) => setSelectedSkillLevel(e.target.value)}
            className="p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
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
            className="p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
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
            className="p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
          >
            <option value="rating">Sort by Rating</option>
            <option value="username">Sort by Username</option>
          </select>
        </div>

        {/* User List */}
        <div className="space-y-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 bg-primary rounded-lg"
            >
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(0) invert(1)', // Convert black to white
                    }}
                  />
                </div>

                {/* Username and Social Handles */}
                <div>
                  <h3 className="text-xl font-bold text-textPrimary">{user.username}</h3>
                  <p className="text-textPrimary">
                    Telegram: {user.telegramHandle} | X: {user.xAccountHandle}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {user.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-secondary rounded-lg p-2"
                    >
                      <Icon icon={tech.icon} className="w-6 h-6 text-textPrimary" />
                      <span className="text-textPrimary">{tech.name}</span>
                      <span className="text-textPrimary">({tech.skillLevel})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <Icon icon="mdi:star" className="w-6 h-6 text-yellow-500" />
                <span className="text-textPrimary">{user.rating.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSearchComponent;
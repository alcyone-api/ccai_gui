import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react'; // Import Iconify for icons

interface User {
  id: string;
  username: string;
  avatar: string;
  bio: string;
  technologies: { name: string; icon: string; skillLevel: string }[];
  rating: number;
  reviews: { reviewer: string; comment: string; rating: number }[];
  telegramHandle?: string;
  xAccountHandle?: string;
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Extract userId from the URL
  const [user, setUser] = useState<User | null>(null);

  // Mock fetch for user data (replace with actual API call)
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        username: 'Alice',
        avatar: 'https://api.iconify.design/mdi:user.svg',
        bio: 'Senior frontend developer with 5+ years of experience in React and JavaScript. Passionate about teaching and mentoring.',
        technologies: [
          { name: 'React', icon: 'logos:react', skillLevel: 'advanced' },
          { name: 'Node.js', icon: 'logos:nodejs-icon', skillLevel: 'intermediate' },
        ],
        rating: 4.5,
        reviews: [
          { reviewer: 'Bob', comment: 'Alice is an excellent mentor!', rating: 5 },
          { reviewer: 'Charlie', comment: 'Very knowledgeable and patient.', rating: 4 },
        ],
        telegramHandle: '@alice',
        xAccountHandle: '@alice_x',
      },
      {
        id: '2',
        username: 'Bob',
        avatar: 'https://api.iconify.design/mdi:user.svg',
        bio: 'Backend developer specializing in Python, Django, and REST APIs. Loves solving complex problems.',
        technologies: [
          { name: 'Python', icon: 'logos:python', skillLevel: 'professional' },
          { name: 'Django', icon: 'logos:django-icon', skillLevel: 'advanced' },
        ],
        rating: 4.0,
        reviews: [
          { reviewer: 'Alice', comment: 'Bob is a great teacher!', rating: 4 },
          { reviewer: 'Charlie', comment: 'Helped me understand complex concepts easily.', rating: 5 },
        ],
        telegramHandle: '@bob',
        xAccountHandle: '@bob_x',
      },
    ];
    const foundUser = mockUsers.find((u) => u.id === userId);
    setUser(foundUser || null);
  }, [userId]);

  if (!user) {
    return <div className="p-8 text-textPrimary">User not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32 mb-24">
        <div className="max-w-4xl w-full mx-auto font-tomorrow">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center animate-fade-in-up">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0) invert(1)' }} // Convert black to white
              />
            </div>
            <h1 className="text-3xl font-bold text-textPrimary">{user.username}</h1>
            <p className="text-textPrimary/80 mt-2">{user.bio}</p>
          </div>

          {/* Skills Section */}
          <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-textPrimary mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {user.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-secondary p-3 rounded-lg"
                >
                  <Icon icon={tech.icon} className="w-6 h-6 text-textPrimary" />
                  <span className="text-textPrimary">{tech.name}</span>
                  <span className="text-textPrimary text-sm">({tech.skillLevel})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-textPrimary mb-4">Reviews</h2>
            <div className="space-y-4">
              {user.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-secondary p-4 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-textPrimary font-medium">{review.reviewer}</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Icon key={i} icon="mdi:star" className="w-5 h-5 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-textPrimary/80 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links (if available) */}
          <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-textPrimary mb-4">Connect</h2>
            <div className="flex gap-4">
              {user.telegramHandle && (
                <a
                  href={`https://t.me/${user.telegramHandle.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Icon icon="mingcute:telegram-fill" className="w-8 h-8 text-blue-500" />
                </a>
              )}
              {user.xAccountHandle && (
                <a
                  href={`https://x.com/${user.xAccountHandle.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Icon icon="ri:twitter-x-fill" className="w-8 h-8 text-textPrimary" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
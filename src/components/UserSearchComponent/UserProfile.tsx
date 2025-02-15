import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

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

interface Review {
  reviewer: string;
  comment: string;
  rating: number;
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [newReview, setNewReview] = useState<Review>({
    reviewer: 'Anonymous', // Default reviewer name (can be dynamic based on logged-in user)
    comment: '',
    rating: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Handle review input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  // Handle rating change
  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  // Handle review submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate saving the review (replace with actual API call)
    setTimeout(() => {
      if (user) {
        const updatedUser = { ...user, reviews: [...user.reviews, newReview] };
        setUser(updatedUser);
        setNewReview({ reviewer: 'Anonymous', comment: '', rating: 0 });
      }
      setIsSubmitting(false);
    }, 1000);
  };

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

          {/* Write a Review Section */}
          <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-textPrimary mb-4">Write a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Rating Input */}
              <div className="flex items-center space-x-2">
                <span className="text-textPrimary">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className={`w-6 h-6 ${
                      newReview.rating >= star ? 'text-yellow-500' : 'text-textPrimary/50'
                    }`}
                  >
                    <Icon icon="mdi:star" className="w-full h-full" />
                  </button>
                ))}
              </div>

              {/* Comment Input */}
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                placeholder="Write your review..."
                className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                rows={4}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-primary p-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
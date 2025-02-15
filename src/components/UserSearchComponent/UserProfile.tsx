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
  reviews: { reviewer: string; comment: string; rating: number; tipAmount?: number }[];
  telegramHandle?: string;
  xAccountHandle?: string;
}

interface Review {
  reviewer: string;
  comment: string;
  rating: number;
  tipAmount?: number;
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [reviewComment, setReviewComment] = useState<string>('');
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [isTipReviewModalOpen, setIsTipReviewModalOpen] = useState(false);

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
          { reviewer: 'Bob', comment: 'Alice is an excellent mentor!', rating: 5, tipAmount: 50000 },
          { reviewer: 'Charlie', comment: 'Very knowledgeable and patient.', rating: 4, tipAmount: 30000 },
        ],
        telegramHandle: '@alice',
        xAccountHandle: '@alice_x',
      },
    ];
    const foundUser = mockUsers.find((u) => u.id === userId);
    setUser(foundUser || null);
  }, [userId]);

  // Open the tip/review modal
  const openTipReviewModal = () => {
    setIsTipReviewModalOpen(true);
  };

  // Handle tip and review submission
  const handleTipAndReview = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate a tip transaction (replace with actual wallet/blockchain integration)
    setTimeout(() => {
      if (user && tipAmount > 0) {
        const newReview: Review = {
          reviewer: 'Anonymous', // Replace with logged-in user's name
          comment: reviewComment,
          rating: reviewRating,
          tipAmount: tipAmount,
        };
        const updatedUser = {
          ...user,
          reviews: [...user.reviews, newReview],
        };
        setUser(updatedUser);
        setTipAmount(0);
        setReviewComment('');
        setReviewRating(0);
        setIsTipReviewModalOpen(false);
      }
    }, 1000);
  };

  if (!user) {
    return <div className="p-8 text-textPrimary">User not found</div>;
  }

  // Calculate aggregate review score
  const aggregateReviewScore = (user.reviews.reduce((acc, review) => acc + review.rating, 0) / user.reviews.length).toFixed(1);

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col items-start px-8 pt-16 mt-24 md:pt-24 pb-24 md:pb-32 mb-24">
        <div className="max-w-4xl w-full mx-auto font-tomorrow">
          {/* Profile Card */}
          <div className="bg-secondary/40 p-6 rounded-lg backdrop-blur-md animate-fade-in-up">
            <div className="flex items-center space-x-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0) invert(1)' }} // Convert black to white
                />
              </div>
              {/* Username, Aggregate Score, and Social Media Links */}
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <h1 className="text-3xl font-bold text-textPrimary">{user.username}</h1>
                  <div className="flex items-center bg-primary px-3 py-1 rounded-full">
                    <Icon icon="mdi:star" className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="text-textPrimary">{aggregateReviewScore}</span>
                  </div>
                  {user.telegramHandle && (
                    <a
                      href={`https://t.me/${user.telegramHandle.slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon icon="mingcute:telegram-fill" className="w-6 h-6 text-blue-500" />
                    </a>
                  )}
                  {user.xAccountHandle && (
                    <a
                      href={`https://x.com/${user.xAccountHandle.slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon icon="ri:twitter-x-fill" className="w-6 h-6 text-textPrimary" />
                    </a>
                  )}
                </div>
                {/* Bio */}
                <p className="text-textPrimary/80 mt-2 text-left">{user.bio}</p>
                {/* Skills Section */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-primary p-2 rounded-lg"
                      >
                        <Icon icon={tech.icon} className="w-5 h-5 text-textPrimary" />
                        <span className="text-textPrimary">{tech.name}</span>
                        <span className="text-textPrimary text-sm">({tech.skillLevel})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Send Tip & Write Review Button */}
            <button
              onClick={openTipReviewModal}
              className="mt-6 bg-accent text-primary px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors w-full"
            >
              Send Tip & Write Review
            </button>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-textPrimary mb-4">Activity</h2>
            <div className="space-y-4">
              {user.reviews.map((review, index) => (
                <div key={index} className="bg-secondary/60 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-textPrimary font-medium">{review.reviewer}</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Icon key={i} icon="mdi:star" className="w-5 h-5 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-textPrimary/80 mt-2">{review.comment}</p>
                  {review.tipAmount && (
                    <div className="flex items-center mt-2 space-x-2">
                      <Icon icon="mdi:cash" className="w-5 h-5 text-green-500" />
                      <span className="text-textPrimary/80">Tipped {review.tipAmount} <span className="text-accent">$CRAFT</span></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tip and Review Modal */}
        {isTipReviewModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 animate-fade-in">
            <div className="bg-primary p-8 rounded-lg w-96 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Send Tip & Write Review</h2>
              <form onSubmit={handleTipAndReview} className="space-y-4">
                {/* Tip Amount Input */}
                <input
                  type="number"
                  value={tipAmount}
                  onChange={(e) => setTipAmount(Number(e.target.value))}
                  placeholder="Enter $CRAFT amount"
                  className="w-full p-3 bg-secondary/40 text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  min="1"
                  required
                />

                {/* Review Rating Input */}
                <div className="flex items-center space-x-2">
                  <span className="text-textPrimary">Rating</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      className={`w-6 h-6 ${
                        reviewRating >= star ? 'text-yellow-500' : 'text-textPrimary/50'
                      }`}
                    >
                      <Icon icon="mdi:star" className="w-full h-full" />
                    </button>
                  ))}
                </div>

                {/* Review Comment Input */}
                <textarea
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder="Write your review..."
                  className="w-full p-3 bg-secondary/40 text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={4}
                  required
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-primary p-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Submit Tip & Review
                </button>
              </form>

              {/* Close Modal Button */}
              <button
                onClick={() => setIsTipReviewModalOpen(false)}
                className="absolute top-4 right-4 text-textPrimary hover:text-accent transition-colors"
              >
                <Icon icon="mdi:close" className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
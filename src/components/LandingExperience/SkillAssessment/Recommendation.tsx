export default function Recommendations({ responses }) {
    const generateRecommendations = () => {
      const skillLevel = responses[1];
      const techBackground = responses[2];
  
      if (skillLevel === 'Novice' && techBackground === 'Frontend') {
        return 'Start with our beginner-friendly frontend tutorials!';
      }
      // Add more recommendation logic here
      return 'Explore our curated learning paths to level up your skills!';
    };
  
    return (
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Your Recommendations
        </h2>
        <p className="text-gray-700">{generateRecommendations()}</p>
      </div>
    );
  }
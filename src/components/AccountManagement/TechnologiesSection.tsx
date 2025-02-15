import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const technologies = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Python', icon: 'logos:python' },
  // Add more technologies as needed...
];

const skillLevels = [
  { level: 'Beginner', value: 'beginner' },
  { level: 'Novice', value: 'novice' },
  // Add more skill levels as needed...
];

const TechnologiesSection: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    { name: string; icon: string; skillLevel: string }[]
  >([]);
  const [techSearchQuery, setTechSearchQuery] = useState<string>('');
  const [techSearchResults, setTechSearchResults] = useState<{ name: string; icon: string }[]>([]);

  const handleAddTechnology = (tech: { name: string; icon: string }) => {
    if (!selectedTechnologies.some((t) => t.name === tech.name)) {
      setSelectedTechnologies([...selectedTechnologies, { ...tech, skillLevel: 'beginner' }]);
    }
    setTechSearchQuery('');
    setTechSearchResults([]);
  };

  const handleRemoveTechnology = (techName: string) => {
    setSelectedTechnologies(selectedTechnologies.filter((t) => t.name !== techName));
  };

  const handleSkillLevelChange = (techName: string, skillLevel: string) => {
    setSelectedTechnologies((prev) =>
      prev.map((tech) => (tech.name === techName ? { ...tech, skillLevel } : tech))
    );
  };

  return (
    <div className="bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h3 className="text-xl font-semibold text-textPrimary mb-6">Technologies & Skills</h3>
      <input
        type="text"
        value={techSearchQuery}
        onChange={(e) => setTechSearchQuery(e.target.value)}
        className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
        placeholder="Search for technologies..."
      />
      {techSearchQuery && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {technologies
            .filter((tech) =>
              tech.name.toLowerCase().includes(techSearchQuery.toLowerCase())
            )
            .map((tech, index) => (
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
      <div className="flex flex-wrap gap-2 mt-4">
        {selectedTechnologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-2 bg-primary rounded-lg p-2">
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
  );
};

export default TechnologiesSection;
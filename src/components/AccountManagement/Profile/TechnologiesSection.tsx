import React, { useState } from 'react';
import { Icon } from '@iconify/react';

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

const skillLevels = [
  { level: 'Beginner', value: 'beginner' },
  { level: 'Novice', value: 'novice' },
  { level: 'Intermediate', value: 'intermediate' },
  { level: 'Advanced', value: 'advanced' },
  { level: 'Professional', value: 'professional' },
];

const TechnologiesSection: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    { name: string; icon: string; skillLevel: string }[]
  >([]);
  const [techSearchQuery, setTechSearchQuery] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleAddTechnology = (tech: { name: string; icon: string }) => {
    if (!selectedTechnologies.some((t) => t.name === tech.name)) {
      setSelectedTechnologies([...selectedTechnologies, { ...tech, skillLevel: 'beginner' }]);
    }
    setTechSearchQuery('');
  };

  const handleRemoveTechnology = (techName: string) => {
    setSelectedTechnologies(selectedTechnologies.filter((t) => t.name !== techName));
  };

  const handleSkillLevelChange = (techName: string, skillLevel: string) => {
    setSelectedTechnologies((prev) =>
      prev.map((tech) => (tech.name === techName ? { ...tech, skillLevel } : tech))
    );
  };

  const handleSaveSkills = () => {
    setIsEditing(false);
    console.log('Saved skills:', selectedTechnologies); // Optional: Log saved skills
  };

  const handleEditSkills = () => {
    setIsEditing(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-textPrimary">Technologies & Skills</h3>
      </div>

      {isEditing && (
        <div className="space-y-4">
          <input
            type="text"
            value={techSearchQuery}
            onChange={(e) => setTechSearchQuery(e.target.value)}
            className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
            placeholder="Search for technologies..."
          />
          {techSearchQuery && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {selectedTechnologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 bg-primary rounded-lg p-2"
          >
            <Icon icon={tech.icon} className="w-6 h-6 text-textPrimary" />
            <span className="text-textPrimary">{tech.name}</span>
            {isEditing ? (
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
            ) : (
              <span className="text-textPrimary">({tech.skillLevel})</span>
            )}
            {isEditing && (
              <button
                onClick={() => handleRemoveTechnology(tech.name)}
                className="text-red-500 hover:text-red-600"
              >
                <Icon icon="mdi:close" className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}

      </div>
      {isEditing ? (
          <button
            onClick={handleSaveSkills}
            className="px-8 py-2 rounded-lg bg-accent text-textPrimary hover:bg-opacity-90 transition-all font-tomorrow"
          >
            Save Skills
          </button>
        ) : (
          <button
            onClick={handleEditSkills}
            className="px-8 py-2 rounded-lg bg-accent text-textPrimary hover:bg-opacity-90 transition-all font-tomorrow"
          >
            Edit Skills
          </button>
        )}
    </div>
  );
};

export default TechnologiesSection;
import { useState } from 'react';
import ThreeScene from './ThreeScene/ThreeScene';
import Jumbotron from './Jumbotron/Jumbotron';
import SkillAssessment from './SkillAssessment/SkillAssessment';
import PageTransition from './Transition/PageTransition';
import OverlayEffects from './Transition/OverlayEffects';

export default function LandingExperience() {
  const [experienceState, setExperienceState] = useState('pre-activation'); // States: 'pre-activation', 'activating', 'assessment', 'complete'
  const [userResponses, setUserResponses] = useState<Record<string, any>>({}); // Define the type for userResponses

  const handleActivate = () => {
    setExperienceState('activating');
    setTimeout(() => setExperienceState('assessment'), 2000); // Transition to assessment after animation
  };

  const handleSkip = () => {
    setExperienceState('complete'); // Skip to main app
  };

  return (
    <>
      <ThreeScene experienceState={experienceState} />
      <OverlayEffects isActive={experienceState === 'activating'} />

      {experienceState === 'pre-activation' && (
        <Jumbotron onActivate={handleActivate} onSkip={handleSkip} />
      )}

      {experienceState === 'assessment' && (
        <SkillAssessment
          onComplete={(responses) => {
            setUserResponses(responses);
            setExperienceState('complete');
          }}
        />
      )}

      {experienceState === 'complete' && (
        <PageTransition userResponses={userResponses} />
      )}
    </>
  );
}
import { useState } from 'react';
import QuestionStep from './QuestionStep';
import ProgressBar from './ProgressBar';
import Recommendations from './Recommendation';


interface Question {
  id: number;
  text: string;
  options: string[];
}

interface SkillAssessmentProps {
  onComplete: (responses: Record<number, string>) => void;
}

const questions: Question[] = [
  { id: 1, text: 'What is your skill level?', options: ['Novice', 'Hobbyist', 'Professional', 'Expert'] },
  { id: 2, text: 'What is your tech background?', options: ['Frontend', 'Backend', 'Full-stack', 'Design'] },
];

export default function SkillAssessment({ onComplete }: SkillAssessmentProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [responses, setResponses] = useState<Record<number, string>>({});

    const handleNext = (response: string) => {
      setResponses((prev) => ({ ...prev, [questions[currentStep].id]: response }));
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete(responses);
      }
    };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <ProgressBar total={questions.length} current={currentStep + 1} />
      {currentStep < questions.length ? (
        <QuestionStep
          question={questions[currentStep]}
          onNext={handleNext}
        />
      ) : (
        <Recommendations responses={responses} />
      )}
    </div>
  );
}
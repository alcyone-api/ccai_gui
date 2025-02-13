import Button from '../shared/Button';

export default function QuestionStep({ question, onNext }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700"
            onClick={() => onNext(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
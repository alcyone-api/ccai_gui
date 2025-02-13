import Button from '../shared/Button';

export default function Jumbotron({ onActivate, onSkip }: { onActivate: () => void; onSkip: () => void }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <h1 className="text-6xl font-tomorrow font-bold mb-6 text-textPrimary animate-fade-in-up">
        Ready to build?
      </h1>
      <div className="space-x-4">
        <Button
          className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 rounded-lg animate-zoom-in"
          onClick={onActivate}
        >
          Activate
        </Button>
        <Button
          className="border-2 border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg animate-zoom-in"
          onClick={onSkip}
        >
          Skip
        </Button>
      </div>
    </div>
  );
}
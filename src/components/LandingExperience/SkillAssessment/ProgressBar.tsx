interface ProgressBarProps {
  total: number;
  current: number;
}

export default function ProgressBar({ total, current }: ProgressBarProps) {
    const progress = (current / total) * 100;
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
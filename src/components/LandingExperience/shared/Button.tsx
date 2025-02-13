export default function Button({ children, onClick, className = '' }: { children: React.ReactNode; onClick: () => void; className?: string }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
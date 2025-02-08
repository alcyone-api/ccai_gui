import { useState } from 'react';

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-accent mb-6 animate-fade-in-up">
        Introduction
      </h1>

      <div
        className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="text-2xl font-bold text-accent">What is CodeCraft AI?</h2>
        <p className="text-textPrimary/90 leading-relaxed">
          CodeCraft AI is an advanced AI-powered development platform designed to make software creation smarter, faster, and more accessible—whether you're a seasoned developer or just getting started.
        </p>
      </div>

      <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        <h2 className="text-2xl font-bold text-accent">How Does It Work?</h2>
        <p className="text-textPrimary/90 leading-relaxed">
          Think of CodeCraft AI as your personal AI development assistant. Instead of spending countless hours coding from scratch, CodeCraft AI helps you:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li className="text-textPrimary/90">Plan your project – Get structured development roadmaps based on your ideas</li>
          <li className="text-textPrimary/90">Generate high-quality code – AI-driven coding tailored to your needs</li>
          <li className="text-textPrimary/90">Deploy effortlessly – Push your projects directly to GitHub</li>
        </ul>
      </div>

      <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        <h2 className="text-2xl font-bold text-accent">Why CodeCraft AI?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li className="text-textPrimary/90"><strong>Multi-Agent AI System</strong> – Unlike basic AI tools, CodeCraft AI uses multiple specialized AI agents working together to break down, optimize, and execute your tasks efficiently.</li>
          <li className="text-textPrimary/90"><strong>Seamless Blockchain Integration</strong> – Built on Solana, ensuring fast, secure, and scalable operations.</li>
          <li className="text-textPrimary/90"><strong>Cutting-Edge AI Models</strong> – Leverages top-tier DeepSeek AI and OpenAI LLMs to power advanced automation.</li>
          <li className="text-textPrimary/90"><strong>Locally Stored LLMs</strong> – Ensuring full functionality even in case of an outage, so users are never left waiting.</li>
          <li className="text-textPrimary/90"><strong>Self-Hosted for Maximum Reliability</strong> – Unlike other platforms that rely on third-party providers, CodeCraft AI runs its own infrastructure, meaning no downtime or service interruptions.</li>
          <li className="text-textPrimary/90"><strong>Modern Tech Stack</strong> – Built with React and Tailwind CSS for the frontend and a sophisticated backend agent orchestration layer to ensure seamless AI execution.</li>
        </ul>
      </div>

      <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        <p className="text-textPrimary/90 leading-relaxed">
          Whether you're looking to build Web3 applications, automate workflows, or explore AI-driven development, CodeCraft AI gives you the power of a full development team—at your fingertips.
        </p>
        <p className="text-textPrimary/90 leading-relaxed mt-4">
          The future of AI-powered coding is here. Ready to start building?
        </p>
      </div>
    </div>
  );
};

export default Intro;
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is CodeCraft AI?',
      answer:
        'CodeCraft AI is an advanced AI-powered development platform designed to make software creation smarter, faster, and more accessible. It leverages multiple specialized AI agents, powered by DeepSeek and OpenAI models, to help you plan, generate, and deploy code. Built on Solana, it ensures fast, secure, and scalable operations while offering seamless blockchain integration and modern tech stacks like React and Tailwind CSS.',
    },
    {
      question: 'Do I need programming experience?',
      answer:
        'CodeCraft AI is designed to be user-friendly, and many non-technical users have successfully built applications with it. However, some programming and infrastructure knowledge can help you better understand the generated code and make necessary adjustments. Beginners can also use tools like GitHub Copilot or ChatGPT alongside CodeCraft AI to learn and refine their skills.',
    },
    {
      question: 'How do I get started with CodeCraft AI?',
      answer:
        'To get started, connect your Solana wallet for secure authentication. Then, create a project by defining its scope, objectives, and required technologies. CodeCraft AI will generate the necessary code and deploy it to your GitHub repository. You can also connect GitHub to enable seamless code deployment and version control.',
    },
    {
      question: 'What LLM models does CodeCraft AI support?',
      answer:
        'CodeCraft AI leverages multiple Large Language Models (LLMs), including DeepSeek and OpenAI models. These models work together to handle tasks like project scoping, code generation, and error analysis. The platform dynamically selects the best agent for each task to ensure efficiency and accuracy.',
    },
    {
      question: 'Is my data secure with CodeCraft AI?',
      answer:
        'Yes, CodeCraft AI prioritizes privacy and security. All LLMs are hosted on proprietary, on-premise infrastructure, ensuring prompt input & completion data never leaves our controlled environment.',
    },
    {
      question: 'Can I use CodeCraft AI for commercial projects?',
      answer:
        'Absolutely! CodeCraft AI is designed for both personal and commercial use. You can deploy projects to GitHub and use them in any context. The platform supports long-term project management, making it ideal for teams working on complex projects over extended periods.',
    },
    {
      question: 'What programming languages are supported?',
      answer:
        'CodeCraft AI supports a wide range of programming languages and frameworks. You can specify your preferred technologies using the pre-populated drop-down menus or indicate them in your prompts. The platform is constantly expanding its language and framework support.',
    },
    {
      question: 'What if I encounter issues with code generation or deployment?',
      answer:
        'If you encounter issues, check your project scope, GitHub permissions, and wallet connection. For code generation errors, ensure your instructions are clear and well-defined. If problems persist, reach out to our support team via the community Telegram channel for assistance.',
    },
    {
      question: 'How does CodeCraft AI handle updates to existing projects?',
      answer:
        'CodeCraft AI allows you to update existing projects with granular requests. You can add new features, fix bugs, or refine functionality. The platform uses a separate team of agents for updates, ensuring seamless integration with your existing codebase.',
    },
    {
      question: 'What makes CodeCraft AI different from other AI tools?',
      answer:
        'CodeCraft AI stands out due to its multi-agent system, which uses specialized AI agents to handle different tasks like project management, code generation, and quality assurance. It also offers on-premise infrastructure for reliability, seamless Web3 integration, and GitHub deployment for streamlined workflows.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32 mb-24">
        <div className="max-w-4xl mx-auto font-tomorrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg shadow-lg overflow-hidden animate-fade-in-up"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                >
                  <h2
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      activeIndex === index ? 'text-accent' : 'text-textPrimary'
                    }`}
                  >
                    {faq.question}
                  </h2>
                  <span className="text-accent transform transition-transform duration-300">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-textPrimary/80">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
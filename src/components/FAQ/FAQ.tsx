import { useState } from 'react';
import Background from '../Background/Background'; // Import the Background component

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is CodeCraft AI?',
      answer: 'CodeCraft AI is a multi-modal, agentic Generative AI platform that helps you scope, plan, and develop software projects using advanced LLMs like GPT-4 and DeepSeek. It integrates with GitHub for deployment and uses Solana for secure payments.',
    },
    {
      question: 'How do I get started with CodeCraft AI?',
      answer: 'To get started, sign up using your email or connect your Solana wallet. Create a project, define its scope, and let CodeCraft AI generate and deploy the code to your GitHub repository.',
    },
    {
      question: 'What LLM models does CodeCraft AI support?',
      answer: 'CodeCraft AI supports multiple LLMs, including GPT-4, DeepSeek, R1, and V3. These models are used for scoping, planning, and generating code for your projects.',
    },
    {
      question: 'Is my data secure with CodeCraft AI?',
      answer: 'Yes, CodeCraft AI prioritizes privacy and security. No user data is stored without consent, and wallet metadata is never retained. All data used for model fine-tuning is anonymized.',
    },
    {
      question: 'Can I use CodeCraft AI for commercial projects?',
      answer: 'Absolutely! CodeCraft AI is designed for both personal and commercial use. You can deploy projects to GitHub and use them in any context.',
    },
    {
      question: 'What happens to deleted projects?',
      answer: 'Deleted projects are permanently removed from the platform and cannot be recovered.',
    },
    {
      question: 'How does CodeCraft AI handle payments?',
      answer: 'CodeCraft AI uses the Solana blockchain for secure, fast, and low-cost payments. You can connect your Solana wallet to manage transactions.',
    },
    {
      question: 'What programming languages are supported?',
      answer: 'CodeCraft AI supports a wide range of languages, including Python, JavaScript, TypeScript, and Go. The platform is constantly expanding its language support.',
    },
    {
      question: 'Can I fine-tune the LLM models used by CodeCraft AI?',
      answer: 'Yes, CodeCraft AI allows you to fine-tune models using anonymized data from your projects. This helps improve the accuracy and relevance of generated code.',
    },
    {
      question: 'What if I encounter issues with code generation or deployment?',
      answer: 'If you encounter issues, check your project scope, GitHub permissions, and API parameters. If problems persist, contact support@codecraftai.name for assistance.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Component */}
      <Background />

      {/* FAQ Content */}
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
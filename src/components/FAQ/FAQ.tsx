import { useState } from 'react';
import Background from '../Background/Background'; // Import the Background component

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is CodeCraft AI?',
      answer: 'CodeCraft AI is a platform that allows you to create and deploy AI-powered coding agents to help you build projects faster and more efficiently.',
    },
    {
      question: 'How do I get started?',
      answer: 'Click the "Get Started" button on the homepage, and you\'ll be guided through the process of creating your first AI-powered coding agent.',
    },
    {
      question: 'Is CodeCraft AI free to use?',
      answer: 'Yes, CodeCraft AI offers a free tier with limited features. You can upgrade to a paid plan for access to advanced features and higher usage limits.',
    },
    {
      question: 'Can I use CodeCraft AI for commercial projects?',
      answer: 'Absolutely! CodeCraft AI is designed to help both personal and commercial projects. Check out our pricing page for more details.',
    },
    {
      question: 'What programming languages are supported?',
      answer: 'CodeCraft AI currently supports Python, JavaScript, TypeScript, and Go. We’re constantly adding support for more languages.',
    },
    {
      question: 'How secure is my data?',
      answer: 'We take data security very seriously. All your data is encrypted both in transit and at rest, and we comply with industry-standard security protocols.',
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
      <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32">
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
                  <h2 className="text-lg md:text-xl font-semibold text-accent">
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
const Features = () => {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-accent mb-6 animate-fade-in-up">
          Features
        </h1>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Multiple LLMs Working Together</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Utilizes multiple large language models (LLMs), such as DeepSeek and OpenAI, to create a system capable of handling complex workflows autonomously.
          </p>
          <p className="text-textPrimary/90 leading-relaxed mt-4">
            Rather than relying on a single AI model, this approach enables different models to specialize in specific tasks, such as text generation, code completion, and quality analysis. This facilitates <strong>agentic workflows</strong>, where AI agents can <strong>plan, execute, and refine tasks without constant human intervention</strong>.
          </p>
          <p className="text-textPrimary/90 leading-relaxed mt-4">
            By dynamically selecting the best agent for each task, CodeCraft enhances efficiency, accuracy, and adaptability across software development workflows.
          </p>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Hybrid AI Infrastructure for Resilience</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            While many of our LLMs are hosted on proprietary, <strong>on-premise</strong> infrastructure, we also leverage cloud-based solutions via APIs when appropriate. This hybrid approach combines the benefits of <strong>greater reliability, security, and performance</strong> from on-premise hosting with the flexibility and scalability of cloud-based services.
          </p>
          <p className="text-textPrimary/90 leading-relaxed mt-4">
            On-premise hosting ensures <strong>uninterrupted availability</strong> and <strong>faster response times</strong> for critical workloads, while cloud-based APIs provide fallback options during updates or maintenance. This setup also enhances <strong>data privacy and compliance</strong> for sensitive information, as it remains within controlled environments whenever possible.
          </p>
          <p className="text-textPrimary/90 leading-relaxed mt-4">
            By strategically balancing on-premise and cloud-based AI processing, we guarantee <strong>long-term stability, reduced latency, and superior resilience</strong> against external disruptions.
          </p>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Web3 Integration</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Uses blockchain technology to provide secure and decentralized login options. Solana wallet support enables password-free authentication and ensures user data remains private and under full control. This eliminates the need for traditional accounts, reducing reliance on centralized platforms.
          </p>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">GitHub Deployment</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Automatically deploys generated code to GitHub repositories, making it easier to integrate AI-generated solutions into real projects. Allows for version control, collaboration, and direct access to generated code without manual downloads or copy-pasting. Ideal for developers looking to streamline coding workflows.
          </p>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Project Management</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Enables long-term storage and management of projects, eliminating the risk of losing progress. Projects can be updated, modified, and accessed anytime, ensuring continuous development and collaboration. Designed to support both solo developers and teams working on complex projects over extended periods.
          </p>
        </div>
      </div>
    );
  };
  
  export default Features;
import arch from '../../../../assets/arch.svg';

const Architecture = () => {

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-accent mb-6 animate-fade-in-up">
        Architecture
      </h1>

      {/* Architecture Diagram */}
      <div>
        <img
          src={arch}
          alt="architecture_diagram"
          className="mt-12 mb-12 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
        {/* Modular Orchestration */}
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        <h2 className="text-2xl font-bold text-accent">Modular Orchestration</h2>
        <p className="text-textPrimary/90 leading-relaxed">
        CodeCraft Agents are built on a modular, agentic AI architecture where the real power lies in the unique logic each agent uses to interact with its own instance of a large language model (LLM). Unlike relying on a single LLM, each agent generates its own prompts and processes information independently, enabling deeper, more contextual problem-solving for software development tasks. This approach unlocks far greater processing power and flexibility, as the agents work together in specialized workflows. Moving forward, we’re expanding this system with new agents, advanced orchestration methods, and even more innovative ways to tackle complex challenges.
        </p>
      </div>
      {/* Workflow Description */}
      <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        <h2 className="text-2xl font-bold text-accent">Workflow Overview</h2>
        <p className="text-textPrimary/90 leading-relaxed">
          When a user submits a request through the web GUI, it triggers the <strong>Agent Orchestration Module</strong>, which handles communication between the various agents. Here's how the process unfolds:
        </p>
        <ol className="list-decimal ml-6 space-y-4 mt-4">
          <li className="text-textPrimary/90">
            <strong>Agent Clarity</strong> ensures your request is well understood by the rest of the team. It refines your prompt input, adding additional detail and context for the other agents to use. The enhanced prompt is sent back to the Agent Orchestration Module.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Atlas</strong> takes the enhanced prompt and creates a detailed project plan. It determines what tasks need to be performed, which agents are responsible, and the order of execution. The project plan is sent back to the Agent Orchestration Module.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Codey</strong> receives the project plan and begins coding the application. The completed code is returned to the Agent Orchestration Module.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Nova</strong> and <strong>Agent Hex</strong> refine and enhance the code. Nova ensures the code is optimized for readability and performance, while Hex rigorously tests it to ensure functionality and reliability.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Flux</strong> further optimizes the code for performance, ensuring it runs efficiently on the designated platform.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Tidy</strong> organizes all deliverables, structuring the project files and directories for clarity and ease of use.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Echo</strong> generates a summary of the application, explaining how it works and documenting its features for future reference.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Patch</strong> makes the first Git commit, uploading the project to your GitHub repository.
          </li>
        </ol>
        <p className="text-textPrimary/90 leading-relaxed mt-4">
          For updates, <strong>Agent Forge</strong> oversees the process, ensuring compatibility and managing changes. <strong>Agent Tidy</strong> reorganizes files as needed, <strong>Agent Echo</strong> updates the documentation, and <strong>Agent Patch</strong> commits the changes to your Git repository.
        </p>
      </div>

    </div>
  );
};

export default Architecture;
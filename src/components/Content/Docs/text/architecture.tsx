
import arch from '../../../../assets/arch.svg';
import agentsImage from '../../../../assets/agents.svg'; // Assume you have an image of the agents

const Architecture = () => {

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-accent">Agentic Workflow</h1>
      {/* Agents Graphic */}
      <div>
        <img
          src={agentsImage}
          alt="agents_graphic"
          className="mt-12 mb-12 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>

      {/* Agent-Based Workflow */}
      <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        
        <p className="text-textPrimary/90 leading-relaxed">
          CodeCraft AI leverages 9 LLM-powered 'Agents' when generating new projects. The main orchestration workflow includes the following Agents:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li className="text-textPrimary/90">
            <strong>Agent Clarity</strong> – The visionary who deciphers chaos into clarity. With a knack for understanding the most cryptic requirements, Clarity ensures the team always knows what to build.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Atlas</strong> – The master strategist. Atlas maps out the project's trajectory, breaking down tasks and assigning them to the right agents with precision.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Codey</strong> – The code wizard. Codey turns ideas into reality, crafting elegant and functional code with a futuristic flair.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Hex</strong> – The vigilant sentinel. Hex hunts down bugs and vulnerabilities, ensuring the code is bulletproof and secure.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Nova</strong> – The perfectionist. Nova refines the code, polishing it to a gleaming shine for optimal performance and readability.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Flux</strong> – The efficiency guru. Flux optimizes the code, squeezing out every drop of performance while keeping it lean and mean.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Echo</strong> – The storyteller. Echo documents the code, crafting explanations and guides that make even the most complex systems understandable.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Tidy</strong> – The organizer. Tidy structures the project, ensuring every file and directory is in its rightful place.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Patch</strong> – The deployer. Patch uploads the project to its destination, ensuring it reaches the world seamlessly.
          </li>
        </ul>
      </div>

      {/* Update Workflow */}
      <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        <h2 className="text-2xl font-bold text-accent">Update Workflow</h2>
        <p className="text-textPrimary/90 leading-relaxed">
          For updating projects, CodeCraft uses a separate team of 4 Agents, comprised of:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li className="text-textPrimary/90">
            <strong>Agent Forge</strong> – The architect of updates. Forge ensures compatibility and oversees the entire update process with a steady hand.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Tidy</strong> – The organizer. Tidy restructures files and directories to accommodate changes.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Echo</strong> – The storyteller. Echo updates documentation to reflect the latest changes.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Patch</strong> – The deployer. Patch ensures the updated project is deployed smoothly.
          </li>
        </ul>
      </div>
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



      {/* Modular Orchestration */}
      <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
        <h2 className="text-2xl font-bold text-accent">Modular Orchestration</h2>
        <p className="text-textPrimary/90 leading-relaxed">
          CodeCraft Agents leverage a modular orchestration architecture, allowing for future development using the Agents in diverse workflows for endless software development use cases. The team has plans to introduce new ways of orchestrating Agentic Workflows, new agents with more specialized tasks, and much, much more going forward.
        </p>
      </div>

    </div>
  );
};

export default Architecture;
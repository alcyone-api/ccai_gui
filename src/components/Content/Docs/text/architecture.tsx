const Architecture = () => {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-accent mb-6 animate-fade-in-up">
          Architecture
        </h1>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Agent-Based Workflow</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            CodeCraft AI leverages 9 LLM-powered 'Agents' when generating new projects. The main orchestration workflow includes the following Agents:
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li className="text-textPrimary/90"><strong>Clarifier</strong> – Understands and refines project requirements.</li>
            <li className="text-textPrimary/90"><strong>Project Manager</strong> – Breaks down tasks and assigns them to other agents.</li>
            <li className="text-textPrimary/90"><strong>Programmer</strong> – Writes high-quality code based on the requirements.</li>
            <li className="text-textPrimary/90"><strong>QA Analyst</strong> – Tests the code for errors and ensures quality.</li>
            <li className="text-textPrimary/90"><strong>Refiner</strong> – Optimizes the code for performance and readability.</li>
            <li className="text-textPrimary/90"><strong>Optimizer</strong> – Further enhances the code for efficiency.</li>
            <li className="text-textPrimary/90"><strong>Explainer</strong> – Generates documentation and explanations for the code.</li>
            <li className="text-textPrimary/90"><strong>Organizer</strong> – Structures the project files and directories.</li>
            <li className="text-textPrimary/90"><strong>Uploader</strong> – Deploys the project to the specified repository.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Update Workflow</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            For updating projects, CodeCraft uses a separate team of 4 Agents, comprised of:
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li className="text-textPrimary/90"><strong>Staff Engineer</strong> – Oversees updates and ensures compatibility.</li>
            <li className="text-textPrimary/90"><strong>Organizer</strong> – Reorganizes files and directories as needed.</li>
            <li className="text-textPrimary/90"><strong>Explainer</strong> – Updates documentation and explanations.</li>
            <li className="text-textPrimary/90"><strong>Uploader</strong> – Deploys the updated project.</li>
          </ul>
        </div>
  
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
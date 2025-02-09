import agentsImage from '../../../../assets/agents.svg';

const Agents = () => {

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-accent">CodeCraft AI Agents</h1>
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
            <strong>Agent Byte</strong> – The code wizard. Byte turns ideas into reality, crafting elegant and functional code with a futuristic flair.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Sentinel</strong> – The vigilant sentinel. Sentinel hunts down bugs and vulnerabilities, ensuring the code is bulletproof and secure.
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
            <strong>Agent Order</strong> – The organizer. Order structures the project, ensuring every file and directory is in its rightful place.
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
          For updating projects, CodeCraft uses an additional Agent named Forge, along with Order, Echo, and Patch. The update process involves the following Agents:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li className="text-textPrimary/90">
            <strong>Agent Forge</strong> – The architect of updates. Forge ensures compatibility and oversees the entire update process with a steady hand.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Order</strong> – The organizer. Order restructures files and directories to accommodate changes.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Echo</strong> – The storyteller. Echo updates documentation to reflect the latest changes.
          </li>
          <li className="text-textPrimary/90">
            <strong>Agent Patch</strong> – The deployer. Patch ensures the updated project is deployed smoothly.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Agents;
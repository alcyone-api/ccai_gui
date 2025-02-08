const GettingStarted = () => {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-accent mb-6 animate-fade-in-up">
          Getting Started
        </h1>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Login</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Connect a Solana wallet to enable secure authentication, save projects, and deploy code to a personal GitHub repository. This ensures project persistence and secure access without relying on traditional login credentials.
          </p>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Connect GitHub</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Authorize GitHub access to enable seamless code deployment to personal or organizational repositories. If GitHub is not an option, projects can be deployed to the CodeCraft GitLab instead. Ensure the necessary permissions are granted to allow for automated repository management.
          </p>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Create a Project</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Define the project scope by specifying key objectives and functionality. Properly configuring the GitHub repository ensures a smooth deployment process and version control.
          </p>
          <h3 className="text-xl font-bold text-accent mt-4">Project Scope Tips</h3>
          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li className="text-textPrimary/90">Clearly define the purpose of your project.</li>
            <li className="text-textPrimary/90">Select the technologies you'd like to use from the drop downs.</li>
            <li className="text-textPrimary/90">Break down the project into smaller, manageable tasks. You can always add more complex features later using Update Project.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Generate Code</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            CodeCraft AI analyzes the project requirements and generates all necessary code components. The system uses a comprehensive team of AI Agents to complete complex tasks.
          </p>
          <h3 className="text-xl font-bold text-accent mt-4">Code Generation Tips</h3>
          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li className="text-textPrimary/90">Provide detailed descriptions for each task.</li>
            <li className="text-textPrimary/90">Specify any constraints or preferences.</li>
            <li className="text-textPrimary/90">Review the generated code for accuracy and completeness.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Deploy</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            CodeCraft automatically pushes the generated code to the linked GitHub repository. This eliminates the need for manual uploads and ensures a structured, organized development process.
          </p>
          <h3 className="text-xl font-bold text-accent mt-4">Deployment Tips</h3>
          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li className="text-textPrimary/90">Ensure your GitHub repository is properly configured.</li>
            <li className="text-textPrimary/90">Check for any deployment errors in the logs.</li>
            <li className="text-textPrimary/90">Verify that the code is correctly pushed to the desired branch.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Build</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            Follow the provided build and execution instructions to run the application. CodeCraft-generated applications can be run locally or deployed to cloud, on-premise, or containerized environments.
          </p>
          <h3 className="text-xl font-bold text-accent mt-4">Build Tips</h3>
          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li className="text-textPrimary/90">Ensure all dependencies are installed.</li>
            <li className="text-textPrimary/90">Follow the README file for setup instructions.</li>
            <li className="text-textPrimary/90">Test the application thoroughly before deploying.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Important Considerations</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            CodeCraft produces fully functional and complex software applications. In some cases, deploying these applications may require <strong>prior knowledge</strong> of server management and application hosting.
          </p>
          <h3 className="text-xl font-bold text-accent mt-4">For Beginners</h3>
          <p className="text-textPrimary/90 leading-relaxed">
            If you're new to software development, consider using <strong>GitHub Copilot, ChatGPT, or DeepSeek V3</strong> to gain a better understanding of running applications. More detailed questions about deployment, debugging, and execution can be answered using traditional chat-based AI models. As always, if you have any questions, reach out to us on our <strong><a className="font-bold text-accent" target="_blank" href="https://t.co/ERfXkaw0Nz">community Telegram</a></strong> channel.
          </p>
        </div>
      </div>
    );
  };
  
  export default GettingStarted;
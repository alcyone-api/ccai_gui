const Troubleshooting = () => {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-accent mb-6 animate-fade-in-up">
          Troubleshooting
        </h1>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Wallet Connection Issues</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            If you're having trouble connecting your Solana wallet, try the following steps:
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li className="text-textPrimary/90">Ensure that your Solana wallet is properly connected and authorized.</li>
            <li className="text-textPrimary/90">Check that your browser wallet extension (e.g., Phantom, Solflare) is installed and unlocked.</li>
            <li className="text-textPrimary/90">If the connection fails, try refreshing the page, reconnecting the wallet, or using a different browser.</li>
            <li className="text-textPrimary/90">For mobile users, ensure that the wallet app is open and linked correctly.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Code Generation Errors</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            If you encounter errors during code generation, consider the following:
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li className="text-textPrimary/90">Verify that your project scope is well-defined and provides enough context for the AI to generate accurate code.</li>
            <li className="text-textPrimary/90">Ambiguous or incomplete instructions may lead to incorrect or unexpected outputs.</li>
            <li className="text-textPrimary/90">If errors persist, try simplifying your request or breaking it into smaller, clearer steps.</li>
            <li className="text-textPrimary/90">For advanced use cases, review the model’s documentation to optimize input formatting.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Deployment Failures</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            If your deployment fails, follow these steps:
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li className="text-textPrimary/90">Ensure that your GitHub repository permissions allow external integrations.</li>
            <li className="text-textPrimary/90">Check if your repository is correctly linked and has the necessary access tokens for deployment.</li>
            <li className="text-textPrimary/90">If the deployment process fails, verify that the repository is public or that private repository permissions are configured correctly.</li>
            <li className="text-textPrimary/90">Review error messages for specific issues, such as authentication failures or missing dependencies.</li>
          </ul>
        </div>
  
        <div className="group space-y-4 transition-all duration-300 hover:scale-[1.02] hover:pl-2">
          <h2 className="text-2xl font-bold text-accent">Contact Support</h2>
          <p className="text-textPrimary/90 leading-relaxed">
            If issues persist, reach out for assistance on our <strong><a className="font-bold text-accent" target="_blank" href="https://t.co/ERfXkaw0Nz">community Telegram</a></strong> channel. Our support team and other users can help troubleshoot problems and provide guidance. For faster assistance, include details about the issue, any error messages received, and steps you've already tried.
          </p>
        </div>
      </div>
    );
  };
  
  export default Troubleshooting;
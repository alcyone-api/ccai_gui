const Footer = () => {
    return (
      <footer className="fixed bottom-0 left-0 right-0 z-40 text-center py-6 bg-[#201f1e]/50 backdrop-blur-md border-t border-orange-500/30">
        <p className="font-tomorrow text-sm text-gray-300/80">
          &copy; {new Date().getFullYear()} CodeCraft AI. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
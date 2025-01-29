import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import PromptingInterface from "./components/PromptingInterface/PromptingInterface";
import FAQ from "./components/FAQ/FAQ";
import Docs from "./components/Docs/Docs";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import GenerationResult from "./components/GenerationResult/GenerationResult";
import ProjectPage from './components/ProjectPage/ProjectPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/prompt" element={<PromptingInterface />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          {/* Add the new route for GenerationResult */}
          <Route
            path="/generation-result"
            element={
              <GenerationResult/>
            }
          />
        </Routes>
      </div>
      <Background />
      <Footer />
    </Router>
  );
};

export default App;
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectPlan from './pages/ProjectPlan';
import Requirements from './pages/Requirements';
import Design from './pages/Design';
import Implementation from './pages/Implementation';
import Testing from './pages/Testing';
import QA from './pages/QA';
import Security from './pages/Security';
import Etc from './pages/Etc';
import Transition from './pages/Transition';
import RequirementsTraceabilityMatrix from './pages/forms/RequirementsTraceabilityMatrix';
import RequirementsDefinitionDocument from './pages/forms/RequirementsDefinitionDocument';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-plan" element={<ProjectPlan />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/design" element={<Design />} />
            <Route path="/implementation" element={<Implementation />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/qa" element={<QA />} />
            <Route path="/security" element={<Security />} />
            <Route path="/transition" element={<Transition />} />
            <Route path="/etc" element={<Etc />} />
            <Route path="/forms/requirements-traceability-matrix" element={<RequirementsTraceabilityMatrix />} />
            <Route path="/forms/requirements-definition-document" element={<RequirementsDefinitionDocument />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-16">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold text-gray-800">정보시스템 감리 산출물 가이드 포털</p>
          <p className="text-sm text-gray-600">Built with React + Vite + TypeScript + Tailwind CSS</p>
        </div>
        <div className="text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default App;

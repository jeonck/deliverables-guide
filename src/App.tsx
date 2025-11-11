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
import DocumentManagement from './pages/DocumentManagement';
import UserInterfaceDesignDocument from './pages/forms/UserInterfaceDesignDocument';
import ProcessDefinitionDocument from './pages/forms/ProcessDefinitionDocument';
import AppliedMethodologyAndDevelopmentStandards from './pages/forms/AppliedMethodologyAndDevelopmentStandards';
import UnitTestPlan from './pages/forms/UnitTestPlan';
import IntegrationTestPlan from './pages/forms/IntegrationTestPlan';
import QualityAssurancePlan from './pages/forms/QualityAssurancePlan';
import ApplicationSystemDesignDocument from './pages/forms/ApplicationSystemDesignDocument';
import ArchitectureDesignDocument from './pages/forms/ArchitectureDesignDocument';
import AcceptanceTestPlan from './pages/forms/AcceptanceTestPlan';
import AsIsBusinessAnalysisDocument from './pages/forms/AsIsBusinessAnalysisDocument';
import AsIsSystemAnalysisDocument from './pages/forms/AsIsSystemAnalysisDocument';

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
            <Route path="/document-management" element={<DocumentManagement />} />
            <Route path="/etc" element={<Etc />} />
            <Route path="/forms/requirements-traceability-matrix" element={<RequirementsTraceabilityMatrix />} />
            <Route path="/forms/requirements-definition-document" element={<RequirementsDefinitionDocument />} />
            <Route path="/forms/user-interface-design-document" element={<UserInterfaceDesignDocument />} />
            <Route path="/forms/process-definition-document" element={<ProcessDefinitionDocument />} />
            <Route path="/forms/applied-methodology-and-development-standards" element={<AppliedMethodologyAndDevelopmentStandards />} />
            <Route path="/forms/unit-test-plan" element={<UnitTestPlan />} />
            <Route path="/forms/integration-test-plan" element={<IntegrationTestPlan />} />
            <Route path="/forms/quality-assurance-plan" element={<QualityAssurancePlan />} />
            <Route path="/forms/application-system-design-document" element={<ApplicationSystemDesignDocument />} />
            <Route path="/forms/architecture-design-document" element={<ArchitectureDesignDocument />} />
            <Route path="/forms/acceptance-test-plan" element={<AcceptanceTestPlan />} />
            <Route path="/forms/as-is-business-analysis-document" element={<AsIsBusinessAnalysisDocument />} />
            <Route path="/forms/as-is-system-analysis-document" element={<AsIsSystemAnalysisDocument />} />
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

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Requirements from './pages/Requirements';
import Design from './pages/Design';
import Implementation from './pages/Implementation';
import Testing from './pages/Testing';
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
import DatabaseStandardDesignGuidelines from './pages/forms/DatabaseStandardDesignGuidelines';
import QualityAssuranceActivityPlanResult from './pages/forms/QualityAssuranceActivityPlanResult';
import { DataStandardizationDefinitionDocument } from './pages/forms/DataStandardizationDefinitionDocument';
import EntityDefinitionDocument from './pages/forms/EntityDefinitionDocument';
import AttributeDefinitionDocument from './pages/forms/AttributeDefinitionDocument';
import ColumnDefinitionDocument from './pages/forms/ColumnDefinitionDocument';
import TableDefinitionDocument from './pages/forms/TableDefinitionDocument';
import DatabaseDesignDocument from './pages/forms/DatabaseDesignDocument';
import ProgramDesignDocument from './pages/forms/ProgramDesignDocument';
import InterfaceDesignDocument from './pages/forms/InterfaceDesignDocument';
import InitialDataConstructionPlan from './pages/forms/InitialDataConstructionPlan';
import EducationPlan from './pages/forms/EducationPlan';
import MasterTestPlan from './pages/forms/MasterTestPlan';
import DataSystemDefinitionDocument from './pages/forms/DataSystemDefinitionDocument';
import ScreenDesignDocument from './pages/forms/ScreenDesignDocument';
import SystemTransitionPlan from './pages/forms/SystemTransitionPlan';
import DataMigrationPlan from './pages/forms/DataMigrationPlan';
import BackupAndRecoveryPlan from './pages/forms/BackupAndRecoveryPlan';
import SystemInstallationVerificationPlan from './pages/forms/SystemInstallationVerificationPlan';
import AccessControlDesignDocument from './pages/forms/AccessControlDesignDocument';
import BusinessFunctionDecompositionDiagram from './pages/forms/BusinessFunctionDecompositionDiagram';
import CodeDefinitionDocument from './pages/forms/CodeDefinitionDocument';
import TableProgramRelationshipDiagram from './pages/forms/TableProgramRelationshipDiagram';
import ProcessDesignDocument from './pages/forms/ProcessDesignDocument';
import SecurityPolicyDesignDocument from './pages/forms/SecurityPolicyDesignDocument';
import UserManual from './pages/forms/UserManual';
import OperatorManual from './pages/forms/OperatorManual';
import UnitTestCases from './pages/forms/UnitTestCases';
import IntegrationTestScenario from './pages/forms/IntegrationTestScenario';
import SystemTestScenario from './pages/forms/SystemTestScenario';
import AcceptanceTestScenario from './pages/forms/AcceptanceTestScenario';
import UserInterfaceDesignDocumentForm from './pages/forms/UserInterfaceDesignDocumentForm';
import ClassSpecificationDocumentForm from './pages/forms/ClassSpecificationDocumentForm';
import DatabaseTableForm from './pages/forms/DatabaseTableForm';
import UnitTestResultDocumentForm from './pages/forms/UnitTestResultDocumentForm';
import IntegrationTestResultDocumentForm from './pages/forms/IntegrationTestResultDocumentForm';
import SystemTestResultDocumentForm from './pages/forms/SystemTestResultDocumentForm';
import AcceptanceTestResultDocumentForm from './pages/forms/AcceptanceTestResultDocumentForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/design" element={<Design />} />
            <Route path="/implementation" element={<Implementation />} />
            <Route path="/testing" element={<Testing />} />
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
            <Route path="/forms/database-standard-design-guidelines" element={<DatabaseStandardDesignGuidelines />} />
            <Route path="/forms/quality-assurance-activity-plan-result" element={<QualityAssuranceActivityPlanResult />} />
            <Route path="/forms/data-standardization-definition-document" element={<DataStandardizationDefinitionDocument />} />
            <Route path="/forms/entity-definition-document" element={<EntityDefinitionDocument />} />
            <Route path="/forms/attribute-definition-document" element={<AttributeDefinitionDocument />} />
            <Route path="/forms/column-definition-document" element={<ColumnDefinitionDocument />} />
            <Route path="/forms/table-definition-document" element={<TableDefinitionDocument />} />
            <Route path="/forms/database-design-document" element={<DatabaseDesignDocument />} />
            <Route path="/forms/program-design-document" element={<ProgramDesignDocument />} />
            <Route path="/forms/interface-design-document" element={<InterfaceDesignDocument />} />
            <Route path="/forms/initial-data-construction-plan" element={<InitialDataConstructionPlan />} />
            <Route path="/forms/education-plan" element={<EducationPlan />} />
            <Route path="/forms/master-test-plan" element={<MasterTestPlan />} />
            <Route path="/forms/data-system-definition-document" element={<DataSystemDefinitionDocument />} />
            <Route path="/forms/screen-design-document" element={<ScreenDesignDocument />} />
            <Route path="/forms/system-transition-plan" element={<SystemTransitionPlan />} />
            <Route path="/forms/data-migration-plan" element={<DataMigrationPlan />} />
            <Route path="/forms/backup-and-recovery-plan" element={<BackupAndRecoveryPlan />} />
            <Route path="/forms/system-installation-verification-plan" element={<SystemInstallationVerificationPlan />} />
            <Route path="/forms/access-control-design-document" element={<AccessControlDesignDocument />} />
            <Route path="/forms/business-function-decomposition-diagram" element={<BusinessFunctionDecompositionDiagram />} />
            <Route path="/forms/code-definition-document" element={<CodeDefinitionDocument />} />
            <Route path="/forms/table-program-relationship-diagram" element={<TableProgramRelationshipDiagram />} />
            <Route path="/forms/process-design-document" element={<ProcessDesignDocument />} />
            <Route path="/forms/security-policy-design-document" element={<SecurityPolicyDesignDocument />} />
            <Route path="/forms/user-manual" element={<UserManual />} />
            <Route path="/forms/operator-manual" element={<OperatorManual />} />
            <Route path="/forms/unit-test-cases" element={<UnitTestCases />} />
            <Route path="/forms/integration-test-scenario" element={<IntegrationTestScenario />} />
            <Route path="/forms/system-test-scenario" element={<SystemTestScenario />} />
            <Route path="/forms/acceptance-test-scenario" element={<AcceptanceTestScenario />} />
            <Route path="/forms/user-interface-design-document-form" element={<UserInterfaceDesignDocumentForm />} />
            <Route path="/forms/class-specification-document-form" element={<ClassSpecificationDocumentForm />} />
            <Route path="/forms/database-table-form" element={<DatabaseTableForm />} />
            <Route path="/forms/unit-test-result-document-form" element={<UnitTestResultDocumentForm />} />
            <Route path="/forms/integration-test-result-document-form" element={<IntegrationTestResultDocumentForm />} />
            <Route path="/forms/system-test-result-document-form" element={<SystemTestResultDocumentForm />} />
            <Route path="/forms/acceptance-test-result-document-form" element={<AcceptanceTestResultDocumentForm />} />
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

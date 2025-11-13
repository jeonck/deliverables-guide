import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const QualityAssurancePlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['품질 목표 및 지표', '프로젝트의 구체적인 품질 목표 (예: 결함 밀도, 테스트 커버리지 목표)', '결함 밀도: 0.5건/FP 이하, 테스트 커버리지: 80% 이상'],
    ['품질 보증 조직', '품질 관리 및 보증 활동에 대한 책임과 권한을 가진 조직 구성 및 역할 정의', 'QA팀 (QA 매니저, QA 엔지니어)'],
    ['품질 보증 활동 - 검토 및 감사', '설계 검토(Review), 코드 검토, 산출물 감사 등의 주기와 절차', '설계 검토: 주 1회, 코드 검토: 커밋 전'],
    ['품질 보증 활동 - 시험 관리', '단위, 통합, 시스템, 사용자 인수 시험(UAT) 등 모든 시험 단계의 관리 절차', '단위 시험: 개발자, 통합 시험: 테스트팀'],
    ['품질 보증 활동 - 형상 및 변경 관리', '산출물 및 소스 코드의 버전 관리 및 변경 통제 절차', 'Git을 통한 버전 관리, Jira를 통한 변경 요청'],
    ['품질 보증 활동 - 결함 관리 절차', '결함 보고, 분류, 추적, 수정 및 재시험에 이르는 표준 절차', '결함 발생 시 Jira에 등록, 심각도에 따라 우선순위 부여'],
    ['품질 측정', '품질 지표 측정 방법 및 보고 주기', '월별 결함 보고서, 주간 테스트 진행률 보고'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">품질보증 계획서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="품질보증계획서"
          fileName="품질보증계획서.xlsx"
        />
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border-2 border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">항목</th>
              <th className="border border-gray-300 px-4 py-2">설명</th>
              <th className="border border-gray-300 px-4 py-2">예시</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => ( // Skip header row for rendering
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cellIndex === 0 ? <span className="font-bold">{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">📚</span> 정보시스템 감리 요구 산출물: 적용 방법론 및 개발 표준
        </h2>
        <p className="mb-4 text-gray-700">
          정보시스템 감리 시 요구되는 적용 방법론 및 개발 표준 문서는 프로젝트가 어떤 방식으로 진행되며, 어떤 규칙과 기준을 준수할 것인지를 정의한 공식적인 문서입니다. 이는 개발 과정의 투명성과 일관성을 보장하고, 최종 산출물의 품질을 확보하기 위한 기반이 됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">1.</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          품질보증계획서는 프로젝트가 최종적으로 인도할 산출물과 시스템이 발주자가 요구하는 품질 기준을 충족하도록 보장하기 위해, 프로젝트 전 과정에서 수행해야 할 품질 관련 활동, 절차, 책임, 도구 및 측정 지표 등을 체계적으로 정의한 문서입니다. 이는 개발 방법론과 함께 프로젝트의 품질 관리 체계를 확립하는 핵심 문서입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>품질 기준 명확화:</strong> 프로젝트의 품질 목표와 합격 기준을 명확히 정의하고, 이를 달성하기 위한 구체적인 품질 보증(QA) 활동을 제시합니다.</li>
          <li><strong>품질 활동의 체계화:</strong> 개발 전 과정(분석, 설계, 구현, 시험)에 걸쳐 언제, 누가, 무엇을, 어떻게 검토하고 측정할 것인지 표준화하여, 품질 활동의 일관성 및 효율성을 높입니다.</li>
          <li><strong>리스크 관리:</strong> 잠재적인 품질 문제 발생 요인을 예측하고, 이를 방지하거나 완화하기 위한 예방적 및 교정적 조치를 계획합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 프로젝트가 체계적인 품질 관리 활동을 수행하고 있는지, 그리고 정의된 개발 표준과 절차를 준수했는지 확인하는 가장 중요한 기준 문서로 활용됩니다.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">3.</span> 작성 주체 및 시점 (Author and Timing)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">항목</th>
                <th className="border border-gray-300 px-4 py-2">상세 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">작성 주체</td>
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 품질 관리자 (QA Manager) 또는 <strong>프로젝트 관리자 (PM)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 착수/계획 단계에서 적용 방법론 및 개발 표준 문서를 수립하는 시점과 병행하여 초기 품질 전략을 수립하고 문서화합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 범위, 환경, 또는 개발 방법론에 중대한 변경이 발생하여 품질 관리 절차를 수정해야 할 경우 PM의 승인 하에 갱신합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurancePlan;

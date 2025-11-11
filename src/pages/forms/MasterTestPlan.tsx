import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const MasterTestPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 목표 및 범위', '시스템의 품질 목표와 시험 활동의 전체 범위 및 제외 영역 정의', '목표: 시스템 기능 100% 구현 및 안정성 확보, 범위: 단위, 통합, 시스템, 성능, 인수 시험'],
    ['시험 조직 및 책임', '시험 조직 구성, 시험 유형별 책임 및 역할 분담 (QA, 개발자, 사용자 등)', 'QA팀: 총괄 시험 관리, 개발팀: 단위/통합 시험 수행, 현업: 인수 시험 수행'],
    ['시험 단계별 전략', '단위, 통합, 시스템, 성능, 인수 시험 등 단계별 주요 목적, 접근 방식, 연계성', '단위: 개발자 코드 레벨 테스트, 통합: 모듈 간 연동 테스트, 시스템: 전체 기능 및 비기능 테스트'],
    ['시험 환경 및 도구', '시험 수행에 필요한 하드웨어, 소프트웨어, 네트워크 환경 및 사용할 자동화 도구/결함 관리 도구 목록', '환경: 개발/테스트 서버, 도구: Jira (결함 관리), Selenium (자동화)'],
    ['시험 일정 및 자원', '시험 단계별 상세 일정, 필요한 인력 및 예산 투입 계획', '일정: 2024.04.01~06.30, 인력: QA 3명, 개발자 5명, 예산: 5천만원'],
    ['결함 관리 절차', '결함의 보고, 분류, 추적, 조치, 재시험에 이르는 표준 절차 및 책임 정의', '결함 발견 -> Jira 등록 -> 개발팀 할당 -> 수정 -> QA 재시험 -> 완료'],
    ['시험 종료 기준', '모든 시험 단계를 합격으로 판정하기 위한 공식적인 기준 (예: 치명적 결함 0건, 커버리지 목표 달성 등)', '치명적 결함 0건, 주요 결함 5건 이하, 기능 커버리지 95% 이상'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '총괄시험계획서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '총괄시험계획서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">총괄 시험 계획서</h1>
        <button
          onClick={handleExcelDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          엑셀 다운로드
        </button>
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
          <span className="text-2xl mr-2">1.</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          <strong>총괄 시험 계획서 (Master Test Plan)</strong>는 프로젝트의 모든 시험 활동을 총체적으로 계획하는 최상위 시험 문서입니다. 이는 단위 시험, 통합 시험, 시스템 시험, 성능 시험, 인수 시험 등 개별 시험의 범위, 전략, 조직, 자원, 일정 등을 일관된 기준하에 통합적으로 정의하며, 개별 시험 계획서 작성의 근거와 지침이 됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">항목</th>
                <th className="border border-gray-300 px-4 py-2">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시험 활동의 로드맵 제시</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 전체 시험 활동의 범위와 순서를 명확히 제시하여, 시험 작업의 체계성과 효율성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시험 전략 및 표준 확립</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 특성을 고려한 종합적인 시험 전략을 수립하고, 시험 기준, 도구, 결함 관리 절차 등 시험 관련 표준을 통일하여 제시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">자원 및 조직 관리</td>
                <td className="border border-gray-300 px-4 py-2">시험 수행에 필요한 인력, 장비, 환경 등의 자원 투입 계획과 시험 조직, 역할, 책임을 정의합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 종합적인 품질 확보 전략이 적절하게 수립되었는지, 그리고 모든 시험 단계가 체계적으로 계획되었는지 평가하는 최상위 기준 문서로 사용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

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
                <td className="border border-gray-300 px-4 py-2">주로 <strong>사업자 (개발사/수행사)</strong>의 테스트 매니저 (Test Manager), 품질 관리자 (QA Manager) 또는 PM/PL이 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트의 계획 단계 또는 요구분석 단계 초기에 시스템 개발 방법론 및 일정이 확정되는 시점에 가장 먼저 수립되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 범위나 시험 환경에 중대한 변경이 발생하거나, 개별 시험 결과에 따라 전략을 수정해야 할 경우 지속적으로 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MasterTestPlan;

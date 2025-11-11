import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const AppliedMethodologyAndDevelopmentStandards: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['적용 방법론 개요', '채택된 개발 방법론 (예: 폭포수, 반복/점증, 애자일)의 개요 및 프로젝트 적용 범위', '폭포수 모델, 전 단계 완료 후 다음 단계 진행'],
    ['단계별 수행 절차', '프로젝트 단계별(분석-설계-구현-테스트-전환) 주요 활동, 투입 인력, 소요 기간', '분석: 요구사항 정의, 2명, 2주'],
    ['산출물 표준', '단계별로 제출해야 할 모든 산출물 목록, 양식, 작성 지침', '요구사항 정의서 (양식-REQ-001), 작성 지침 준수'],
    ['기술 표준', '프로그래밍 언어, 데이터베이스, 프레임워크 등 기술 스택에 대한 표준', 'Java 11, Oracle 19c, Spring Boot 2.x'],
    ['코딩 표준', '변수/함수 명명 규칙, 주석 처리 규칙, 코드 가독성 및 보안 관련 규칙', 'CamelCase 사용, 모든 함수에 Javadoc 주석 필수'],
    ['형상 관리 및 변경 관리 표준', '소스 코드 및 문서의 버전 관리 및 변경 요청 처리 절차', 'Git 사용, Jira를 통한 변경 요청 관리'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '적용방법론및개발표준');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '적용방법론및개발표준.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">적용 방법론 및 개발 표준</h1>
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
          <span className="text-2xl mr-2">📚</span> 정보시스템 감리 요구 산출물: 적용 방법론 및 개발 표준
        </h2>
        <p className="mb-4 text-gray-700">
          정보시스템 감리 시 요구되는 적용 방법론 및 개발 표준 문서는 프로젝트가 어떤 방식으로 진행되며, 어떤 규칙과 기준을 준수할 것인지를 정의한 공식적인 문서입니다. 이는 개발 과정의 투명성과 일관성을 보장하고, 최종 산출물의 품질을 확보하기 위한 기반이 됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">1.</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          적용 방법론 및 개발 표준 문서는 프로젝트의 개발 생명주기(SDLC) 전반에 걸쳐 사용될 절차(프로세스), 기법(기술), 산출물 양식, 품질 기준 등 일련의 규칙과 지침을 총체적으로 명세화한 문서입니다. 이는 프로젝트 팀원들이 동일한 방식과 기준으로 업무를 수행하게 하는 공통의 작업 틀을 제공합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>일관성 및 통일성 확보:</strong> 프로젝트 전체 팀이 동일한 개발 프로세스와 표준화된 양식을 사용하도록 강제하여, 산출물과 개발 결과물의 일관성과 품질을 유지합니다.</li>
          <li><strong>효율성 증대:</strong> 검증된 방법론과 표준화된 절차를 적용함으로써 개발 시행착오를 최소화하고, 프로젝트 관리 및 개발 작업의 효율성을 높입니다.</li>
          <li><strong>품질 기준 제시:</strong> 코딩 규칙, 설계 원칙, 테스트 절차 등 품질 관리 기준을 명확히 제시하여 고품질의 시스템을 개발하도록 유도합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 프로젝트가 계획된 절차와 규칙에 따라 진행되고 있는지, 그리고 표준을 준수했는지 확인하는 핵심 검토 자료로 사용됩니다. 특히 투입된 공수의 적정성 및 산출물의 완성도를 평가하는 기반이 됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 프로젝트 관리자 (PM), 기술 책임자 (TA), 또는 방법론 컨설턴트가 주도하여 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 착수 단계 (Kick-off) 또는 계획 단계에서 프로젝트의 특성과 환경을 고려하여 가장 먼저 수립되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 초기에 확정된 이후에는 큰 변경 없이 일관성 있게 적용되어야 하지만, 환경 변화나 중대한 문제 발생 시 PM의 승인 하에 한시적으로 변경 및 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedMethodologyAndDevelopmentStandards;

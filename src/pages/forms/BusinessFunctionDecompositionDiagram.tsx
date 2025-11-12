import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const BusinessFunctionDecompositionDiagram: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['계층 구조', '대분류 -> 중분류 -> 소분류 형태로 업무 기능을 나누고, 이를 도식화한 구조도 (트리 구조 형태)', '대분류: 고객 관리 -> 중분류: 고객 정보 관리 -> 소분류: 고객 등록, 고객 조회, 고객 수정, 고객 삭제'],
    ['기능 목록', '분해된 모든 기능 단위에 대한 고유 ID와 명칭 목록', 'ID: CUST-001, 명칭: 고객 등록'],
    ['기능 설명', '각 계층별 기능이 수행하는 역할에 대한 간략한 설명', '고객 등록: 신규 고객 정보를 시스템에 입력하고 저장하는 기능'],
    ['업무 연관 관계', '각 기능이 어떤 상위 업무에 속하며, 다른 기능과 어떤 관계가 있는지 정의', '고객 등록 (CUST-001)은 고객 정보 관리 (CUST-MGT)의 하위 기능이며, 고객 조회 (CUST-002)와 연관됨'],
    ['업무 중요도/우선순위', '해당 기능이 시스템 구축에서 갖는 중요도 또는 구현 우선순위 명시', '고객 등록: 중요도 (상), 우선순위 (1순위)'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '업무기능분해도');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '업무기능분해도.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">업무 기능 분해도</h1>
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
          <strong>업무 기능 분해도 (Business Function Decomposition Diagram)</strong>는 발주 기관의 <strong>전체 업무(Business)</strong>를 기능 단위로 계층적(Hierarchical)이고 체계적으로 분류하고 분해하여 도식화한 산출물입니다. 이는 현행 업무 분석(As-Is) 결과를 기반으로, 시스템이 지원해야 할 <strong>최종 기능 요구사항(To-Be)</strong>을 도출하기 위한 논리적 구조를 제공합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">업무 구조 명확화</td>
                <td className="border border-gray-300 px-4 py-2">복잡한 조직의 업무를 기능 중심으로 대분류, 중분류, 소분류 등으로 나누어 계층적으로 정리함으로써, 업무의 전체 구조와 범위를 명확히 이해하도록 돕습니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">요구사항 및 기능 정의의 기반</td>
                <td className="border border-gray-300 px-4 py-2">분해된 최하위 기능 단위를 기준으로 시스템의 구체적인 기능 요구사항을 정의하고, 시스템의 기능 목록과 프로그램 목록을 도출하는 가장 기본적인 논리적 토대가 됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">누락 방지 및 범위 통제</td>
                <td className="border border-gray-300 px-4 py-2">시스템이 지원해야 할 모든 업무 기능을 체계적으로 나열하여, 필수 기능이 누락되는 것을 방지하고 개발 <strong>범위(Scope)</strong>를 명확히 통제하는 기준으로 사용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 현행 업무 분석 결과가 시스템 기능 요구사항으로 정확하고 빠짐없이 연계되었는지, 그리고 시스템 설계의 논리적 시발점이 타당한지 평가하는 기준 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA) 및 <strong>기획자(PM/PL)</strong>가 주도적으로 작성하며, 발주처의 업무 전문가와 협의를 통해 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2"><strong>현행 업무 분석(As-Is)</strong>이 완료된 후, 요구분석 단계에서 시스템 기능 정의를 시작하는 시점에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">업무 범위나 기능 요구사항에 중대한 변경이 발생할 경우 갱신되어야 하며, 이후 기능 정의서 및 프로그램 설계의 기준으로 사용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessFunctionDecompositionDiagram;

import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const ProcessDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['프로세스 목록 및 개요', '설계 대상 핵심 업무 프로세스 목록 (예: 계약 관리, 재고 관리) 및 개요 설명', '계약 관리 프로세스: 고객과의 계약 체결부터 종료까지의 전 과정 관리'],
    ['프로세스 흐름도', 'Swim Lane 다이어그램 등 표준 표기법을 사용하여 업무 주체(조직/담당자), 활동 순서, 분기점, 시작/종료점 등을 도식화', 'Swim Lane: 고객, 영업팀, 시스템 / 활동: 계약서 작성 -> 승인 요청 -> 시스템 등록'],
    ['활동 상세 명세', '프로세스를 구성하는 각 활동에 대해 수행 주체, 소요 시간, 사용 데이터(테이블), 연관 시스템 기능(프로그램) 등을 상세 기술', '활동: 계약서 작성 / 주체: 영업팀 / 소요 시간: 10분 / 사용 데이터: 고객 정보, 계약 정보 / 시스템 기능: 계약 등록 화면'],
    ['입력/출력 데이터', '프로세스의 각 단계에서 사용되거나 생성되는 주요 정보(데이터) 명세', '입력: 고객 정보, 상품 정보 / 출력: 계약서, 계약 번호'],
    ['규칙 및 조건', '의사 결정(Decision Point) 시 적용되는 업무 규칙 및 조건 상세 정의', '계약 금액 1천만원 이상 시: 팀장 승인 필요'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '프로세스설계서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '프로세스설계서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">프로세스 설계서</h1>
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
          <strong>프로세스 설계서 (Process Design Document)</strong>는 구축될 정보시스템이 지원하는 핵심 업무 기능들이 시작부터 종료까지 어떤 순서와 절차로 진행되며, 각 단계에서 누가(Who), 무엇을(What), 언제(When) 수행하고, 어떤 데이터(Data)를 사용/생성하는지를 상세하게 정의한 문서입니다. 이는 업무 기능 분해도에서 도출된 최하위 기능들을 시간의 흐름에 따라 구체화한 것입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">업무 흐름의 명확화</td>
                <td className="border border-gray-300 px-4 py-2">To-Be 시스템 환경에서 사용자들이 수행해야 할 개선된 업무 절차를 명확히 정의하여, 시스템 구현 전에 업무 프로세스의 정합성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 기능 연계 기준</td>
                <td className="border border-gray-300 px-4 py-2">업무 흐름을 구성하는 <strong>각 활동(Activity)</strong>이 <strong>어떤 시스템 기능(프로그램)</strong>과 어떤 데이터를 사용하는지 명시하여, 시스템 설계와 업무 요구사항 간의 정확한 연계 기준을 제시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">개발 및 테스트의 기준</td>
                <td className="border border-gray-300 px-4 py-2">정의된 프로세스 흐름을 기반으로 프로그램 모듈 간의 호출 관계를 설계하고, 통합 시험(Integration Test) 시나리오를 작성하는 근거 자료로 활용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 현행 업무 분석 결과와 요구사항이 개선된 프로세스에 충실하고 효율적으로 반영되었는지 평가하는 핵심 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA) 및 <strong>기획자(PM/PL)</strong>가 주도적으로 작성하며, 발주처의 업무 전문가와 협의하여 개선된 프로세스를 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">현행 업무 분석(As-Is) 및 업무 기능 분해도가 완료된 후, 시스템 설계 단계 초기에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설계 및 구현 과정에서 프로그램 모듈 분할 또는 사용자 요구사항 변경 등으로 인해 업무 흐름이 수정될 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProcessDesignDocument;

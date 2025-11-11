import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const ProcessDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['프로세스 ID 및 명칭', '고유 식별자와 프로세스 이름', 'PROC-001 (회원가입 프로세스)'],
    ['프로세스 개요', '해당 프로세스를 수행하는 목적과 간략한 설명', '사용자가 시스템에 새로운 계정을 생성하는 일련의 절차'],
    ['수행 주체 (Actor)', '프로세스를 시작하거나 참여하는 사용자(예: 관리자, 일반 사용자), 외부 시스템, 또는 부서', '일반 사용자, 시스템'],
    ['선행 조건 (Pre-condition)', '프로세스를 시작하기 위해 반드시 충족되어야 할 조건 (예: 사용자가 로그인되어 있어야 함, 이전 단계 데이터가 확정되어 있어야 함)', '사용자가 회원가입 페이지에 접근함'],
    ['후행 조건 (Post-condition)', '프로세스가 정상적으로 완료된 후의 결과 상태 (예: 데이터베이스에 신규 레코드가 생성됨, 사용자에게 완료 메시지가 전송됨)', '신규 회원 정보가 데이터베이스에 저장되고, 사용자에게 가입 완료 메시지가 표시됨'],
    ['입력 (Input Data)', '프로세스 수행을 위해 필요한 정보 또는 데이터 (예: 신청서 양식, 이전 단계의 처리 결과)', '사용자 아이디, 비밀번호, 이메일, 이름 등 회원 정보'],
    ['출력 (Output Data)', '프로세스 수행 결과로 생성되는 정보 또는 산출물 (예: 승인 결과, 보고서, 새로운 트랜잭션 데이터)', '회원가입 성공/실패 메시지, 신규 회원 계정 정보'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '프로세스정의서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '프로세스정의서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">프로세스 정의서</h1>
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
          프로세스 정의서는 시스템이 지원하거나 수행해야 할 <strong>주요 업무 흐름(Business Process)</strong>을 식별하고, 각 프로세스의 구성 요소(활동, 입력, 출력, 수행 주체, 조건 등)를 논리적이고 체계적으로 기술한 문서입니다. 이는 시스템이 사용자의 업무 요구사항을 어떻게 처리할 것인지에 대한 표준화된 운영 매뉴얼 및 설계 기반 역할을 합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li>업무 흐름의 명확화: 복잡한 업무를 단계별 활동으로 분해하고 명확히 정의하여, 관련 이해관계자들이 업무의 전체 흐름과 각 단계의 역할을 정확히 이해하도록 돕습니다.</li>
          <li>요구사항 이행 검증: 사용자 요구사항이 시스템 내에서 실제 업무 프로세스로 올바르게 구현되었는지 검증하는 기준을 제공합니다.</li>
          <li>시스템 설계의 기반: 정의된 프로세스 흐름을 기반으로 시스템의 기능(Function), 화면(UI), 데이터 모델을 설계하는 데 필요한 논리적 근거를 제공합니다.</li>
          <li>효율성 및 정합성 확보: 비효율적인 업무 단계나 불필요한 반복을 식별하고 제거하여 업무 효율성을 높이고, 시스템 기능과 실제 업무 간의 정합성을 보장합니다.</li>
          <li>감리 및 품질 관리: 감리 시 시스템이 업무 프로세스 표준을 준수하고 있는지, 그리고 요구사항대로 업무가 처리되는지 확인하는 핵심 검증 자료로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA), 기획자(PM/PL), 또는 업무 전문가가 주도하여 작성합니다. (사용자 측 업무 담당자의 검토 및 확인이 필수적입니다.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계에서 사용자 업무 요구사항을 도출하고 시스템화할 프로세스를 확정하는 시점에 초안이 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설계 단계에서 구체적인 시스템 기능을 반영하며 상세화되고, 개발 및 테스트 과정에서 프로세스 변경이나 개선사항이 발생할 경우 지속적으로 갱신됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={2}>핵심: 요구사항이 확정되면, 해당 요구사항을 기반으로 실제 사용자가 접할 화면을 구체화하는 시점부터 작성이 시작됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProcessDefinitionDocument;

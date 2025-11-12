import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const UserManual: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시스템 개요 및 목적', '시스템의 전체적인 역할 및 주요 기능에 대한 간략한 소개', '본 시스템은 고객 정보 관리 및 주문 처리를 위한 시스템입니다.'],
    ['화면 및 메뉴 구성 설명', '시스템 로그인, 메인 화면, 메뉴 구조 등 화면 구성 요소에 대한 설명', '로그인 후 메인 화면에서 좌측 메뉴를 통해 각 기능에 접근할 수 있습니다.'],
    ['기능별 사용 매뉴얼', '주요 업무 기능에 대한 단계별 작업 절차, 입력 필드 설명, 화면 이동 방법을 스크린샷과 함께 상세하게 기술', '고객 등록: 1. [고객 관리] 메뉴 선택 2. [신규 등록] 버튼 클릭 3. 고객 정보 입력 후 [저장] 버튼 클릭'],
    ['오류 메시지 및 조치', '시스템 사용 중 발생하는 주요 오류 메시지의 의미와 사용자 조치 방안', '오류 메시지: "필수 입력 항목 누락" -> 조치: *표시된 필수 항목을 모두 입력하십시오.'],
    ['자주 묻는 질문 (FAQ)', '사용자들이 흔히 겪는 문제 및 해결 방법 목록', 'Q: 비밀번호를 잊어버렸습니다. A: 로그인 화면에서 [비밀번호 찾기]를 클릭하십시오.'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '사용자지침서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '사용자지침서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">사용자 지침서</h1>
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
          <strong>사용자 지침서 (User Manual)</strong>는 구축된 정보시스템을 이용하는 <strong>최종 사용자(End-User)</strong>가 시스템의 각 기능과 서비스를 효율적이고 정확하게 사용할 수 있도록 단계별 사용 방법, 화면 구성, 입력 형식, 오류 메시지 및 해결 방안 등을 상세하고 쉽게 설명한 문서입니다. 이는 시스템 운영 개시 후 사용자들의 자체적인 시스템 활용 능력을 지원하는 핵심 문서입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 활용의 극대화</td>
                <td className="border border-gray-300 px-4 py-2">사용자가 시스템의 모든 기능을 정확하고 효과적으로 사용하여, 업무 효율성을 높이고 시스템 도입의 목적을 달성하도록 지원합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">자체적인 문제 해결 지원</td>
                <td className="border border-gray-300 px-4 py-2">시스템 사용 중 발생하는 오류나 단순 문제에 대해 사용자가 스스로 해결할 수 있도록 상세한 가이드라인을 제공하여, 운영 지원 인력(Help Desk)의 부담을 경감시킵니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">교육 자료로 활용</td>
                <td className="border border-gray-300 px-4 py-2">신규 인력 배치 또는 업무 변경 시 시스템 교육을 위한 표준 교재로 활용되어, 교육의 일관성과 효율성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 사용자 인터페이스(UI)의 편의성을 간접적으로 평가하고, 시스템 기능 정의가 사용자 관점에서 명확하게 문서화되었는지 확인하는 기준으로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA), 기획자, 또는 교육 담당자가 주도적으로 작성하며, 발주처의 현업 사용자의 검토 및 피드백을 반영합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 구현 단계 후반 또는 시스템 시험 단계에 시스템 기능이 거의 확정되었을 때 작성되기 시작하며, 인수 시험(UAT) 이전에 초안이 완성되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 기능 수정, 화면 변경, 또는 새로운 기능 추가 등으로 인해 시스템 사용 방법이 달라질 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManual;

import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const UserInterfaceDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['화면 ID 및 명칭', '고유 식별자와 화면 이름', 'UI-LOGIN (로그인 화면)'],
    ['화면 유형', '메인, 목록, 상세, 입력, 팝업 등', '입력'],
    ['화면 구성 요소', '텍스트 필드, 버튼, 드롭다운, 테이블 등 모든 UI 컴포넌트 목록', '아이디 입력 필드, 비밀번호 입력 필드, 로그인 버튼, 회원가입 버튼'],
    ['컴포넌트 속성', '각 요소의 크기, 위치, 기본값, 필수 입력 여부, 데이터 포맷 (예: 날짜, 숫자), 최대 길이 등', '아이디: 텍스트, 필수, 최대 20자; 비밀번호: 패스워드, 필수, 최대 20자; 로그인 버튼: 클릭 시 로그인 처리'],
    ['이벤트/상호작용 정의', '사용자의 행위 (클릭, 마우스 오버 등)에 따른 시스템의 응답 (화면 전환, 에러 메시지, 값 변경 등) 정의', '로그인 버튼 클릭 시: 아이디/비밀번호 유효성 검증 후 메인 화면으로 이동 또는 에러 메시지 표시'],
    ['에러 메시지/유효성 검증', '입력 오류 시 표시될 메시지와 검증 규칙', '아이디 미입력 시 "아이디를 입력해주세요."'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '사용자인터페이스설계서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '사용자인터페이스설계서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">사용자 인터페이스 설계서</h1>
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
          <span className="text-2xl mr-2">📝</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          사용자 인터페이스 설계서는 시스템이 사용자에게 정보를 제공하고 상호작용하는 모든 방식과 요소(화면, 버튼, 입력 필드, 정보 구조, 디자인 스타일 등)를 상세하고 체계적으로 명시한 문서입니다. 이는 시스템의 <strong>사용자 경험(UX)</strong>과 <strong>시각적 디자인(UI)</strong>을 개발팀이 정확히 구현할 수 있도록 하는 공식적인 설계 청사진 역할을 합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">🎯</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>설계 명세화 및 기준 제공:</strong> 화면 구조, 기능, 디자인 스타일, 상호작용 규칙 등 UI/UX 관련 모든 사항을 문서로 확정하여 개발과 테스트의 기준을 제시합니다.</li>
          <li><strong>사용자 편의성 확보:</strong> 사용자 요구사항을 기반으로 직관적이고 효율적인 인터페이스를 설계하여 시스템의 사용성을 높입니다.</li>
          <li><strong>일관성 유지:</strong> 시스템 전반에 걸쳐 통일된 <strong>디자인 규칙(Color, Font, Layout)</strong>과 상호작용 방식을 적용하도록 보장합니다.</li>
          <li><strong>커뮤니케이션 도구:</strong> 기획자, 디자이너, 개발자, 테스트 담당자 등 모든 이해관계자 간의 명확한 의사소통 수단으로 기능하여 오해를 방지하고 효율성을 증대합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리 시 요구사항 추적과 사용성 적정성을 검토하는 데 사용되는 핵심 산출물입니다.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">🧑‍💻</span> 작성 주체 및 시점 (Author and Timing)
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 UI/UX 디자이너와 <strong>기획자(PM/PL)</strong>가 주로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 및 정의 단계 이후 (어떤 기능을 구현할지 확정된 후), 시스템 설계 단계 초기에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">상세 설계, 개발 과정, 사용자 피드백, 또는 요구사항 변경 등으로 UI에 수정이 발생할 경우 프로젝트 완료 시점까지 지속적으로 갱신됩니다.</td>
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

export default UserInterfaceDesignDocument;

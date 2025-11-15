import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const ScreenDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['화면 목록 및 흐름도', '시스템을 구성하는 전체 화면 목록, 화면 간의 이동 경로(Flow)를 나타내는 다이어그램', '화면 ID: SCM001, 화면명: 고객 조회, 흐름: 로그인 -> 메인 -> 고객 조회'],
    ['화면 레이아웃', 'GNB/LNB, 콘텐츠 영역, 푸터 등 화면 영역별 구조 및 배치 정의 (와이어프레임 형태)', '상단 GNB, 좌측 LNB, 중앙 콘텐츠 영역, 하단 푸터'],
    ['화면 상세 명세', '각 화면의 고유 ID, 명칭 및 화면을 구성하는 모든 UI 컴포넌트 목록', '화면 ID: SCM001, 컴포넌트: 검색 버튼, 고객 목록 테이블'],
    ['요구사항ID', '해당 화면이 구현하는 기능과 관련된 요구사항 ID', 'REQ-001, REQ-005'],
    ['컴포넌트 속성', '버튼, 입력 필드, 드롭다운 등 각 요소의 크기, 위치, 필수 입력 여부, 데이터 형식, 기본값 등 상세 속성', '고객명 입력 필드: 최대 50자, 필수, 기본값: 빈 문자열'],
    ['이벤트 및 상호작용 정의', '사용자의 클릭, 입력 등의 행위에 따른 시스템의 응답(메시지, 화면 전환, 값 변경) 로직 정의', '검색 버튼 클릭 시: 고객명으로 DB 조회 후 결과 테이블에 표시'],
    ['오류 및 메시지', '유효성 검증 실패 시 표시될 에러 메시지 및 표시 위치', '고객명 미입력 시: "고객명을 입력해주세요." 메시지, 입력 필드 하단에 표시'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">화면 설계서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="화면설계서"
          fileName="화면설계서.xlsx"
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
          <span className="text-2xl mr-2">1.</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          <strong>화면 설계서 (Screen Design Document)</strong>는 구축될 정보시스템의 <strong>모든 사용자 인터페이스(UI)</strong>에 대해 화면의 구성 요소, 레이아웃, 기능 배치, 사용자와의 상호작용(Interaction) 방식 등을 상세히 정의한 문서입니다. 이는 사용자 인터페이스 설계서의 주요 내용으로서, 시스템의 사용자 경험(UX)을 구체화하여 개발자에게 화면 구현을 위한 최종 스펙을 제공합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">UI/UX 구현 표준 제시</td>
                <td className="border border-gray-300 px-4 py-2">모든 화면의 시각적 요소, 기능적 배치, 동작 규칙 등을 표준화하여, 개발자가 일관되고 사용성이 높은 화면을 구현하도록 기술적 기준을 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">요구사항 이행 검증</td>
                <td className="border border-gray-300 px-4 py-2">기능 정의서에 명시된 기능들이 사용자에게 어떤 화면을 통해 제공되며, 사용자 인터페이스 설계 원칙을 준수했는지 검증하는 근거가 됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">개발 및 테스트의 기준</td>
                <td className="border border-gray-300 px-4 py-2">화면 레이아웃, 컴포넌트 속성, 이벤트 처리 로직 등이 명확히 정의되어, 프론트엔드 개발 및 화면 기능 테스트의 공식적인 기준으로 활용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 <strong>사용자 편의성(Usability)</strong>과 <strong>접근성(Accessibility)</strong>을 포함한 UI/UX 설계의 적정성을 평가하고, 요구사항 반영 여부를 확인하는 핵심 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 UI/UX 디자이너와 <strong>기획자(PM/PL)</strong>가 주도적으로 작성하며, 사용자(발주처)의 업무 담당자의 검토를 통해 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">기능 정의서가 확정된 후, 시스템 설계 단계 초기에 작성됩니다. 이는 개발이 시작되기 전에 모든 화면의 구조와 동작이 확정되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">사용자 테스트(Mockup Test) 결과나 요구사항 변경으로 인해 화면 디자인 및 기능에 수정이 발생할 경우, 구현이 완료될 때까지 지속적으로 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScreenDesignDocument;

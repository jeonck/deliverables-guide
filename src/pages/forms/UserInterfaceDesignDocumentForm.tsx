import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const UserInterfaceDesignDocumentForm: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['UI/UX 디자인 원칙', '시스템 전반에 적용할 사용자 경험 및 인터페이스 디자인의 기본 원칙 (예: 일관성, 피드백, 최소 노력).', '일관성: 모든 화면에서 동일한 버튼 스타일과 색상 사용. 피드백: 사용자 입력 시 즉각적인 시각적/청각적 반응 제공.'],
    ['화면 목록 및 흐름도', '시스템을 구성하는 전체 화면 목록 및 화면 간의 이동 경로(Flow)를 도식화 (화면 설계서 포함).', '메인 화면 -> 로그인 화면 -> 상품 목록 화면 -> 상품 상세 화면 -> 장바구니 화면 -> 결제 화면'],
    ['화면 상세 명세', '각 화면의 레이아웃, 컴포넌트 배치, 입력 필드 속성(데이터 타입, 필수 여부) 등 상세 정의.', '로그인 화면: ID (텍스트, 필수), PW (비밀번호, 필수), 로그인 버튼 (활성화/비활성화 상태)'],
    ['표준 UI 컴포넌트 정의', '공통적으로 사용되는 버튼, 팝업, 캘린더 등의 디자인 및 동작 표준 정의.', '버튼: 기본 (파란색), 보조 (회색), 경고 (빨간색). 팝업: 중앙 정렬, 배경 블러 처리.'],
    ['상호작용 및 이벤트 정의', '사용자 행위에 따른 시스템의 응답 로직, 오류 및 메시지 처리 상세 명세.', '로그인 실패 시: "아이디 또는 비밀번호가 일치하지 않습니다." 메시지 표시. 상품 추가 시: "장바구니에 상품이 추가되었습니다." 토스트 메시지.'],
    ['접근성 및 호환성', '장애인 접근성 지침 준수 여부 및 브라우저/디바이스 호환성 확보 방안.', '웹 접근성 표준 (WCAG 2.1) 준수, Chrome, Firefox, Edge 최신 버전 및 모바일 (iOS, Android) 호환성 확보.'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">사용자 인터페이스 설계서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="사용자인터페이스설계서"
          fileName="사용자인터페이스설계서.xlsx"
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
          <strong>사용자 인터페이스 설계서 (User Interface Design Document)</strong>는 구축될 정보시스템의 사용자 환경(화면, 메뉴, 입력/출력 방식 등)을 <strong>사용자 편의성(Usability)</strong>과 <strong>접근성(Accessibility)</strong>을 고려하여 상세하게 정의한 문서입니다. 이는 사용자 경험(UX) 원칙을 시스템에 적용하고, 모든 화면의 구성, 상호작용 방식, 시각 디자인 및 동작 로직을 구현의 기준으로 명세화합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">사용자 중심 설계 구현</td>
                <td className="border border-gray-300 px-4 py-2">시스템이 최종 사용자에게 직관적이고 효율적인 조작 환경을 제공하도록 설계되어, 사용자 만족도와 업무 효율성을 극대화합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">기능 구현의 통일성 확보</td>
                <td className="border border-gray-300 px-4 py-2">모든 화면과 기능의 UI/UX를 일관된 기준으로 설계하여, 개발자들이 표준화된 방식으로 구현하도록 유도하고 시스템 전체의 통일성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">개발 및 테스트의 근거</td>
                <td className="border border-gray-300 px-4 py-2">화면 레이아웃, 컴포넌트 동작 방식, 이벤트 처리 로직 등이 명확히 정의되어 프론트엔드 개발 및 화면 기능 테스트의 공식적인 기준으로 활용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 사용자 요구사항 이행 여부, 시스템의 사용 편의성 및 접근성 준수 여부를 평가하는 핵심 기준 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 UI/UX 디자이너와 <strong>기획자(PM/PL)</strong>가 주도적으로 작성하며, 발주처의 현업 사용자의 검토 및 승인을 받습니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">기능 정의서가 확정된 후, 시스템 설계 단계 초기에 작성됩니다. 이는 프로그램 구현의 선행 작업입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">사용자 프로토타입 테스트(Mockup Test) 결과나 요구사항 변경으로 인해 디자인 및 기능에 수정이 발생할 경우 지속적으로 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInterfaceDesignDocumentForm;

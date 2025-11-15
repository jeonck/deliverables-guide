import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const UserAcceptanceTestResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '시스템 명',
      '내용': '신규 고객 관리 시스템 (New CMS)',
    },
    {
      '항목': '인수시험 기간',
      '내용': '2023-12-26 ~ 2023-12-29',
    },
    {
      '항목': '인수시험 대상 모듈/기능',
      '내용': '고객 정보 등록/수정/삭제, 주문 조회, 상품 관리, 통계 보고서',
    },
    {
      '항목': '인수시험 책임자',
      '내용': '박영희 (서비스 기획팀장)',
    },
    {
      '항목': '인수시험 참여자',
      '내용': '영업팀 3명, 마케팅팀 2명, 고객지원팀 3명',
    },
    {
      '항목': '인수시험 결과',
      '내용': `
- **총 테스트 케이스 수:** 50건
- **성공 건수:** 48건
- **실패 건수:** 2건
- **보완 필요 사항:**
  - 고객 정보 검색 시 특정 조건에서 속도 저하 발생
  - 통계 보고서 일부 항목의 데이터 정합성 미흡
      `,
    },
    {
      '항목': '결론 및 승인 여부',
      '내용': '핵심 기능은 정상 작동하므로 조건부 인수 승인. 보완 필요 사항은 2024년 1월 10일까지 조치 완료 후 재검증 예정.',
    },
    {
      '항목': '요구사항ID',
      '내용': 'URG-001, URG-005, URG-010',
    },
  ];

  const tableData = [
    ['항목', '내용'],
    ...data.map(item => [item.항목, item.내용])
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarOffset = 100; // Height of the sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">사용자 인수시험 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          사용자 인수시험의 수행 결과와 시스템의 인수 승인 여부를 기록한 문서
        </p>
      </header>

      <nav className="mb-12">
        <ul className="flex justify-center gap-4">
          <li><a href="#definition" onClick={(e) => handleNavClick(e, 'definition')} className="text-blue-600 hover:underline">정의</a></li>
          <li><a href="#purpose" onClick={(e) => handleNavClick(e, 'purpose')} className="text-blue-600 hover:underline">목적 및 역할</a></li>
          <li><a href="#author" onClick={(e) => handleNavClick(e, 'author')} className="text-blue-600 hover:underline">작성 주체 및 시점</a></li>
          <li><a href="#contents" onClick={(e) => handleNavClick(e, 'contents')} className="text-blue-600 hover:underline">주요 포함 내용</a></li>
          <li><a href="#example" onClick={(e) => handleNavClick(e, 'example')} className="text-blue-600 hover:underline">예시</a></li>
        </ul>
      </nav>

      <section id="definition" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">1. 정의 (Definition)</h2>
        <p className="text-gray-800 leading-relaxed">
          <strong>사용자 인수시험 결과서 (User Acceptance Test Result Document)</strong>는 개발된 정보시스템이 사용자(User)의 실제 업무 요구사항과 기대에 부합하는지 최종적으로 확인하는 사용자 인수시험(UAT)의 수행 결과와 시스템의 최종 인수 승인 여부를 기록한 문서입니다. 이는 시스템이 실제 운영 환경에서 문제없이 사용될 수 있음을 증명하고, 미해결된 문제점이나 추가 요구사항을 명시하여 시스템 개선의 근거 자료로 활용됩니다.
        </p>
      </section>

      <section id="purpose" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">2. 목적 및 역할 (Purpose and Role)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left w-1/4">항목</th>
                <th className="border border-gray-300 px-4 py-2 text-left w-3/4">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 인수 승인 여부 결정</td>
                <td className="border border-gray-300 px-4 py-2">사용자 관점에서 시스템이 기대하는 수준으로 구현되었는지 최종적으로 판단하고, 시스템의 공식적인 인수 승인 여부를 결정하는 핵심 자료입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">업무 요구사항 충족 확인</td>
                <td className="border border-gray-300 px-4 py-2">시스템이 사용자의 실제 업무 환경 및 프로세스에서 요구사항을 정확히 충족하며 작동하는지 확인하고, 사용자 편의성 및 효율성을 평가합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">미해결 문제점 및 향후 조치 계획 문서화</td>
                <td className="border border-gray-300 px-4 py-2">인수시험 중 발견된 결함, 개선 요청 사항, 또는 추가/변경 요구사항을 명확히 기록하고, 이에 대한 조치 계획 및 책임자를 문서화합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 프로젝트의 최종 산출물인 시스템이 사용자의 요구사항을 얼마나 충족시키는지, 그리고 인수 절차가 적절하게 진행되었는지를 평가하는 중요한 근거 자료로 활용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="author" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">3. 작성 주체 및 시점 (Author and Timing)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left w-1/4">항목</th>
                <th className="border border-gray-300 px-4 py-2 text-left w-3/4">상세 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">작성 주체</td>
                <td className="border border-gray-300 px-4 py-2"><strong>발주처</strong>의 실무 담당자, 업무 책임자, 또는 프로젝트 관리자(PM)가 주도적으로 작성하며, <strong>사업자 (개발사/수행사)</strong>의 테스트 관리자/PM이 협업하여 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 시험(통합/시스템 테스트)이 완료된 후, 실제 사용자들이 참여하는 인수시험이 모두 완료된 직후에 작성됩니다. (주로 전환 단계)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">인수시험 결과 발견된 문제점이 보완 조치되어 재검증이 수행되거나, 시스템의 최종 인수 승인 여부에 중대한 변경이 발생할 경우 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>시스템 명 및 인수시험 기간:</strong> 인수시험이 수행된 시스템의 명칭, 인수시험이 진행된 기간.</li>
          <li><strong>인수시험 대상 모듈/기능:</strong> 인수시험 범위에 포함된 주요 모듈 및 기능.</li>
          <li><strong>인수시험 책임자 및 참여자:</strong> 인수시험을 주관한 책임자 및 실제 참여한 사용자/담당자 목록.</li>
          <li><strong>인수시험 환경:</strong> 인수시험이 수행된 하드웨어, 소프트웨어, 네트워크 환경 정보.</li>
          <li><strong>인수시험 케이스별 결과:</strong> 수행된 각 인수시험 케이스에 대한 성공/실패 여부, 발견된 결함 정보.</li>
          <li><strong>전체 인수시험 결과 요약:</strong> 총 테스트 케이스 수, 성공률, 실패율 등 인수시험 결과의 종합 요약.</li>
          <li><strong>미해결 문제점 및 보완 요구사항:</strong> 인수시험 중 발견되었으나 아직 해결되지 않은 문제점, 추가적인 보완 요구사항.</li>
          <li><strong>최종 결론 및 인수 승인 여부:</strong> 인수시험 결과를 바탕으로 한 시스템의 최종 인수 여부 결정 (승인, 조건부 승인, 보류 등).</li>
          <li><strong>요구사항ID:</strong> 추적성을 확보하기 위한 요구사항ID.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 사용자 인수시험 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="사용자 인수시험 결과서" fileName="사용자_인수시험_결과서_예시" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left w-1/4">항목</th>
                <th className="border border-gray-300 px-4 py-2 text-left w-3/4">내용</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">{item.항목}</td>
                  <td className="border border-gray-300 px-4 py-2 whitespace-pre-wrap">{item.내용}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <Link to="/transition" className="text-blue-600 hover:underline">전환 페이지로 돌아가기</Link>
      </footer>
    </div>
  );
};

export default UserAcceptanceTestResultDocument;

import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const SystemAndBusinessTransitionResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '전환 대상 시스템',
      '내용': '기존 고객 관리 시스템 (Legacy CMS) -> 신규 고객 관리 시스템 (New CMS)',
    },
    {
      '항목': '전환 대상 업무',
      '내용': '고객 정보 관리, 상품 주문 처리, 결제 및 정산, 통계 및 보고서',
    },
    {
      '항목': '전환 기간',
      '내용': '2023-12-20 ~ 2023-12-24',
    },
    {
      '항목': '전환 활동 내역',
      '내용': `
- **시스템 전환:**
  - New CMS 운영 환경 최종 점검 및 오픈
  - Legacy CMS 서비스 중단 및 데이터 백업
- **업무 전환:**
  - New CMS 기반의 고객 정보 관리 업무 개시
  - New CMS 기반의 상품 주문 처리 업무 개시
  - New CMS 기반의 결제 및 정산 업무 개시
- **사용자 교육 및 지원:**
  - New CMS 사용자 교육 완료 (교육 결과서 참조)
  - 시스템 오픈 초기 사용자 지원 데스크 운영
      `,
    },
    {
      '항목': '전환 결과 및 검증',
      '내용': `
- **시스템:** New CMS 정상 운영 확인, Legacy CMS 서비스 완전 중단 확인
- **업무:** 모든 핵심 업무 New CMS에서 정상 처리 확인
- **사용자:** New CMS 사용에 대한 사용자 만족도 조사 결과 긍정적
      `,
    },
    {
      '항목': '문제점 및 해결 방안',
      '내용': `
- **문제점:** 시스템 오픈 초기 일부 사용자의 로그인 오류 발생
- **해결 방안:** 사용자 계정 정보 재동기화 및 비밀번호 초기화 지원으로 해결
      `,
    },
    {
      '항목': '결론 및 권고 사항',
      '내용': '시스템 및 업무 전환 성공적으로 완료. 안정적인 시스템 운영을 위한 지속적인 모니터링 및 사용자 피드백 반영 권고.',
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
        <h1 className="text-4xl font-bold text-gray-800">시스템 및 업무 전환 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          신규 시스템 도입에 따른 시스템 및 관련 업무의 전환 결과를 기록한 문서
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
          <strong>시스템 및 업무 전환 결과서 (System and Business Transition Result Document)</strong>는 신규 정보시스템의 성공적인 도입을 위해 기존 시스템 및 관련 업무를 신규 시스템 기반으로 전환한 최종 결과를 기록한 문서입니다. 이는 시스템 전환의 완료 여부, 업무 프로세스의 안정화, 사용자 적응도 등을 종합적으로 평가하고, 전환 과정에서 발생한 문제점 및 해결 방안을 명시하여 시스템의 안정적인 운영을 보증합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 전환 완료 증명</td>
                <td className="border border-gray-300 px-4 py-2">기존 시스템에서 신규 시스템으로의 전환이 성공적으로 완료되었음을 공식적으로 확인하고, 시스템의 안정적인 운영을 위한 기반이 마련되었음을 증명합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">업무 프로세스 안정화 확인</td>
                <td className="border border-gray-300 px-4 py-2">신규 시스템 도입에 따른 업무 프로세스의 변경 사항이 안정적으로 정착되었는지 확인하고, 업무 효율성 및 연속성을 보장합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">사용자 적응도 및 만족도 평가</td>
                <td className="border border-gray-300 px-4 py-2">신규 시스템 사용에 대한 사용자들의 적응도와 만족도를 평가하여, 추가적인 교육이나 지원이 필요한 부분을 식별하고 개선 방안을 모색합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 전환 계획의 이행 여부, 업무 전환의 적정성, 그리고 시스템의 안정적인 운영 준비 상태를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 프로젝트 관리자(PM), 업무 분석가, 또는 발주처의 시스템 운영 담당자가 공동으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 오픈 및 업무 전환이 완료되고, 초기 안정화 기간을 거친 직후에 작성됩니다. (주로 전환 단계 후반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 또는 업무 프로세스에 중대한 변경이 발생하여 추가적인 전환 활동이 필요할 경우 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>전환 대상 시스템 및 업무:</strong> 시스템 전환이 수행된 기존 및 신규 시스템, 그리고 전환 대상 업무 프로세스.</li>
          <li><strong>전환 기간 및 담당자:</strong> 시스템 및 업무 전환 활동이 진행된 기간 및 관련 담당자.</li>
          <li><strong>전환 활동 내역:</strong> 시스템 오픈, Legacy 시스템 중단, 업무 프로세스 변경 적용, 사용자 교육 및 지원 등 수행된 모든 전환 활동의 상세 내용.</li>
          <li><strong>전환 결과 및 검증:</strong> 시스템의 정상 운영 여부, 업무 프로세스의 안정화 확인, 사용자 적응도 및 만족도 평가 결과.</li>
          <li><strong>문제점 및 해결 방안:</strong> 전환 과정에서 발생한 문제점(예: 시스템 오류, 업무 혼란) 및 이에 대한 조치 내역.</li>
          <li><strong>결론 및 권고 사항:</strong> 시스템 및 업무 전환 목표 달성 여부, 향후 시스템 운영 및 유지보수를 위한 권고 사항.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 시스템 및 업무 전환 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="시스템 및 업무 전환 결과서" fileName="시스템_및_업무_전환_결과서_예시" />
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

export default SystemAndBusinessTransitionResultDocument;

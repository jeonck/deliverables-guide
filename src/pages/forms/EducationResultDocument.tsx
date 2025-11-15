import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const EducationResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '교육 과정명',
      '내용': '신규 고객 관리 시스템 (CMS) 사용자 교육',
    },
    {
      '항목': '교육 대상',
      '내용': '영업팀, 마케팅팀, 고객지원팀 직원 (총 50명)',
    },
    {
      '항목': '교육 기간',
      '내용': '2023-11-20 ~ 2023-11-24 (총 5일, 일 4시간)',
    },
    {
      '항목': '교육 내용',
      '내용': `
- CMS 시스템 개요 및 주요 기능 소개
- 고객 정보 등록 및 조회 방법
- 주문 처리 및 결제 관리
- 통계 및 보고서 활용
- 질의응답 및 실습
      `,
    },
    {
      '항목': '교육 강사',
      '내용': '김철수 (개발팀), 이영희 (기획팀)',
    },
    {
      '항목': '교육 결과',
      '내용': `
- **참석률:** 95% (48명 참석)
- **만족도:** 평균 4.5/5점 (매우 만족)
- **이해도 평가:** 평균 85점 (합격 기준 70점)
- **주요 피드백:**
  - 시스템 UI가 직관적이고 사용하기 편리함
  - 일부 기능(예: 대량 데이터 업로드)에 대한 추가 교육 요청
      `,
    },
    {
      '항목': '개선 및 후속 조치',
      '내용': `
- 추가 교육 요청 기능에 대한 온라인 매뉴얼 제작
- 시스템 오픈 후 정기적인 Q&A 세션 운영
      `,
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
        <h1 className="text-4xl font-bold text-gray-800">교육 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          시스템 사용자 및 운영자 교육 활동의 결과와 효과를 기록한 문서
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
          <strong>교육 결과서 (Education Result Document)</strong>는 정보시스템의 성공적인 도입 및 운영을 위해 수행된 사용자 및 운영자 교육 활동의 결과와 효과를 종합적으로 기록한 문서입니다. 이는 교육 목표 달성 여부, 교육생의 이해도 및 만족도, 그리고 교육 과정에서 도출된 개선 사항 등을 포함하여, 교육의 성과를 평가하고 향후 교육 계획 수립에 활용됩니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">교육 목표 달성 여부 평가</td>
                <td className="border border-gray-300 px-4 py-2">사전에 수립된 교육 계획서의 목표(예: 시스템 이해도 80% 이상)가 실제 교육을 통해 달성되었는지 객관적으로 평가합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">교육 효과 분석 및 개선</td>
                <td className="border border-gray-300 px-4 py-2">교육생의 피드백, 이해도 평가 결과 등을 분석하여 교육 과정의 강점과 약점을 파악하고, 향후 교육 프로그램 개선을 위한 기초 자료로 활용합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 운영 준비도 확인</td>
                <td className="border border-gray-300 px-4 py-2">교육을 통해 사용자와 운영자가 시스템을 효과적으로 활용할 준비가 되었는지 확인하고, 시스템의 성공적인 전환 및 안정적인 운영 가능성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 도입 후 사용자 및 운영자의 시스템 활용 능력 확보 여부, 교육 활동의 적정성 및 효과를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 교육 담당자, 프로젝트 관리자(PM), 또는 발주처의 교육 담당자가 공동으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 오픈 전 사용자 및 운영자 교육이 완료된 직후에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">추가 교육이 수행되거나, 교육 과정 및 내용에 대한 중대한 변경이 발생할 경우 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>교육 과정명 및 개요:</strong> 수행된 교육의 명칭, 목적, 대상, 기간 등 전반적인 개요.</li>
          <li><strong>교육 내용:</strong> 교육 프로그램의 상세 내용, 사용된 교재 및 자료.</li>
          <li><strong>교육 강사:</strong> 교육을 진행한 강사의 정보.</li>
          <li><strong>교육 결과:</strong>
            <ul className="list-circle list-inside ml-4 space-y-1">
              <li>참석률: 교육 대상 대비 실제 참석 인원 및 비율.</li>
              <li>만족도: 교육생 대상 설문조사 등을 통한 교육 만족도 평가 결과.</li>
              <li>이해도 평가: 교육 내용에 대한 교육생의 이해도 평가 결과 (예: 시험 점수).</li>
              <li>주요 피드백: 교육생으로부터 수렴된 의견 및 건의 사항.</li>
            </ul>
          </li>
          <li><strong>개선 및 후속 조치:</strong> 교육 결과 분석을 통한 개선 방안 및 향후 시스템 운영을 위한 후속 조치 계획.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 교육 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="교육 결과서" fileName="교육_결과서_예시" />
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

export default EducationResultDocument;

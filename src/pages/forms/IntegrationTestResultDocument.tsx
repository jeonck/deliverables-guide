import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const IntegrationTestResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '시험 개요',
      '내용': `
- 시험 대상 모듈 그룹: 사용자 관리 모듈, 게시판 모듈
- 시험 환경: 개발 서버 (OS: Linux, DB: MySQL 8.0)
- 시험 기간: 2023-10-26 ~ 2023-10-27
      `,
    },
    {
      '항목': '시험 시나리오 연계',
      '내용': `
- 실행된 통합 시험 시나리오 목록: ITS-001 (사용자 등록 및 로그인 연동), ITS-002 (게시글 작성 및 조회 연동)
- 관련 설계서: 인터페이스 설계서 (IDS-001), 프로세스 설계서 (PDS-001)
      `,
    },
    {
      '항목': '시험 실행 결과 (ITS-001)',
      '내용': `
- 실행 절차:
  1. 사용자 등록 API 호출 (ID: testuser, PW: password)
  2. 로그인 API 호출 (ID: testuser, PW: password)
  3. 인증 토큰 발급 확인
- 예상 결과: 사용자 등록 성공 후 로그인 성공, 유효한 인증 토큰 발급
- 실제 결과: 예상 결과와 동일
- 판정: 합격 (Pass)
      `,
    },
    {
      '항목': '시험 실행 결과 (ITS-002)',
      '내용': `
- 실행 절차:
  1. 로그인 API 호출 (ID: testuser, PW: password)
  2. 게시글 작성 API 호출 (제목: 통합 테스트, 내용: 내용입니다, 작성자: testuser)
  3. 게시글 조회 API 호출
- 예상 결과: 게시글 작성 성공 후 조회 시 작성된 게시글 확인
- 실제 결과: 예상 결과와 동일
- 판정: 합격 (Pass)
      `,
    },
    {
      '항목': '결함 및 조치 내역',
      '내용': `
- 결함 ID: DEF-001
- 결함 내용: 사용자 등록 시 비밀번호 암호화 오류
- 심각도: High
- 조치 내용: 비밀번호 암호화 로직 수정 및 재배포
- 재시험 결과: 합격 (Pass)
      `,
    },
    {
      '항목': '시험 요약 및 승인',
      '내용': `
- 총 시험 시나리오 수: 2
- 합격률: 100% (재시험 포함)
- 테스트 관리자: [서명]
- PL: [서명]
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
        <h1 className="text-4xl font-bold text-gray-800">통합 시험 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          단위 시험을 통과한 모듈들을 통합하여 연동 시험을 수행한 후, 그 과정과 결과를 기록한 문서
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
          <strong>통합 시험 결과서 (Integration Test Result Document)</strong>는 단위 시험을 통과한 개별 프로그램 또는 모듈들을 통합하여 통합 시험 시나리오에 따라 연동 시험을 수행한 후, 그 시험 과정, 관찰된 실제 결과, 그리고 합격/불합격 판정을 공식적으로 기록한 문서입니다. 이는 시스템 내부의 모듈 간 인터페이스 및 데이터 전달이 설계된 대로 정확히 동작했음을 증명하는 기록입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">모듈 연동 확인</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 모듈 간의 인터페이스 및 데이터 흐름이 인터페이스 설계서와 통합 시험 시나리오에 따라 오류 없이 작동했음을 입증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">결함 추적 및 관리</td>
                <td className="border border-gray-300 px-4 py-2">연동 과정에서 발생한 <strong>결함(Faults)</strong>을 식별하고, 해당 결함의 조치 내용 및 재시험 결과를 체계적으로 기록하여 결함 관리의 투명성을 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 시험의 전제 조건</td>
                <td className="border border-gray-300 px-4 py-2">통합 시험 결과서가 최종 승인되어야 시스템의 주요 구성 요소들이 시스템 시험 단계로 진입할 수 있는 품질 기준을 충족했음을 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시험 활동의 충실성, 모듈 간 인터페이스 구현의 정확성, 그리고 결함 조치 과정의 적절성을 평가하는 핵심 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 테스트 매니저, PL(Project Leader), 또는 통합 시험 담당자가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">통합 시험 시나리오를 실행한 직후에 발생하며, 발견된 모든 결함에 대한 조치가 완료된 후 최종적으로 확정됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">통합 시험 중 결함이 수정되어 <strong>재시험(Retest)</strong>을 수행했을 때, 해당 재시험 결과가 최신 내용으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용 (간략)</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>시험 개요:</strong> 시험 대상 모듈 그룹 또는 서브시스템 명칭, 시험 환경, 시험 기간.</li>
          <li><strong>시험 시나리오 연계:</strong> 실행된 통합 시험 시나리오 목록 및 관련 설계서 (인터페이스 설계서, 프로세스 설계서) 연계 정보.</li>
          <li><strong>시험 실행 결과:</strong>
            <ul className="list-circle list-inside ml-4 space-y-1">
              <li>실행 절차: 시나리오의 단계별 실행 순서 기록.</li>
              <li>예상 결과 vs. 실제 결과: 연동 결과로 기대했던 데이터 흐름/출력과 실제로 관찰된 결과 비교.</li>
              <li>판정: 각 시나리오별 합격 (Pass) 또는 불합격 (Fail) 판정.</li>
            </ul>
          </li>
          <li><strong>결함 및 조치 내역:</strong> 발견된 결함 ID, 결함 내용, 심각도, 조치 내용, 재시험 결과.</li>
          <li><strong>시험 요약 및 승인:</strong> 총 시험 시나리오 수, 합격률, 테스트 관리자 및 PL의 서명 (최종 승인).</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 통합 시험 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="통합 시험 결과서" fileName="통합_시험_결과서_예시" />
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
        <Link to="/implementation" className="text-blue-600 hover:underline">구현 페이지로 돌아가기</Link>
      </footer>
    </div>
  );
};

export default IntegrationTestResultDocument;

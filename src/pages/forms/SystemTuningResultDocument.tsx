import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const SystemTuningResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '튜닝 대상 시스템',
      '내용': '고객 관리 시스템 (CMS) - 웹 애플리케이션 서버 (WAS), 데이터베이스 (DB)',
    },
    {
      '항목': '튜닝 목표',
      '내용': '평균 응답 시간 3초 이내 유지, 동시 사용자 500명 처리 가능',
    },
    {
      '항목': '튜닝 범위',
      '내용': 'WAS 설정 (JVM Heap Size, Thread Pool), DB 쿼리 최적화, 인덱스 추가',
    },
    {
      '항목': '튜닝 전 성능 지표',
      '내용': `
- 평균 응답 시간: 5.2초
- 동시 사용자 300명 처리 시 오류 발생
      `,
    },
    {
      '항목': '튜닝 활동 내역',
      '내용': `
- **WAS 튜닝:**
  - JVM Heap Size 조정 (Xmx2g -> Xmx4g)
  - Thread Pool 설정 (min: 50, max: 200)
- **DB 튜닝:**
  - 비효율적인 SQL 쿼리 (예: 고객 정보 조회 쿼리) 인덱스 힌트 추가
  - 자주 조회되는 컬럼에 인덱스 생성 (예: customer_id, order_date)
      `,
    },
    {
      '항목': '튜닝 후 성능 지표',
      '내용': `
- 평균 응답 시간: 2.8초 (목표 달성)
- 동시 사용자 500명 처리 시 오류 없음 (목표 달성)
      `,
    },
    {
      '항목': '결론 및 권고 사항',
      '내용': '튜닝 목표 달성. 향후 시스템 부하 증가 시 주기적인 성능 모니터링 및 추가 튜닝 필요',
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
        <h1 className="text-4xl font-bold text-gray-800">시스템 튜닝 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          정보시스템의 성능을 최적화하기 위한 튜닝 활동의 결과 및 개선 효과를 기록한 문서
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
          <strong>시스템 튜닝 결과서 (System Tuning Result Document)</strong>는 정보시스템의 성능을 최적화하기 위해 수행된 다양한 튜닝 활동(예: 하드웨어/소프트웨어 설정 변경, 데이터베이스 쿼리 최적화, 코드 개선 등)의 결과와 그로 인한 성능 개선 효과를 상세하게 기록한 문서입니다. 이는 시스템의 효율성과 안정성을 확보하고, 비기능 요구사항 중 성능 관련 목표 달성 여부를 증명하는 데 사용됩니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">성능 목표 달성 증명</td>
                <td className="border border-gray-300 px-4 py-2">시스템의 응답 시간, 처리량, 동시 사용자 수 등 비기능 요구사항으로 정의된 성능 목표가 튜닝 활동을 통해 달성되었음을 객관적인 지표로 증명합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 효율성 및 안정성 확보</td>
                <td className="border border-gray-300 px-4 py-2">튜닝을 통해 시스템 자원(CPU, 메모리, 디스크 I/O)의 효율적 사용을 극대화하고, 과부하 상황에서도 안정적으로 서비스를 제공할 수 있는 기반을 마련합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">유지보수 및 운영 참고 자료</td>
                <td className="border border-gray-300 px-4 py-2">향후 시스템 운영 중 성능 문제가 발생했을 때, 과거 튜닝 이력과 결과가 문제 해결을 위한 중요한 참고 자료가 되며, 시스템 개선 방향을 제시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 성능 관련 비기능 요구사항 이행 여부, 튜닝 활동의 적정성 및 효과를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 성능 전문가, 기술 아키텍트(TA), 또는 DBA(데이터베이스 관리자)가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템의 주요 기능 구현 및 통합 테스트가 완료된 후, 성능 테스트를 수행하고 튜닝 활동이 이루어진 시점에 작성됩니다. (주로 구현 단계 후반 또는 테스트 단계 초반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템의 성능에 영향을 미치는 중대한 변경사항이 발생하여 추가 튜닝이 필요하거나, 정기적인 성능 점검 결과에 따라 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>튜닝 대상 시스템 및 범위:</strong> 튜닝이 수행된 시스템의 구성 요소(WAS, DB, 네트워크 등) 및 튜닝 활동의 범위.</li>
          <li><strong>튜닝 목표:</strong> 튜닝을 통해 달성하고자 했던 구체적인 성능 지표 (예: 응답 시간, 처리량, 자원 사용률).</li>
          <li><strong>튜닝 전 성능 지표:</strong> 튜닝 활동 시작 전 시스템의 성능 측정 결과.</li>
          <li><strong>튜닝 활동 내역:</strong> 수행된 모든 튜닝 작업의 상세 내용 (예: 설정 변경, 쿼리 수정, 인덱스 추가).</li>
          <li><strong>튜닝 후 성능 지표:</strong> 튜닝 활동 완료 후 재측정된 시스템의 성능 측정 결과 및 목표 달성 여부.</li>
          <li><strong>성능 개선 효과 분석:</strong> 튜닝 전후 성능 지표 비교를 통한 개선 효과 분석.</li>
          <li><strong>결론 및 권고 사항:</strong> 튜닝 결과에 대한 최종 결론, 향후 시스템 운영 및 유지보수를 위한 권고 사항.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 시스템 튜닝 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="시스템 튜닝 결과서" fileName="시스템_튜닝_결과서_예시" />
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

export default SystemTuningResultDocument;

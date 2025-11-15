import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const SystemArchitectureVerificationReport: React.FC = () => {
  const data = [
    {
      '항목': '프로젝트명',
      '내용': '차세대 고객 관리 시스템 구축 프로젝트',
    },
    {
      '항목': '작성일',
      '내용': '2023-11-25',
    },
    {
      '항목': '작성자',
      '내용': '김민준 (아키텍트)',
    },
    {
      '항목': '버전',
      '내용': '1.0',
    },
    {
      '항목': '개요',
      '내용': '본 문서는 차세대 고객 관리 시스템의 아키텍처 설계에 대한 검증 결과를 보고한다. 시스템 아키텍처가 요구사항을 충족하고, 성능, 확장성, 보안 등 비기능 요구사항을 만족하는지 평가하여 설계의 적정성을 확인한다.',
    },
    {
      '항목': '검증 대상 아키텍처',
      '내용': '3-Tier 아키텍처 (웹/WAS, DB 분리), MSA (Microservices Architecture) 기반',
    },
    {
      '항목': '검증 방법론',
      '내용': 'ATAM (Architecture Tradeoff Analysis Method), 시나리오 기반 평가, 전문가 리뷰',
    },
    {
      '항목': '주요 검증 결과',
      '내용': `
- **성능:** 동시 사용자 1,000명 처리 시 평균 응답 시간 2초 이내 (목표 3초 이내 달성)
- **확장성:** 마이크로서비스 단위의 독립적인 확장 가능성 확인
- **보안:** 각 계층별 보안 메커니즘 적용 및 취약점 분석 결과 반영 확인
- **가용성:** 이중화 구성 및 장애 복구 방안 적절성 확인
- **유지보수성:** 모듈 간 낮은 결합도, 높은 응집도 유지 확인
      `,
    },
    {
      '항목': '발견된 문제점 및 개선 권고 사항',
      '내용': `
- **문제점:** 특정 마이크로서비스 간 데이터 동기화 지연 가능성
- **개선 권고:** 비동기 메시징 큐 (Kafka) 도입을 통한 데이터 일관성 및 성능 확보
      `,
    },
    {
      '항목': '종합 평가',
      '내용': '시스템 아키텍처는 전반적으로 요구사항을 충족하며, 비기능 요구사항 달성 가능성이 높음. 발견된 문제점에 대한 개선 권고 사항을 반영하여 최종 아키텍처를 확정할 것을 제안.',
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
        <h1 className="text-4xl font-bold text-gray-800">시스템 아키텍처 검증결과 보고서</h1>
        <p className="text-lg text-gray-600 mt-4">
          시스템 아키텍처 설계의 적정성을 검증하고 평가한 결과를 기록한 문서
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
          <strong>시스템 아키텍처 검증결과 보고서 (System Architecture Verification Result Report)</strong>는 정보시스템의 아키텍처 설계가 프로젝트의 요구사항을 충족하고, 성능, 확장성, 보안, 가용성 등 핵심적인 비기능 요구사항을 만족하는지 체계적으로 검증하고 평가한 결과를 기록하는 문서입니다. 이 보고서는 설계된 아키텍처의 적정성을 확인하고, 잠재적인 문제점을 사전에 식별하여 시스템의 안정성과 품질을 확보하는 데 기여합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">아키텍처 적정성 확인</td>
                <td className="border border-gray-300 px-4 py-2">설계된 시스템 아키텍처가 기능 및 비기능 요구사항을 효과적으로 지원할 수 있는지 검증하여, 설계의 적정성과 타당성을 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">잠재적 위험 요소 식별</td>
                <td className="border border-gray-300 px-4 py-2">아키텍처 설계 단계에서 발생할 수 있는 성능 병목, 확장성 문제, 보안 취약점 등 잠재적인 위험 요소를 사전에 식별하고, 이에 대한 개선 방안을 제시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">이해관계자 간 합의 도출</td>
                <td className="border border-gray-300 px-4 py-2">아키텍처 검증 결과를 바탕으로 개발팀, 발주처, 감리원 등 모든 이해관계자 간에 아키텍처 설계에 대한 명확한 이해와 합의를 도출합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 아키텍처 설계의 품질과 적정성을 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 아키텍트, 또는 외부 전문 아키텍처 컨설팅 업체가 주도적으로 작성하며, <strong>발주처</strong>의 IT 아키텍처 담당자와 협의합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 아키텍처 설계가 완료된 후, 상세 설계 진행 이전에 검증 활동이 수행된 직후에 작성됩니다. (주로 설계 단계 중반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">아키텍처 설계에 중대한 변경이 발생하여 재검증이 필요하거나, 새로운 기술 도입 등으로 아키텍처가 수정될 경우 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>개요:</strong> 보고서의 목적, 검증 대상 아키텍처, 검증 기간 및 범위.</li>
          <li><strong>검증 방법론 및 도구:</strong> 사용된 아키텍처 검증 방법론 (예: ATAM, ADR), 평가 기준 및 도구.</li>
          <li><strong>아키텍처 개요:</strong> 검증 대상 아키텍처의 주요 구성 요소 및 구조에 대한 간략한 설명.</li>
          <li><strong>검증 시나리오 및 결과:</strong> 성능, 확장성, 보안, 가용성 등 비기능 요구사항별 검증 시나리오 및 각 시나리오에 대한 평가 결과.</li>
          <li><strong>발견된 문제점 및 개선 권고 사항:</strong> 아키텍처 설계에서 발견된 문제점, 잠재적 위험 요소 및 이에 대한 구체적인 개선 방안.</li>
          <li><strong>종합 평가 및 결론:</strong> 시스템 아키텍처의 전반적인 적정성, 요구사항 충족 여부, 비기능 요구사항 달성 가능성에 대한 종합적인 평가 및 최종 결론.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 시스템 아키텍처 검증결과 보고서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="시스템 아키텍처 검증결과 보고서" fileName="시스템_아키텍처_검증결과_보고서_예시" />
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
        <Link to="/requirements" className="text-blue-600 hover:underline">요구사항 페이지로 돌아가기</Link>
      </footer>
    </div>
  );
};

export default SystemArchitectureVerificationReport;

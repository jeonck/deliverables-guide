import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const ArchitectureComplianceReport: React.FC = () => {
  const data = [
    {
      '항목': '보고서 개요',
      '내용': '설계된 아키텍처 원칙 및 표준에 대한 구현 시스템의 준수 여부 평가 보고서',
    },
    {
      '항목': '평가 대상',
      '내용': '구현된 시스템의 주요 모듈, 컴포넌트, 코드 베이스',
    },
    {
      '항목': '평가 기준',
      '내용': `
- 아키텍처 설계서 (Architecture Design Document)
- 코딩 표준 (Coding Standards)
- 보안 가이드라인 (Security Guidelines)
- 성능 요구사항 (Performance Requirements)
      `,
    },
    {
      '항목': '평가 방법',
      '내용': `
- 코드 리뷰 (Code Review)
- 정적/동적 분석 도구 활용 (Static/Dynamic Analysis Tools)
- 인터뷰 (Interview)
- 문서 검토 (Document Review)
      `,
    },
    {
      '항목': '준수 현황 및 분석',
      '내용': `
- **준수 항목:**
  - 모듈 간 인터페이스 정의 준수: 모든 모듈이 정의된 API를 통해 통신
  - 데이터베이스 접근 계층 분리: DAO/Repository 패턴 적용
- **미준수 항목:**
  - 특정 비즈니스 로직의 UI 계층 포함: 설계상 비즈니스 계층에 있어야 할 로직이 UI 컨트롤러에 포함됨
  - 보안 취약점 (예: SQL Injection): 일부 쿼리에서 파라미터 바인딩 미적용
      `,
    },
    {
      '항목': '개선 권고 사항',
      '내용': `
- UI 계층의 비즈니스 로직 분리: 해당 로직을 서비스 계층으로 이동
- 보안 취약점 수정: 모든 DB 쿼리에 파라미터 바인딩 적용
- 아키텍처 준수 교육 강화
      `,
    },
    {
      '항목': '결론 및 승인',
      '내용': '아키텍처 준수율 85%, 주요 미준수 사항에 대한 개선 계획 수립 및 승인',
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
        <h1 className="text-4xl font-bold text-gray-800">아키텍처 준수 보고서</h1>
        <p className="text-lg text-gray-600 mt-4">
          설계된 아키텍처 원칙 및 표준에 대한 구현 시스템의 준수 여부를 평가하는 보고서
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
          <strong>아키텍처 준수 보고서 (Architecture Compliance Report)</strong>는 정보시스템 개발 프로젝트에서 설계 단계에서 수립된 아키텍처 원칙, 표준, 패턴 및 가이드라인이 구현 단계에서 개발된 시스템에 얼마나 충실하게 반영되고 준수되었는지를 평가하고 보고하는 문서입니다. 이는 설계와 구현 간의 정합성을 확인하고, 아키텍처적 결함이나 미준수 사항을 식별하여 개선 방안을 제시하는 데 목적이 있습니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">설계-구현 정합성 검증</td>
                <td className="border border-gray-300 px-4 py-2">설계된 아키텍처가 구현 단계에서 의도대로 반영되었는지, 그리고 아키텍처 원칙과 표준이 코드 레벨에서 준수되었는지 객관적으로 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">아키텍처적 결함 조기 식별</td>
                <td className="border border-gray-300 px-4 py-2">아키텍처 미준수로 인해 발생할 수 있는 성능 저하, 보안 취약점, 유지보수성 저해 등의 문제를 구현 단계에서 조기에 발견하고 개선할 수 있도록 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">품질 및 안정성 확보</td>
                <td className="border border-gray-300 px-4 py-2">아키텍처 준수 여부 검토를 통해 시스템의 구조적 품질과 안정성을 확보하고, 향후 발생할 수 있는 기술 부채를 최소화합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 아키텍처 품질, 설계 의도 반영 여부, 그리고 기술 표준 준수 여부를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 기술 아키텍트(TA), 품질 관리자(QA), 또는 외부 아키텍처 전문가가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">주요 모듈 또는 서브시스템의 구현이 완료되고 단위/통합 테스트가 진행되는 구현 단계 중반 또는 후반에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">아키텍처에 영향을 미치는 중대한 변경사항이 발생하거나, 정기적인 아키텍처 검토 주기에 따라 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>보고서 개요:</strong> 평가 목적, 대상 시스템 및 범위, 평가 기준 요약.</li>
          <li><strong>평가 대상 아키텍처 요소:</strong> 검토 대상이 되는 주요 아키텍처 구성 요소 (예: 계층 구조, 모듈, 인터페이스, 데이터 모델).</li>
          <li><strong>평가 기준 및 방법:</strong> 아키텍처 설계서, 코딩 표준, 보안 가이드라인 등 평가에 사용된 기준 문서 및 코드 리뷰, 정적 분석 등 평가 방법.</li>
          <li><strong>준수 현황 및 분석:</strong> 각 아키텍처 원칙/표준별 준수 여부, 준수율, 미준수 사항에 대한 상세 분석 및 영향도.</li>
          <li><strong>미준수 원인 분석:</strong> 미준수 사항이 발생한 근본 원인 (예: 개발자 이해 부족, 일정 압박, 설계 변경 누락).</li>
          <li><strong>개선 권고 사항:</strong> 미준수 사항에 대한 구체적인 개선 방안 및 우선순위.</li>
          <li><strong>결론 및 승인:</strong> 보고서의 최종 결론, 아키텍처 준수율 요약, 관련 이해관계자의 승인.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 아키텍처 준수 보고서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="아키텍처 준수 보고서" fileName="아키텍처_준수_보고서_예시" />
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

export default ArchitectureComplianceReport;

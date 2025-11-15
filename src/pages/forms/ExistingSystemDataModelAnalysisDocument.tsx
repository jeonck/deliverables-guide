import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const ExistingSystemDataModelAnalysisDocument: React.FC = () => {
  const data = [
    {
      '항목': '프로젝트명',
      '내용': '차세대 고객 관리 시스템 구축 프로젝트',
    },
    {
      '항목': '작성일',
      '내용': '2023-12-01',
    },
    {
      '항목': '작성자',
      '내용': '박지영 (데이터 아키텍트)',
    },
    {
      '항목': '버전',
      '내용': '1.0',
    },
    {
      '항목': '개요',
      '내용': '본 문서는 기존 고객 관리 시스템의 데이터 모형을 분석하고, 신규 시스템으로의 데이터 전환 및 통합을 위한 기초 자료를 제공한다. 기존 데이터 구조의 이해를 통해 신규 시스템의 데이터 모델링 방향을 수립한다.',
    },
    {
      '항목': '분석 대상 시스템',
      '내용': 'Legacy 고객 관리 시스템 (Oracle 11g 기반)',
    },
    {
      '항목': '주요 엔티티 분석',
      '내용': `
- **고객 (CUSTOMER):**
  - 주요 속성: 고객ID, 고객명, 생년월일, 성별, 연락처, 주소, 가입일
  - 관계: 주문(ORDER)과 1:N 관계
- **주문 (ORDER):**
  - 주요 속성: 주문ID, 고객ID, 주문일시, 총금액, 결제수단, 주문상태
  - 관계: 고객(CUSTOMER)과 N:1 관계, 주문상품(ORDER_ITEM)과 1:N 관계
- **상품 (PRODUCT):**
  - 주요 속성: 상품ID, 상품명, 가격, 재고수량, 카테고리
  - 관계: 주문상품(ORDER_ITEM)과 N:1 관계
      `,
    },
    {
      '항목': '데이터 관계 분석',
      '내용': `
- 고객은 여러 개의 주문을 가질 수 있으며, 주문은 반드시 한 명의 고객에게 속한다.
- 하나의 주문은 여러 개의 주문 상품을 포함할 수 있으며, 주문 상품은 하나의 주문에 속한다.
- 하나의 상품은 여러 주문 상품에 포함될 수 있다.
      `,
    },
    {
      '항목': '데이터 품질 분석',
      '내용': `
- **고객명:** 일부 NULL 값 존재, 한글/영문 혼용
- **연락처:** 형식 불일치 데이터 다수 (하이픈 누락, 자릿수 오류)
- **주소:** 비정형 데이터, 도로명 주소/지번 주소 혼용
- **주문상태:** 정의되지 않은 코드 값 존재
      `,
    },
    {
      '항목': '신규 시스템 데이터 모델링 시 고려사항',
      '내용': `
- 기존 시스템의 비정형 데이터를 정형화하여 데이터 품질 확보
- 고객 통합 관리를 위한 마스터 데이터 관리(MDM) 전략 수립
- 주문 이력 데이터의 효율적인 관리 방안 마련
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
        <h1 className="text-4xl font-bold text-gray-800">기존 시스템 데이터 모형 분석서</h1>
        <p className="text-lg text-gray-600 mt-4">
          기존 시스템의 데이터 구조 및 관계를 분석한 문서
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
          <strong>기존 시스템 데이터 모형 분석서 (Existing System Data Model Analysis Document)</strong>는 신규 정보시스템 구축 프로젝트에서 기존에 운영 중인 시스템의 데이터 구조, 엔티티 간 관계, 데이터 속성 등을 상세하게 분석하고 문서화한 자료입니다. 이 문서는 기존 시스템의 데이터 현황을 정확히 파악하여, 신규 시스템의 데이터 모델링 방향을 수립하고 데이터 전환 전략을 수립하는 데 필수적인 기초 자료로 활용됩니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">기존 데이터 현황 파악</td>
                <td className="border border-gray-300 px-4 py-2">기존 시스템의 데이터 구조, 엔티티, 속성, 관계 등을 상세하게 분석하여 현재 운영 중인 데이터의 현황을 정확히 파악합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">신규 데이터 모델링 기반 제공</td>
                <td className="border border-gray-300 px-4 py-2">기존 데이터 모델의 장단점을 분석하고, 신규 시스템의 요구사항을 반영한 최적의 데이터 모델을 설계하기 위한 기초 자료를 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 전환 전략 수립 지원</td>
                <td className="border border-gray-300 px-4 py-2">기존 데이터와 신규 데이터 모델 간의 매핑 관계를 정의하고, 데이터 전환 시 발생할 수 있는 문제점을 예측하여 효율적인 전환 전략 수립을 지원합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 기존 시스템의 데이터 현황 분석이 적절하게 수행되었는지, 그리고 이를 기반으로 신규 시스템의 데이터 모델링이 타당하게 진행되었는지를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 아키텍트(DA), 데이터 분석가, 또는 시스템 분석가(SA)가 주도적으로 작성하며, <strong>발주처</strong>의 데이터 관리 담당자와 협의합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구사항 분석 단계에서 기존 시스템의 데이터 현황 파악 및 신규 시스템의 데이터 요구사항 정의가 완료된 시점에 작성됩니다. (주로 요구사항 단계 후반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">신규 시스템의 데이터 모델링 변경, 데이터 전환 전략 수정 등 기존 데이터 모형 분석 결과에 영향을 미치는 변경이 발생할 경우 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>개요:</strong> 문서의 목적, 범위, 분석 대상 기존 시스템에 대한 간략한 설명.</li>
          <li><strong>기존 시스템 데이터 모델 개요:</strong> 기존 시스템의 전체적인 데이터 구조 및 주요 엔티티 간 관계.</li>
          <li><strong>주요 엔티티 상세 분석:</strong> 기존 시스템의 핵심 엔티티(테이블)별 속성(컬럼), 데이터 타입, 제약조건, 인덱스 정보.</li>
          <li><strong>데이터 관계 분석:</strong> 엔티티 간의 관계(1:1, 1:N, N:M) 및 관계의 의미.</li>
          <li><strong>데이터 품질 분석:</strong> 기존 데이터의 정합성, 완전성, 유일성, 유효성 등 데이터 품질 현황 및 문제점.</li>
          <li><strong>데이터 흐름 분석:</strong> 기존 시스템 내에서 데이터가 생성, 변경, 삭제되는 흐름.</li>
          <li><strong>신규 시스템 데이터 모델링 시 고려사항:</strong> 기존 데이터 모델 분석 결과를 바탕으로 신규 시스템 데이터 모델링 시 반영해야 할 사항.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 기존 시스템 데이터 모형 분석서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="기존 시스템 데이터 모형 분석서" fileName="기존_시스템_데이터_모형_분석서_예시" />
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

export default ExistingSystemDataModelAnalysisDocument;

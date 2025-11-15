import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const EntityRelationshipModelSpecification: React.FC = () => {
  const data = [
    {
      '항목': '엔티티 목록 및 정의',
      '내용': `
- 엔티티명: 고객 (Customer)
  - 논리명: 고객
  - 물리명: TB_CUST
  - 정의: 서비스를 이용하는 개인 또는 법인
- 엔티티명: 주문 (Order)
  - 논리명: 주문
  - 물리명: TB_ORDER
  - 정의: 고객이 상품을 구매하는 행위 또는 그 내역
      `,
    },
    {
      '항목': '엔티티 관계도 (ERD)',
      '내용': `
[ERD 다이어그램 이미지 또는 텍스트 기반 표현]
예시:
+-----------------+       +-----------------+
|     고객 (TB_CUST)    |-------<| 주문 (TB_ORDER) |
|-----------------| 1:N   |-----------------|
| *고객ID (PK)     |       | *주문ID (PK)     |
|  고객명          |       |  고객ID (FK)     |
|  연락처          |       |  주문일자        |
+-----------------+       +-----------------+
      `,
    },
    {
      '항목': '속성 정의 (고객 엔티티)',
      '내용': `
- 속성명: 고객ID
  - 논리명: 고객 식별자
  - 데이터 타입: VARCHAR(20)
  - 필수 여부: 필수 (PK)
- 속성명: 고객명
  - 논리명: 고객 이름
  - 데이터 타입: VARCHAR(50)
  - 필수 여부: 필수
- 속성명: 연락처
  - 논리명: 고객 연락처
  - 데이터 타입: VARCHAR(15)
  - 필수 여부: 선택
      `,
    },
    {
      '항목': '관계 정의 (고객-주문 관계)',
      '내용': `
- 관계명: 고객_주문
- 참여 엔티티: 고객 (부모), 주문 (자식)
- 관계 차수: 1:N (한 명의 고객은 여러 개의 주문을 할 수 있다)
- 관계 유형: 식별 관계 (주문 엔티티의 PK에 고객ID가 포함됨)
- 필수/선택: 고객은 주문을 할 수도 있고 안 할 수도 있음 (선택), 주문은 반드시 고객에 의해 발생 (필수)
      `,
    },
    {
      '항목': '모델링 원칙',
      '내용': `
- 엔티티명은 업무 용어를 사용하고, 물리명은 TB_ 접두사 사용.
- 주식별자는 'ID' 접미사 사용.
- 모든 엔티티는 최소 하나의 속성을 가져야 함.
- 관계는 최대한 명확하게 정의하며, 불필요한 다대다(N:M) 관계는 해소.
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
        <h1 className="text-4xl font-bold text-gray-800">엔티티-관계 모델 기술서</h1>
        <p className="text-lg text-gray-600 mt-4">
          구축될 정보시스템의 데이터 구조를 논리적 관점에서 표현하는 문서
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
          <strong>엔티티-관계 모델 기술서 (Entity-Relationship Model Specification)</strong>는 구축될 정보시스템의 데이터 구조를 논리적 관점에서 표현하는 문서입니다. 이는 시스템에서 관리되어야 할 <strong>주요 엔티티(Entity)</strong>들을 식별하고, 각 엔티티의 <strong>속성(Attribute)</strong>을 정의하며, 엔티티들 간의 <strong>관계를 명확한 표기법(예: IE 표기법, Crow's Foot)</strong>을 사용하여 도식화하고 상세하게 기술합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 구조의 논리적 명확화</td>
                <td className="border border-gray-300 px-4 py-2">업무 요구사항을 반영하여 데이터가 <strong>어떤 구성 요소(엔티티)와 연결(관계)</strong>되어야 하는지 논리적으로 정의하여, 데이터 구조에 대한 이해관계자 간의 공통된 이해를 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 무결성 설계의 기반</td>
                <td className="border border-gray-300 px-4 py-2">엔티티 간의 관계 유형 (1:1, 1:N, N:M), 필수/선택 여부, 그리고 식별 관계/비식별 관계 등을 정의하여, 데이터 무결성을 위한 기본적인 논리적 제약조건을 마련합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">물리적 DB 설계의 기준</td>
                <td className="border border-gray-300 px-4 py-2">논리적으로 확정된 엔티티-관계 모델을 기반으로 테이블, 컬럼, 제약조건 등 물리 데이터베이스 설계를 수행하는 가장 중요한 선행 기준으로 사용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 모델링의 적정성, 업무 요구사항 반영 충실도, 데이터 모델링 원칙 준수 여부를 평가하는 핵심 설계 기준 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 아키텍트 (DA) 또는 데이터 모델러가 주도적으로 작성하며, 시스템 분석가(SA) 및 발주처의 업무 전문가와 협의하여 모델의 적정성을 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계에서 <strong>현행 업무 분석(As-Is)</strong>이 완료된 직후, 시스템 설계 단계 초기에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">업무 요구사항 변경이나 시스템 범위 변경 등으로 인해 엔티티, 속성, 관계에 수정이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>엔티티 목록 및 정의:</strong> 시스템에 필요한 모든 엔티티 목록, 논리적 이름, 물리적 이름, 엔티티의 역할 및 정의.</li>
          <li><strong>엔티티 관계도 (ERD):</strong> 식별된 엔티티와 그들 간의 관계를 논리적 표기법을 사용하여 시각적으로 표현한 다이어그램.</li>
          <li><strong>속성 정의:</strong> 각 엔티티가 갖는 속성 목록, 논리적 이름, 데이터 타입, 필수/선택 여부, 주식별자(Primary Key) 지정.</li>
          <li><strong>관계 정의:</strong> 각 관계에 대한 참여 엔티티, 관계 명칭, 관계 차수(Cardinality, 예: 1:N), 관계 유형(식별/비식별) 등 상세 명세.</li>
          <li><strong>모델링 원칙:</strong> 모델링 시 적용된 데이터 모델링 표준 및 규칙 요약.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 엔티티-관계 모델 기술서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="엔티티-관계 모델 기술서" fileName="엔티티-관계_모델_기술서_예시" />
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
        <Link to="/design" className="text-blue-600 hover:underline">설계 페이지로 돌아가기</Link>
      </footer>
    </div>
  );
};

export default EntityRelationshipModelSpecification;

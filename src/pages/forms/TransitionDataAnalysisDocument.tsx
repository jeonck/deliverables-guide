import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const TransitionDataAnalysisDocument: React.FC = () => {
  const data = [
    {
      '항목': '프로젝트명',
      '내용': '차세대 고객 관리 시스템 구축 프로젝트',
    },
    {
      '항목': '작성일',
      '내용': '2023-12-10',
    },
    {
      '항목': '작성자',
      '내용': '이준호 (데이터 분석가)',
    },
    {
      '항목': '버전',
      '내용': '1.0',
    },
    {
      '항목': '개요',
      '내용': '본 문서는 기존 시스템에서 신규 시스템으로 전환될 데이터를 분석하고, 데이터 전환의 범위, 대상, 방법, 정제 및 변환 규칙 등을 정의하여 효율적이고 안정적인 데이터 전환을 위한 기초 자료를 제공한다.',
    },
    {
      '항목': '전환 대상 시스템',
      '내용': '기존 고객 관리 시스템 -> 차세대 고객 관리 시스템',
    },
    {
      '항목': '주요 전환 데이터',
      '내용': `
- **고객 정보:** 고객ID, 고객명, 생년월일, 성별, 연락처, 주소, 가입일
- **주문 정보:** 주문ID, 고객ID, 주문일시, 총금액, 결제수단, 주문상태
- **상품 정보:** 상품ID, 상품명, 가격, 재고수량, 카테고리
      `,
    },
    {
      '항목': '데이터 정제 및 변환 규칙',
      '내용': `
- **고객명:** NULL 값은 '미상'으로 처리, 특수문자 제거
- **연락처:** '010-xxxx-xxxx' 형식으로 통일, 유효하지 않은 번호는 NULL 처리
- **주소:** 도로명 주소 API를 활용하여 표준화된 주소로 변환
- **주문상태:** 기존 코드 값과 신규 시스템 코드 값 매핑 (예: '10'->'접수', '20'->'처리중')
      `,
    },
    {
      '항목': '데이터 매핑 정보',
      '내용': `
| 기존 시스템 테이블.컬럼 | 신규 시스템 테이블.컬럼 | 변환 규칙 | 비고 |
|---|---|---|---|
| OLD_CUSTOMER.CUST_ID | NEW_CUSTOMER.CUSTOMER_ID | AS-IS | PK |
| OLD_CUSTOMER.CUST_NM | NEW_CUSTOMER.CUSTOMER_NAME | NULL -> '미상' | |
| OLD_ORDER.ORDER_DT | NEW_ORDER.ORDER_DATE | YYYYMMDD -> YYYY-MM-DD | |
      `,
    },
    {
      '항목': '전환 시 고려사항',
      '내용': '데이터 정합성 유지, 전환 시간 최소화, 오류 발생 시 롤백 방안 마련, 전환 후 데이터 검증 계획 수립',
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
        <h1 className="text-4xl font-bold text-gray-800">전환데이터 분석서</h1>
        <p className="text-lg text-gray-600 mt-4">
          기존 시스템에서 신규 시스템으로 전환될 데이터를 분석한 문서
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
          <strong>전환데이터 분석서 (Transition Data Analysis Document)</strong>는 기존 정보시스템에서 신규 정보시스템으로 데이터를 이관(전환)하기 위해, 전환 대상 데이터의 현황을 분석하고 전환 전략 및 상세 계획을 수립하는 데 필요한 모든 정보를 담는 문서입니다. 이 문서는 데이터 전환의 범위, 대상, 방법, 정제 및 변환 규칙, 매핑 정보 등을 명확히 정의하여 데이터 유실 및 오류를 최소화하고 안정적인 시스템 전환을 지원합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 전환 전략 수립</td>
                <td className="border border-gray-300 px-4 py-2">기존 시스템의 데이터를 신규 시스템으로 안전하고 효율적으로 이관하기 위한 전반적인 전략과 방향을 수립합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 정제 및 변환 규칙 정의</td>
                <td className="border border-gray-300 px-4 py-2">기존 데이터의 품질을 개선하고 신규 시스템의 데이터 모델에 맞게 데이터를 정제하고 변환하는 상세 규칙을 정의하여 데이터의 일관성과 정확성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 매핑 정보 제공</td>
                <td className="border border-gray-300 px-4 py-2">기존 시스템의 테이블 및 컬럼과 신규 시스템의 테이블 및 컬럼 간의 매핑 관계를 명확히 하여 데이터 전환 프로그램 개발의 기초 자료로 활용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 전환 계획의 적정성, 데이터 정합성 확보 방안 등을 평가하는 중요한 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 분석가, 데이터 아키텍트(DA), 또는 데이터 전환 담당자가 주도적으로 작성하며, <strong>발주처</strong>의 데이터 관리 담당자와 협의합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구사항 분석 단계에서 기존 시스템 데이터 분석 및 신규 시스템 데이터 모델링이 진행된 후, 데이터 전환 계획 수립 이전에 작성됩니다. (주로 요구사항 단계 후반 또는 설계 단계 초반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터 전환 범위, 대상, 규칙 등에 중대한 변경이 발생하거나, 데이터 전환 테스트 결과에 따라 계획 수정이 필요할 경우 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>개요:</strong> 문서의 목적, 범위, 데이터 전환의 중요성.</li>
          <li><strong>전환 대상 데이터 정의:</strong> 기존 시스템의 어떤 데이터가 신규 시스템으로 전환될 것인지 상세하게 정의.</li>
          <li><strong>데이터 정제 및 변환 규칙:</strong> 기존 데이터의 오류를 수정하고, 신규 시스템의 데이터 형식에 맞게 변환하는 상세 규칙.</li>
          <li><strong>데이터 매핑 정보:</strong> 기존 시스템의 테이블/컬럼과 신규 시스템의 테이블/컬럼 간의 1:1 또는 1:N 매핑 관계.</li>
          <li><strong>데이터 전환 방법론 및 절차:</strong> 데이터 전환을 수행할 방법론(예: ETL) 및 상세 절차.</li>
          <li><strong>데이터 전환 시 고려사항 및 제약사항:</strong> 데이터 정합성, 성능, 보안 등 데이터 전환 시 발생할 수 있는 문제점 및 해결 방안.</li>
          <li><strong>데이터 검증 계획:</strong> 전환된 데이터의 정확성 및 완전성을 확인하기 위한 검증 계획.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 전환데이터 분석서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="전환데이터 분석서" fileName="전환데이터_분석서_예시" />
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

export default TransitionDataAnalysisDocument;

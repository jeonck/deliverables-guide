import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const DataMigrationAndInitialDataDesignDocument: React.FC = () => {
  const data = [
    {
      '항목': '전환 및 구축 범위',
      '내용': `
- 이관 대상 기존 데이터: 고객 정보 (고객ID, 이름, 연락처), 상품 정보 (상품코드, 상품명, 가격)
- 새롭게 구축할 초기 기준 데이터: 공통 코드 (지역 코드, 결제 방식 코드), 사용자 권한 정보 (관리자, 일반 사용자)
      `,
    },
    {
      '항목': '데이터 매핑 및 변환 설계',
      '내용': `
- 기존 테이블: OLD_CUSTOMER (CUST_ID, CUST_NM, CUST_TEL)
- 신규 테이블: NEW_CUSTOMER (customer_id, customer_name, phone_number)
- 매핑 규칙: OLD_CUSTOMER.CUST_ID -> NEW_CUSTOMER.customer_id (1:1)
- 변환 로직: OLD_CUSTOMER.CUST_TEL의 '-' 제거 후 NEW_CUSTOMER.phone_number에 저장
      `,
    },
    {
      '항목': '데이터 정제 및 보정 방안',
      '내용': `
- 오류 데이터: CUST_TEL이 10자리 미만이거나 숫자가 아닌 경우 '오류'로 분류, 수동 보정 후 재처리
- 누락 데이터: CUST_NM이 NULL인 경우 '미상'으로 대체
- 중복 데이터: CUST_ID 기준으로 중복 제거 (최신 데이터 유지)
      `,
    },
    {
      '항목': '초기 데이터 구축 방안',
      '내용': `
- 공통 코드: 지역 코드 (01: 서울, 02: 경기), 결제 방식 (01: 카드, 02: 현금) 수동 입력
- 사용자 권한: 초기 관리자 계정 (admin/admin123!) 생성, 일반 사용자 계정은 회원가입 시 자동 생성
- 시스템 환경 설정: 시스템 설정값 (예: 페이지당 게시물 수) 수동 입력
      `,
    },
    {
      '항목': '전환 작업 절차 및 일정',
      '내용': `
- 1단계 (데이터 추출): 2023-11-01, 기존 DB에서 데이터 추출 (담당: DBA)
- 2단계 (데이터 변환 및 정제): 2023-11-02 ~ 2023-11-03, 변환 프로그램 실행 및 정제 (담당: 개발팀)
- 3단계 (데이터 적재): 2023-11-04, 신규 DB에 데이터 적재 (담당: DBA)
- 4단계 (초기 데이터 구축): 2023-11-05, 기준 정보 및 공통 코드 입력 (담당: 운영팀)
      `,
    },
    {
      '항목': '전환 검증 및 합격 기준',
      '내용': `
- 검증 방법:
  1. 데이터 건수 비교: 기존 DB와 신규 DB의 테이블별 레코드 수 일치 여부 확인
  2. 샘플 데이터 검증: 주요 테이블에서 무작위 100건 추출하여 데이터 내용 일치 여부 수동 확인
  3. 기능 테스트 연계: 전환된 데이터를 활용한 주요 기능 테스트 수행
- 합격 기준: 데이터 건수 100% 일치, 샘플 데이터 100% 일치, 기능 테스트 100% 통과
      `,
    },
    {
      '항목': '비상 복구 계획',
      '내용': `
- 데이터 전환 실패 시:
  1. 기존 DB 백업본으로 롤백 (담당: DBA, 소요 시간: 2시간)
  2. 신규 DB 데이터 삭제 후 재시도 (담당: DBA, 개발팀)
- 책임자: 데이터 전환 총괄 책임자 (PL)
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
        <h1 className="text-4xl font-bold text-gray-800">데이터 전환 및 초기 데이터 설계서</h1>
        <p className="text-lg text-gray-600 mt-4">
          기존 데이터를 새로운 시스템으로 이관하고 초기 데이터를 구축하는 방안을 정의한 문서
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
          <strong>데이터 전환 및 초기 데이터 설계서 (Data Migration and Initial Data Design Document)</strong>는 신규 정보시스템을 운영하기 위해 기존 시스템의 데이터를 새로운 구조로 <strong>이관(Migration)</strong>하고 <strong>정제(Cleansing)</strong>하는 절차와 더불어, 시스템 운영에 필수적인 초기 기준 정보 및 공통 코드를 새롭게 구축하는 방안을 총체적으로 정의한 문서입니다. 이는 시스템 운영의 연속성과 데이터 무결성을 보장하는 핵심 설계 산출물입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 무결성 및 연속성 확보</td>
                <td className="border border-gray-300 px-4 py-2">기존 데이터의 오류를 정제하고, 새로운 데이터 모델에 맞춰 정확하게 변환하며, 전환 중 데이터 손실을 방지하여 시스템 운영의 연속성을 보장합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">초기 운영 환경 준비</td>
                <td className="border border-gray-300 px-4 py-2">시스템 가동을 위해 필요한 최소한의 기준 데이터 (코드, 사용자, 환경 설정 등)를 누락 없이 확보하고 구축하는 방안을 제시하여, 안정적인 시스템 오픈을 지원합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">변환 로직의 기준 제시</td>
                <td className="border border-gray-300 px-4 py-2">기존 데이터와 신규 데이터 간의 매핑(Mapping) 규칙, 변환 로직, 정제 기준을 명확히 정의하여, 데이터 전환 프로그램 구현의 명확한 기준으로 사용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 이관 및 정제 전략의 적절성, 데이터 품질 확보 방안의 타당성, 그리고 초기 데이터 구축의 완전성을 평가하는 핵심 기준 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 아키텍트 (DA), DBA, 및 <strong>시스템 분석가(SA)</strong>가 주도적으로 작성하며, 발주처의 현업 데이터 전문가와 협의합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터베이스 상세 설계가 완료되어 테이블 구조가 확정되고, 초기 데이터 구축 범위가 식별된 상세 설계 단계 후반에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터 정제 및 이관 시험 결과에 따라 변환 로직이 수정되거나, 초기 데이터 구축 범위에 변경이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용 (간략)</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>전환 및 구축 범위:</strong> 이관 대상 기존 데이터와 새롭게 구축할 초기 기준 데이터의 목록.</li>
          <li><strong>데이터 매핑 및 변환 설계:</strong> 기존 테이블/컬럼과 신규 테이블/컬럼 간의 1:1 매핑 정보, 데이터 변환 로직(수식/규칙) 상세 정의.</li>
          <li><strong>데이터 정제 및 보정 방안:</strong> 오류, 누락, 중복 데이터 등을 처리하는 정제 기준 및 절차 명세.</li>
          <li><strong>초기 데이터 구축 방안:</strong> 코드, 사용자 권한, 시스템 환경 설정 등 초기 운영에 필요한 데이터의 생성 방법 및 관리 주체.</li>
          <li><strong>전환 작업 절차 및 일정:</strong> <strong>데이터 추출, 변환, 적재(ETL)</strong>의 단계별 상세 작업 순서, 담당자, 소요 시간.</li>
          <li><strong>전환 검증 및 합격 기준:</strong> 전환된 데이터의 정확성, 무결성을 확인하는 검증 방법 및 공식적인 합격 기준.</li>
          <li><strong>비상 복구 계획:</strong> 데이터 전환 실패 시 복구(Rollback) 방안, 책임자, 복구 소요 시간 등 비상 대응 절차.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 데이터 전환 및 초기 데이터 설계서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="데이터 전환 및 초기 데이터 설계서" fileName="데이터_전환_및_초기_데이터_설계서_예시" />
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

export default DataMigrationAndInitialDataDesignDocument;

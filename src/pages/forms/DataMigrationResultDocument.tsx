import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const DataMigrationResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '전환 대상 시스템',
      '내용': '기존 고객 관리 시스템 (Legacy CMS) -> 신규 고객 관리 시스템 (New CMS)',
    },
    {
      '항목': '전환 대상 데이터',
      '내용': '고객 정보 (Customer), 상품 정보 (Product), 주문 정보 (Order)',
    },
    {
      '항목': '전환 기간',
      '내용': '2023-12-01 ~ 2023-12-05',
    },
    {
      '항목': '전환 전 데이터 현황',
      '내용': `
- Legacy CMS 고객 정보: 100,000건
- Legacy CMS 상품 정보: 5,000건
- Legacy CMS 주문 정보: 500,000건
      `,
    },
    {
      '항목': '전환 활동 내역',
      '내용': `
- **데이터 추출:** Legacy CMS에서 고객, 상품, 주문 데이터 추출 (CSV 형식)
- **데이터 변환:** 추출된 데이터를 New CMS 형식에 맞게 변환 (ETL 툴 사용)
  - 고객명 필드 길이 조정, 주문일자 형식 변경 등
- **데이터 적재:** 변환된 데이터를 New CMS 데이터베이스에 적재
- **데이터 검증:** 전환된 데이터의 정합성 및 완전성 검증 (샘플링 검증, 전체 건수 비교)
      `,
    },
    {
      '항목': '전환 후 데이터 현황 및 검증 결과',
      '내용': `
- New CMS 고객 정보: 100,000건 (정합성 100% 확인)
- New CMS 상품 정보: 5,000건 (정합성 100% 확인)
- New CMS 주문 정보: 500,000건 (정합성 99.9% 확인, 오류 데이터 10건 수기 처리)
      `,
    },
    {
      '항목': '결론 및 권고 사항',
      '내용': '데이터 전환 목표 달성. 잔여 오류 데이터 처리 후 최종 검증 필요. 향후 데이터 정합성 유지를 위한 주기적인 모니터링 시스템 구축 권고.',
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
        <h1 className="text-4xl font-bold text-gray-800">데이터 전환 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          기존 시스템의 데이터를 신규 시스템으로 전환한 결과 및 검증 내용을 기록한 문서
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
          <strong>데이터 전환 결과서 (Data Migration Result Document)</strong>는 기존 정보시스템의 데이터를 신규 정보시스템으로 이관하는 데이터 전환(Migration) 활동의 최종 결과와 그에 대한 검증 내용을 상세하게 기록한 문서입니다. 이는 전환된 데이터의 정합성, 완전성, 그리고 신규 시스템에서의 활용 가능성을 확인하고, 데이터 전환 과정에서 발생한 문제점 및 해결 방안을 명시하여 데이터 품질을 보증합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 전환 성공 증명</td>
                <td className="border border-gray-300 px-4 py-2">기존 시스템의 데이터가 신규 시스템으로 성공적으로 이관되었음을 객관적인 데이터와 검증 결과로 증명합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 품질 및 정합성 확보</td>
                <td className="border border-gray-300 px-4 py-2">전환된 데이터의 무결성, 정확성, 완전성 등을 검증하여 데이터 품질을 확보하고, 신규 시스템 운영의 안정성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">문제점 및 해결 방안 기록</td>
                <td className="border border-gray-300 px-4 py-2">데이터 전환 과정에서 발생한 데이터 오류, 누락, 변환 실패 등의 문제점을 기록하고, 이에 대한 조치 내역 및 해결 방안을 명시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 전환 계획의 이행 여부, 데이터 품질 확보 수준, 그리고 신규 시스템의 데이터 준비 상태를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 전환 담당자, DBA, 또는 프로젝트 관리자(PM)가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터 전환 활동이 완료되고, 전환된 데이터에 대한 검증이 완료된 직후에 작성됩니다. (주로 전환 단계)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터 전환 과정에서 발견된 오류 데이터에 대한 추가 조치나, 데이터 정합성 검증 결과에 중대한 변경이 발생할 경우 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>전환 대상 시스템 및 데이터:</strong> 데이터 전환이 수행된 기존 및 신규 시스템, 그리고 전환 대상 데이터 항목.</li>
          <li><strong>전환 기간 및 담당자:</strong> 데이터 전환 활동이 진행된 기간 및 관련 담당자.</li>
          <li><strong>전환 전 데이터 현황:</strong> 데이터 전환 시작 전 기존 시스템의 데이터 상태 및 수량.</li>
          <li><strong>전환 활동 내역:</strong> 데이터 추출, 변환, 적재 등 수행된 모든 전환 활동의 상세 내용.</li>
          <li><strong>전환 후 데이터 현황 및 검증 결과:</strong> 전환 완료 후 신규 시스템의 데이터 수량, 정합성 검증 결과 및 오류 데이터 현황.</li>
          <li><strong>데이터 관련 문제점 및 조치 내역:</strong> 전환 과정에서 발생한 데이터 문제점(오류, 누락 등) 및 이에 대한 조치 내역.</li>
          <li><strong>결론 및 권고 사항:</strong> 데이터 전환 목표 달성 여부, 향후 데이터 관리 및 운영을 위한 권고 사항.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 데이터 전환 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="데이터 전환 결과서" fileName="데이터_전환_결과서_예시" />
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

export default DataMigrationResultDocument;

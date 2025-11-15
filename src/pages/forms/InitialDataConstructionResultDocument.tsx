import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const InitialDataConstructionResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '구축 대상 데이터',
      '내용': '고객 정보 (Customer), 상품 정보 (Product), 주문 정보 (Order)',
    },
    {
      '항목': '구축 범위',
      '내용': '기존 시스템 데이터 이관, 수기 데이터 입력, 외부 데이터 연동',
    },
    {
      '항목': '구축 기간',
      '내용': '2023-11-01 ~ 2023-11-15',
    },
    {
      '항목': '구축 전 데이터 현황',
      '내용': `
- 고객 정보: 100,000건 (기존 시스템)
- 상품 정보: 5,000건 (수기 입력)
- 주문 정보: 500,000건 (기존 시스템)
      `,
    },
    {
      '항목': '구축 활동 내역',
      '내용': `
- **기존 시스템 데이터 이관:**
  - 고객 정보: ETL 툴을 이용한 데이터 추출, 변환, 적재 (100% 이관 완료)
  - 주문 정보: 배치 프로그램을 통한 데이터 이관 (99.8% 이관 완료, 0.2% 오류 데이터 수기 처리)
- **수기 데이터 입력:**
  - 상품 정보: 신규 상품 5,000건 수기 입력 및 검증 완료
- **외부 데이터 연동:**
  - 제휴사 상품 정보 1,000건 연동 및 정합성 검증 완료
      `,
    },
    {
      '항목': '구축 후 데이터 현황 및 검증 결과',
      '내용': `
- 고객 정보: 100,000건 (정합성 100% 확인)
- 상품 정보: 6,000건 (정합성 100% 확인)
- 주문 정보: 500,000건 (정합성 99.9% 확인, 잔여 오류 데이터 10건 수기 처리 예정)
      `,
    },
    {
      '항목': '결론 및 권고 사항',
      '내용': '초기 데이터 구축 목표 달성. 잔여 오류 데이터 처리 후 최종 검증 필요. 향후 데이터 정합성 유지를 위한 주기적인 모니터링 시스템 구축 권고.',
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
        <h1 className="text-4xl font-bold text-gray-800">초기데이터 구축 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          신규 시스템 운영에 필요한 초기 데이터를 구축하고 검증한 최종 결과 문서
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
          <strong>초기데이터 구축 결과서 (Initial Data Construction Result Document)</strong>는 신규 정보시스템의 안정적인 운영을 위해 필요한 초기 데이터를 구축하고, 구축된 데이터의 정합성 및 완전성을 검증한 최종 결과를 기록한 문서입니다. 이는 기존 시스템으로부터의 데이터 이관, 수기 입력, 외부 연동 등 다양한 방식으로 수집된 데이터가 시스템의 요구사항에 맞게 정확하게 준비되었음을 증명합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 운영 준비 완료 증명</td>
                <td className="border border-gray-300 px-4 py-2">신규 시스템이 정상적으로 운영되기 위한 필수적인 초기 데이터가 모두 준비되고 검증되었음을 공식적으로 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 정합성 및 완전성 확보</td>
                <td className="border border-gray-300 px-4 py-2">구축된 데이터가 시스템의 데이터 모델 및 표준에 따라 정확하고 완전하게 입력/이관되었음을 검증하여 데이터 품질을 보장합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터 관련 문제점 식별 및 해결</td>
                <td className="border border-gray-300 px-4 py-2">초기 데이터 구축 과정에서 발생한 데이터 오류, 누락, 중복 등의 문제점을 기록하고, 이에 대한 조치 내역 및 해결 여부를 명시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 초기 데이터 구축 계획의 이행 여부, 데이터 품질 확보 수준, 그리고 시스템 운영 준비 상태를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 전환/구축 담당자, DBA, 또는 프로젝트 관리자(PM)가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">초기 데이터 구축 활동이 완료되고, 구축된 데이터에 대한 검증이 완료된 직후에 작성됩니다. (주로 전환 단계)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">초기 데이터 구축 과정에서 발견된 오류 데이터에 대한 추가 조치나, 데이터 정합성 검증 결과에 중대한 변경이 발생할 경우 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>구축 대상 데이터 및 범위:</strong> 초기 데이터 구축이 수행된 데이터 항목 및 범위 (예: 고객, 상품, 주문 데이터).</li>
          <li><strong>구축 기간 및 담당자:</strong> 초기 데이터 구축 활동이 진행된 기간 및 관련 담당자.</li>
          <li><strong>구축 전 데이터 현황:</strong> 초기 데이터 구축 시작 전 기존 데이터의 상태 및 수량.</li>
          <li><strong>구축 활동 내역:</strong> 데이터 이관, 수기 입력, 외부 연동 등 수행된 모든 구축 활동의 상세 내용.</li>
          <li><strong>구축 후 데이터 현황 및 검증 결과:</strong> 구축 완료 후 데이터의 수량, 정합성 검증 결과 및 오류 데이터 현황.</li>
          <li><strong>데이터 관련 문제점 및 조치 내역:</strong> 구축 과정에서 발생한 데이터 문제점(오류, 누락 등) 및 이에 대한 조치 내역.</li>
          <li><strong>결론 및 권고 사항:</strong> 초기 데이터 구축 목표 달성 여부, 향후 데이터 관리 및 운영을 위한 권고 사항.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 초기데이터 구축 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="초기데이터 구축 결과서" fileName="초기데이터_구축_결과서_예시" />
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

export default InitialDataConstructionResultDocument;

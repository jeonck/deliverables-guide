import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const UserRequirementsAnalysisDocument: React.FC = () => {
  const data = [
    {
      '항목': '프로젝트명',
      '내용': '차세대 고객 관리 시스템 구축 프로젝트',
    },
    {
      '항목': '작성일',
      '내용': '2023-10-26',
    },
    {
      '항목': '작성자',
      '내용': '김철수 (요구사항 분석가)',
    },
    {
      '항목': '버전',
      '내용': '1.0',
    },
    {
      '항목': '개요',
      '내용': '본 문서는 차세대 고객 관리 시스템 구축 프로젝트의 사용자 요구사항을 분석하고 정의한 문서이다. 고객 관리, 상품 주문, 결제, 통계 등 주요 업무 영역별 요구사항을 상세화하고, 시스템 구현을 위한 기반을 마련한다.',
    },
    {
      '항목': '주요 요구사항 분석',
      '내용': `
- **고객 정보 관리:**
  - 고객 등록/수정/삭제 기능
  - 고객 등급별 할인율 적용 기능
  - 휴면 고객 자동 전환 기능
- **상품 주문 관리:**
  - 상품 검색 및 상세 정보 조회 기능
  - 장바구니 및 주문/결제 기능
  - 주문 상태 추적 및 변경 기능
- **결제 및 정산:**
  - 다양한 결제 수단 (신용카드, 계좌이체, 간편결제) 연동
  - 일별/월별 정산 보고서 생성 기능
      `,
    },
    {
      '항목': '비기능 요구사항 분석',
      '내용': `
- **성능:** 동시 사용자 1,000명 접속 시 응답 시간 3초 이내
- **보안:** 개인 정보 암호화, 접근 제어, 보안 감사 로그
- **가용성:** 연중무휴 24시간 서비스, 월간 시스템 다운타임 0.1% 이내
- **확장성:** 향후 신규 서비스 추가 및 사용자 증가에 유연하게 대응 가능한 아키텍처
      `,
    },
    {
      '항목': '제약사항',
      '내용': `
- 기존 Legacy 시스템과의 데이터 연동 필요
- 특정 보안 솔루션 도입 의무화
- 개발 기간 6개월 이내
      `,
    },
    {
      '항목': '향후 계획',
      '내용': '본 문서를 기반으로 시스템 설계 및 개발을 진행하며, 변경 사항 발생 시 본 문서를 업데이트한다.',
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
        <h1 className="text-4xl font-bold text-gray-800">사용자 요구사항 분석서</h1>
        <p className="text-lg text-gray-600 mt-4">
          사용자 요구사항을 상세하게 분석하고 정의한 문서
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
          <strong>사용자 요구사항 분석서 (User Requirements Analysis Document)</strong>는 정보시스템 개발 프로젝트에서 사용자의 비즈니스 목표와 필요를 충족시키기 위해 시스템이 제공해야 할 기능 및 비기능적 요구사항을 상세하게 분석하고 정의한 문서입니다. 이 문서는 개발팀이 시스템을 정확하게 이해하고 구현할 수 있도록 돕는 핵심적인 기반 자료가 됩니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">요구사항 명확화</td>
                <td className="border border-gray-300 px-4 py-2">사용자의 모호하거나 추상적인 요구사항을 구체적이고 측정 가능한 형태로 상세화하여, 개발팀과 사용자 간의 이해를 일치시킵니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">개발의 기준점 제공</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설계 및 구현의 기반이 되는 공식적인 문서로서, 개발 과정 전반에 걸쳐 의사결정의 기준점 역할을 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">변경 관리의 근거</td>
                <td className="border border-gray-300 px-4 py-2">요구사항 변경 발생 시, 변경의 영향도를 분석하고 관리하는 데 필요한 공식적인 근거 자료를 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 프로젝트의 요구사항 정의 단계가 적절하게 수행되었는지, 그리고 정의된 요구사항이 시스템 개발에 올바르게 반영되었는지를 평가하는 핵심 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 요구사항 분석가(BA) 또는 시스템 분석가(SA)가 주도적으로 작성하며, <strong>발주처</strong>의 업무 담당자와 긴밀히 협의하여 내용을 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구사항 정의 단계에서 사용자 요구사항 정의서가 작성된 후, 이를 기반으로 상세 분석이 완료된 시점에 작성됩니다. (주로 요구사항 단계 중반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구사항 변경 또는 추가가 발생하여 시스템 기능 및 비기능적 요구사항에 영향을 미칠 경우, 변경 관리 절차에 따라 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>개요:</strong> 문서의 목적, 범위, 대상 시스템에 대한 간략한 설명.</li>
          <li><strong>기능 요구사항 분석:</strong> 시스템이 제공해야 할 주요 기능들을 업무 영역별로 상세하게 정의 (예: 고객 관리, 주문 처리, 결제 등).</li>
          <li><strong>비기능 요구사항 분석:</strong> 시스템의 품질 속성(성능, 보안, 가용성, 확장성 등)에 대한 요구사항 정의.</li>
          <li><strong>사용자 인터페이스 요구사항:</strong> 화면 구성, 사용자 경험(UX) 관련 요구사항.</li>
          <li><strong>데이터 요구사항:</strong> 시스템에서 관리할 데이터의 종류, 구조, 관계 등에 대한 요구사항.</li>
          <li><strong>외부 인터페이스 요구사항:</strong> 외부 시스템과의 연동에 필요한 요구사항.</li>
          <li><strong>제약사항:</strong> 시스템 개발 및 운영에 영향을 미치는 기술적, 환경적, 정책적 제약사항.</li>
          <li><strong>용어 정의:</strong> 문서 내에서 사용되는 주요 용어 및 약어 정의.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 사용자 요구사항 분석서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="사용자 요구사항 분석서" fileName="사용자_요구사항_분석서_예시" />
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

export default UserRequirementsAnalysisDocument;

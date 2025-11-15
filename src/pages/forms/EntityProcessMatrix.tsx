import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const EntityProcessMatrix: React.FC = () => {
  const data = [
    {
      '항목': '프로젝트명',
      '내용': '차세대 고객 관리 시스템 구축 프로젝트',
    },
    {
      '항목': '작성일',
      '내용': '2023-12-05',
    },
    {
      '항목': '작성자',
      '내용': '최수진 (시스템 분석가)',
    },
    {
      '항목': '버전',
      '내용': '1.0',
    },
    {
      '항목': '개요',
      '내용': '본 문서는 차세대 고객 관리 시스템의 주요 업무 프로세스와 엔티티 간의 관계를 매트릭스 형태로 정의하여, 데이터와 프로세스 간의 연관성을 명확히 하고 시스템 설계의 일관성을 확보한다.',
    },
    {
      '항목': '주요 프로세스',
      '내용': '고객 등록, 주문 접수, 상품 조회, 결제 처리, 배송 관리, 고객 정보 수정',
    },
    {
      '항목': '주요 엔티티',
      '내용': '고객, 주문, 상품, 결제, 배송지',
    },
    {
      '항목': '매트릭스 설명',
      '내용': `
- **C (Create):** 프로세스가 엔티티의 인스턴스를 생성한다.
- **R (Read):** 프로세스가 엔티티의 인스턴스를 조회한다.
- **U (Update):** 프로세스가 엔티티의 인스턴스를 변경한다.
- **D (Delete):** 프로세스가 엔티티의 인스턴스를 삭제한다.
      `,
    },
    {
      '항목': '엔티티/프로세스 매트릭스 예시',
      '내용': `
| 프로세스 \ 엔티티 | 고객 | 주문 | 상품 | 결제 | 배송지 |
|---|---|---|---|---|---|
| 고객 등록 | C,R,U |   |   |   |   |
| 주문 접수 | R | C,R,U | R | C | C |
| 상품 조회 |   |   | R |   |   |
| 결제 처리 |   | R,U |   | R,U |   |
| 배송 관리 |   | R,U |   |   | R,U |
| 고객 정보 수정 | R,U |   |   |   |   |
      `,
    },
    {
      '항목': '활용 방안',
      '내용': '데이터와 프로세스 간의 누락된 관계를 식별하고, 시스템 기능 설계 및 데이터베이스 설계의 일관성을 검증하는 데 활용한다.',
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
        <h1 className="text-4xl font-bold text-gray-800">엔티티/프로세스 매트릭스</h1>
        <p className="text-lg text-gray-600 mt-4">
          주요 업무 프로세스와 엔티티 간의 관계를 정의한 문서
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
          <strong>엔티티/프로세스 매트릭스 (Entity/Process Matrix)</strong>는 정보시스템의 주요 업무 프로세스와 시스템 내의 핵심 엔티티(데이터) 간의 상호작용 관계를 행과 열로 표현한 매트릭스 형태의 문서입니다. 각 셀에는 해당 프로세스가 특정 엔티티에 대해 수행하는 작업(생성, 조회, 변경, 삭제 - CRUD)을 표시하여, 데이터와 프로세스 간의 연관성을 명확히 하고 시스템 설계의 일관성을 확보하는 데 활용됩니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">데이터-프로세스 연관성 명확화</td>
                <td className="border border-gray-300 px-4 py-2">각 업무 프로세스가 어떤 데이터를 생성, 조회, 변경, 삭제하는지 명확하게 정의하여 데이터와 프로세스 간의 상호 연관성을 한눈에 파악할 수 있도록 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 설계 일관성 확보</td>
                <td className="border border-gray-300 px-4 py-2">데이터 모델링과 프로세스 모델링 간의 정합성을 검증하고, 누락되거나 불필요한 데이터/프로세스 관계를 식별하여 시스템 설계의 일관성과 완전성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">기능 및 데이터베이스 설계 지원</td>
                <td className="border border-gray-300 px-4 py-2">시스템 기능 설계 시 필요한 데이터 접근 권한 및 데이터베이스 설계 시 테이블과 기능 간의 매핑 관계를 정의하는 데 기초 자료로 활용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 기능 요구사항과 데이터 요구사항이 일관성 있게 분석 및 설계되었는지를 평가하는 중요한 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA), 데이터 아키텍트(DA), 또는 업무 분석가(BA)가 주도적으로 작성하며, <strong>발주처</strong>의 업무 담당자와 협의합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구사항 분석 단계에서 업무 프로세스 및 데이터 모델링이 어느 정도 정의된 시점에 작성됩니다. (주로 요구사항 단계 중후반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">업무 프로세스 또는 데이터 모델에 중대한 변경이 발생하여 데이터와 프로세스 간의 관계 재정의가 필요할 경우 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>개요:</strong> 문서의 목적, 범위, 매트릭스 활용 방안.</li>
          <li><strong>주요 업무 프로세스 목록:</strong> 시스템의 핵심 업무 프로세스 정의.</li>
          <li><strong>주요 엔티티 목록:</strong> 시스템의 핵심 엔티티(데이터) 정의.</li>
          <li><strong>엔티티/프로세스 매트릭스:</strong> 행에는 프로세스, 열에는 엔티티를 배치하고, 각 셀에 해당 프로세스가 엔티티에 대해 수행하는 CRUD(Create, Read, Update, Delete) 작업을 표시.</li>
          <li><strong>매트릭스 분석 결과 및 시사점:</strong> 매트릭스 분석을 통해 도출된 데이터와 프로세스 간의 연관성, 누락되거나 불필요한 관계, 시스템 설계에 대한 시사점.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 엔티티/프로세스 매트릭스 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="엔티티 프로세스 매트릭스" fileName="엔티티_프로세스_매트릭스_예시" />
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

export default EntityProcessMatrix;

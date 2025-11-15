import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const OperatingEnvironmentInstallationResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '설치 대상 시스템',
      '내용': '신규 고객 관리 시스템 (New CMS)',
    },
    {
      '항목': '설치 환경',
      '내용': '운영 서버 (OS: Linux CentOS 7.x, WAS: Apache Tomcat 9.x, DB: Oracle 19c)',
    },
    {
      '항목': '설치 기간',
      '내용': '2023-12-10 ~ 2023-12-15',
    },
    {
      '항목': '설치 활동 내역',
      '내용': `
- **서버 OS 설치 및 설정:**
  - CentOS 7.x 설치 및 네트워크, 보안 설정
  - 필요한 라이브러리 및 유틸리티 설치
- **WAS (Apache Tomcat) 설치 및 설정:**
  - Tomcat 9.x 설치 및 JVM 설정 (Heap Size, Thread Pool)
  - SSL/TLS 인증서 적용 및 가상 호스트 설정
- **DB (Oracle) 설치 및 설정:**
  - Oracle 19c 설치 및 초기 데이터베이스 생성
  - 테이블스페이스, 사용자 계정 생성 및 권한 부여
- **애플리케이션 배포:**
  - New CMS 애플리케이션 WAR 파일 배포 및 연동 설정
      `,
    },
    {
      '항목': '설치 결과 및 검증',
      '내용': `
- **OS:** 정상 부팅 및 네트워크 연결 확인
- **WAS:** Tomcat 서비스 정상 구동 및 웹 애플리케이션 접근 확인
- **DB:** Oracle 인스턴스 정상 구동 및 DB 연결 테스트 성공
- **애플리케이션:** New CMS 로그인 및 주요 기능 동작 확인
      `,
    },
    {
      '항목': '문제점 및 해결 방안',
      '내용': `
- **문제점:** WAS 기동 시 메모리 부족 오류 발생
- **해결 방안:** JVM Heap Size를 2GB에서 4GB로 증설하여 해결
      `,
    },
    {
      '항목': '결론 및 권고 사항',
      '내용': '운영 환경 설치 완료 및 정상 동작 확인. 향후 시스템 안정화를 위한 주기적인 모니터링 및 백업 정책 수립 권고.',
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
        <h1 className="text-4xl font-bold text-gray-800">운영환경 설치 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          신규 시스템의 운영 환경 구축 및 설치 결과를 기록한 문서
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
          <strong>운영환경 설치 결과서 (Operating Environment Installation Result Document)</strong>는 신규 정보시스템의 안정적인 운영을 위해 필요한 하드웨어 및 소프트웨어 운영 환경을 구축하고 설치한 최종 결과를 기록한 문서입니다. 이는 서버, 네트워크, 운영체제, 미들웨어, 데이터베이스 등 시스템을 구성하는 모든 요소가 계획에 따라 정확하게 설치 및 설정되었음을 증명하고, 설치 과정에서 발생한 문제점과 해결 방안을 명시합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">운영 환경 구축 완료 증명</td>
                <td className="border border-gray-300 px-4 py-2">신규 시스템이 정상적으로 운영되기 위한 모든 하드웨어 및 소프트웨어 환경이 성공적으로 구축되었음을 공식적으로 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">설치 및 설정의 정확성 보증</td>
                <td className="border border-gray-300 px-4 py-2">각 구성 요소의 설치 및 설정이 시스템 설계서와 설치 계획서에 따라 정확하게 이루어졌음을 검증하여 시스템의 안정성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">문제점 및 해결 방안 기록</td>
                <td className="border border-gray-300 px-4 py-2">설치 과정에서 발생한 문제점(예: 호환성 문제, 설정 오류)을 기록하고, 이에 대한 조치 내역 및 해결 여부를 명시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 운영 환경 구축 계획의 이행 여부, 설치의 적정성 및 시스템 운영 준비 상태를 평가하는 핵심 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 엔지니어, 인프라 담당자, 또는 프로젝트 관리자(PM)가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">운영 환경 구축 및 시스템 설치 활동이 완료되고, 설치된 환경에 대한 초기 검증이 완료된 직후에 작성됩니다. (주로 전환 단계)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">운영 환경 구성에 중대한 변경이 발생하여 재설치가 필요하거나, 설치된 환경에 대한 추가 검증 결과에 따라 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>설치 대상 시스템 및 환경:</strong> 운영 환경이 구축된 시스템의 명칭, 하드웨어 및 소프트웨어 구성 정보.</li>
          <li><strong>설치 기간 및 담당자:</strong> 운영 환경 구축 및 설치 활동이 진행된 기간 및 관련 담당자.</li>
          <li><strong>설치 활동 내역:</strong> 서버 OS 설치, 미들웨어 설치, 데이터베이스 설치, 네트워크 설정 등 수행된 모든 설치 활동의 상세 내용.</li>
          <li><strong>설치 결과 및 검증:</strong> 각 구성 요소의 설치 완료 여부, 정상 동작 확인 결과 및 검증 내역.</li>
          <li><strong>문제점 및 해결 방안:</strong> 설치 과정에서 발생한 문제점(예: 호환성, 설정 오류) 및 이에 대한 조치 내역.</li>
          <li><strong>결론 및 권고 사항:</strong> 운영 환경 설치 목표 달성 여부, 향후 시스템 운영 및 유지보수를 위한 권고 사항.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 운영환경 설치 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="운영환경 설치 결과서" fileName="운영환경_설치_결과서_예시" />
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

export default OperatingEnvironmentInstallationResultDocument;

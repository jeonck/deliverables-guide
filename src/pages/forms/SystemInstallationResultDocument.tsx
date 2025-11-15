import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const SystemInstallationResultDocument: React.FC = () => {
  const data = [
    {
      '항목': '설치 개요',
      '내용': `
- 설치 대상 시스템: 고객 관리 시스템 (CMS)
- 구성 요소: Web Server (Apache), WAS (Tomcat), DBMS (MySQL), Application (CMS v1.0)
- 설치 환경: 운영 서버 (OS: CentOS 7.x, CPU: 8 Core, RAM: 32GB)
- 설치 기간: 2023-11-10 ~ 2023-11-11
      `,
    },
    {
      '항목': '설치 작업 결과',
      '내용': `
- OS 설치 및 설정: CentOS 7.x 설치 완료, 네트워크 설정 (IP: 192.168.1.100), 방화벽 설정 (80, 443, 3306 포트 오픈) - 성공
- DBMS 설치 및 설정: MySQL 8.0 설치 완료, DB 인스턴스 생성 (cms_db), 사용자 계정 생성 (cms_user) - 성공
- WAS 설치 및 설정: Tomcat 9.x 설치 완료, JVM 설정 (Xms512m, Xmx2g), Context Path 설정 (/cms) - 성공
- Web Server 설치 및 설정: Apache 2.4 설치 완료, SSL 인증서 적용, Tomcat 연동 설정 - 성공
- Application 배포: CMS v1.0 WAR 파일 배포 완료, 초기 설정 파일 적용 - 성공
      `,
    },
    {
      '항목': '설치 후 검증 결과',
      '내용': `
- 네트워크 연결: 운영 서버 <-> DB 서버 간 Ping 테스트 - 합격
- 주요 서비스 기동: Apache, Tomcat, MySQL 서비스 기동 상태 확인 - 합격
- DB 연동: CMS 애플리케이션에서 DB 접속 및 기본 쿼리 실행 - 합격
- 환경 설정 파일: 주요 설정 파일 (server.xml, httpd.conf 등) 내용 확인 - 합격
- 웹 애플리케이션 접속: 웹 브라우저를 통해 CMS 로그인 페이지 접속 및 로그인 테스트 - 합격
      `,
    },
    {
      '항목': '장애 및 조치 내역',
      '내용': `
- 장애 내용: Tomcat 기동 시 OutOfMemoryError 발생
- 조치 내용: JVM 힙 메모리 설정 (Xmx) 값 증대 (1g -> 2g)
- 최종 해결 여부: 해결 완료
      `,
    },
    {
      '항목': '최종 승인',
      '내용': `
- 작성자: [서명] (개발사 시스템 운영 담당자)
- 발주처 IT 운영 담당자: [서명]
- 승인 일자: 2023-11-12
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
        <h1 className="text-4xl font-bold text-gray-800">시스템 설치 결과서</h1>
        <p className="text-lg text-gray-600 mt-4">
          신규 정보시스템을 운영 환경에 설치하고 정상 동작 여부를 검증한 최종 결과 문서
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
          <strong>시스템 설치 결과서 (System Installation Result Document)</strong>는 시스템 설치 및 검증 계획서에 따라 신규 정보시스템을 실제 운영 환경에 물리적, 논리적으로 설치하고, 설치된 시스템의 정상적인 동작 여부를 확인하는 검증 활동의 최종 결과를 공식적으로 기록한 문서입니다. 이는 시스템이 운영 개시 전 기술적 환경 구축을 완료했음을 증명합니다.
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
                <td className="border border-gray-300 px-4 py-2">하드웨어, 운영체제(OS), 데이터베이스(DBMS), 미들웨어(WAS), 애플리케이션 등 모든 구성 요소가 설계 명세에 따라 운영 환경에 정확하고 완전하게 설치되었음을 객관적으로 입증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">기술적 건전성 확인</td>
                <td className="border border-gray-300 px-4 py-2">설치된 시스템이 오류 없이 정상 구동되고, 네트워크 연동 및 주요 환경 설정이 올바르게 적용되었는지 설치 후 검증(Verification) 결과를 통해 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">전환/오픈 준비 상태 확정</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설치 작업이 완료되고 검증까지 성공적으로 마쳤음을 확인하여, <strong>데이터 전환 및 시스템 운영 개시(Go-Live)</strong>를 위한 기술적 준비 상태를 확정하는 근거가 됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 설치 절차의 준수 여부, 운영 환경 구성의 적절성, 그리고 설치 후 시스템의 기술적 안정성을 평가하는 최종 기준 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 운영/전환 담당자, DBA, 및 <strong>기술 책임자(TA)</strong>가 주도적으로 작성하며, 발주처의 IT 운영 조직과 협의하여 결과를 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설치 작업이 완료되고, <strong>설치 후 검증(검증 테스트)</strong>까지 성공적으로 완료된 직후에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">설치 후 검증에서 심각한 오류가 발견되어 재설치 또는 환경 설정을 수정한 후 재검증을 수행했을 경우, 해당 결과가 최신 내용으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>설치 개요:</strong> 설치 대상 시스템 및 구성 요소 목록, 설치 환경 명세, 설치 기간.</li>
          <li><strong>설치 작업 결과:</strong> 단계별 설치 작업 (OS, DBMS, WAS, App 설치 및 설정)의 성공 여부 및 특이 사항 기록.</li>
          <li><strong>설치 후 검증 결과:</strong>
            <ul className="list-circle list-inside ml-4 space-y-1">
              <li>검증 항목 목록: 네트워크 연결, 주요 서비스 기동, DB 연동, 환경 설정 파일 등 검증 대상.</li>
              <li>검증 결과: 각 항목별 실제 검증 결과 및 합격(Pass)/불합격(Fail) 판정.</li>
            </ul>
          </li>
          <li><strong>장애 및 조치 내역:</strong> 설치 및 검증 과정에서 발생한 모든 문제(장애) 내용 및 조치 내용, 최종 해결 여부.</li>
          <li><strong>최종 승인:</strong> 시스템 설치 및 검증이 완료되었음을 확인하는 작성자 및 발주처 IT 운영 담당자의 공식 서명.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 시스템 설치 결과서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="시스템 설치 결과서" fileName="시스템_설치_결과서_예시" />
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

export default SystemInstallationResultDocument;

import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const SystemEnvironmentAnalysisDocument: React.FC = () => {
  const data = [
    {
      '항목': '프로젝트명',
      '내용': '차세대 고객 관리 시스템 구축 프로젝트',
    },
    {
      '항목': '작성일',
      '내용': '2023-11-15',
    },
    {
      '항목': '작성자',
      '내용': '박영희 (시스템 분석가)',
    },
    {
      '항목': '버전',
      '내용': '1.0',
    },
    {
      '항목': '개요',
      '내용': '본 문서는 차세대 고객 관리 시스템의 구축 및 운영에 필요한 시스템 환경을 분석하고 정의한 문서이다. 하드웨어, 소프트웨어, 네트워크, 보안 등 시스템을 둘러싼 제반 환경 요소를 상세히 기술한다.',
    },
    {
      '항목': '하드웨어 환경',
      '내용': `
- **서버:**
  - 웹/WAS 서버: Intel Xeon E5-2690 v4 (2.6GHz) 2CPU, RAM 128GB, SSD 1TB x 2 (RAID 1)
  - DB 서버: Intel Xeon E5-2690 v4 (2.6GHz) 2CPU, RAM 256GB, SSD 2TB x 4 (RAID 5)
- **스토리지:** SAN 스토리지 10TB
- **네트워크 장비:** L3 스위치, 방화벽, 로드밸런서
      `,
    },
    {
      '항목': '소프트웨어 환경',
      '내용': `
- **운영체제:** CentOS 7.x (64bit)
- **웹/WAS:** Apache HTTP Server 2.4.x, Apache Tomcat 9.x
- **데이터베이스:** Oracle Database 19c Enterprise Edition
- **개발 언어/프레임워크:** Java 11, Spring Boot 2.x, React 18.x
- **기타:** Kafka 2.x, Redis 6.x
      `,
    },
    {
      '항목': '네트워크 환경',
      '내용': `
- **내부망:** 10Gbps 이더넷
- **외부망:** 1Gbps 전용회선 (ISP: KT)
- **IP 주소:** 공인 IP 5개, 사설 IP 대역 설정
- **방화벽 정책:** 웹/WAS 서버 80, 443 포트 허용, DB 서버 1521 포트 내부망 허용
      `,
    },
    {
      '항목': '보안 환경',
      '내용': `
- **보안 솔루션:** 웹 방화벽 (WAF), 침입 방지 시스템 (IPS), 통합로그관리 시스템
- **접근 제어:** 사용자별 역할 기반 접근 제어 (RBAC)
- **데이터 암호화:** 개인 정보 DB 암호화, 통신 구간 SSL/TLS 암호화
      `,
    },
    {
      '항목': '모니터링 환경',
      '내용': `
- **시스템 모니터링:** Zabbix
- **APM:** AppDynamics
- **로그 관리:** ELK Stack (Elasticsearch, Logstash, Kibana)
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
        <h1 className="text-4xl font-bold text-gray-800">시스템 환경 분석서</h1>
        <p className="text-lg text-gray-600 mt-4">
          시스템 구축 및 운영에 필요한 하드웨어, 소프트웨어, 네트워크, 보안 등 제반 환경을 분석한 문서
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
          <strong>시스템 환경 분석서 (System Environment Analysis Document)</strong>는 정보시스템의 성공적인 구축 및 안정적인 운영을 위해 필요한 하드웨어, 소프트웨어, 네트워크, 보안 등 시스템을 둘러싼 제반 환경 요소를 상세하게 분석하고 정의한 문서입니다. 이 문서는 시스템이 운영될 실제 환경을 명확히 이해하고, 필요한 자원을 효율적으로 계획하며, 잠재적인 환경적 제약사항이나 위험 요소를 사전에 식별하는 데 중요한 역할을 합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">환경 요구사항 명확화</td>
                <td className="border border-gray-300 px-4 py-2">시스템이 정상적으로 작동하기 위한 하드웨어, 소프트웨어, 네트워크 등의 최소 및 권장 사양을 명확히 정의하여, 시스템 구축의 기반을 마련합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">자원 계획 및 예산 수립 지원</td>
                <td className="border border-gray-300 px-4 py-2">필요한 시스템 자원(서버, 스토리지, 네트워크 장비, 소프트웨어 라이선스 등)을 정확히 파악하여, 효율적인 자원 계획 수립 및 예산 책정을 지원합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">잠재적 위험 요소 식별</td>
                <td className="border border-gray-300 px-4 py-2">기존 환경과의 호환성 문제, 성능 병목 현상, 보안 취약점 등 시스템 운영에 영향을 미칠 수 있는 잠재적인 위험 요소를 사전에 식별하고 대응 방안을 모색합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 구축 환경의 적정성, 보안성, 확장성 등을 평가하는 중요한 근거 자료로 활용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 엔지니어(SE), 아키텍트, 또는 인프라 담당자가 주도적으로 작성하며, <strong>발주처</strong>의 IT 인프라 담당자와 협의하여 내용을 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구사항 분석 단계에서 시스템의 기능 및 비기능 요구사항이 정의된 후, 시스템 아키텍처 설계 이전에 작성됩니다. (주로 요구사항 단계 후반 또는 설계 단계 초반)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 환경에 중대한 변경(예: 하드웨어 증설, OS 업그레이드, 네트워크 구성 변경)이 발생하거나, 새로운 보안 정책이 적용될 경우 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>개요:</strong> 문서의 목적, 범위, 대상 시스템에 대한 간략한 설명.</li>
          <li><strong>하드웨어 환경:</strong> 서버(웹/WAS, DB), 스토리지, 네트워크 장비 등 물리적 자원에 대한 상세 사양 및 구성.</li>
          <li><strong>소프트웨어 환경:</strong> 운영체제, 웹/WAS, 데이터베이스, 개발 언어/프레임워크, 미들웨어, 기타 솔루션 등.</li>
          <li><strong>네트워크 환경:</strong> 내부/외부망 구성, IP 주소 체계, 방화벽 정책, 로드밸런싱 구성 등.</li>
          <li><strong>보안 환경:</strong> 보안 솔루션(WAF, IPS 등), 접근 제어 정책, 데이터 암호화 방안 등.</li>
          <li><strong>모니터링 환경:</strong> 시스템 성능, 서비스 가용성, 로그 관리 등을 위한 모니터링 도구 및 구성.</li>
          <li><strong>백업 및 복구 환경:</strong> 데이터 백업 주기, 백업 방식, 복구 절차 등.</li>
          <li><strong>제약사항 및 고려사항:</strong> 시스템 환경 구축 시 발생할 수 있는 제약사항 및 특별히 고려해야 할 사항.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 시스템 환경 분석서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="시스템 환경 분석서" fileName="시스템_환경_분석서_예시" />
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

export default SystemEnvironmentAnalysisDocument;

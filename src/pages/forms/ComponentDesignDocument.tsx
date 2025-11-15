import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const ComponentDesignDocument: React.FC = () => {
  const data = [
    {
      '항목': '컴포넌트 ID',
      '내용': 'COM-001',
    },
    {
      '항목': '컴포넌트 명칭',
      '내용': '사용자 인증 컴포넌트',
    },
    {
      '항목': '기능 요약',
      '내용': '사용자 로그인, 로그아웃, 회원가입, 비밀번호 재설정 기능을 제공한다.',
    },
    {
      '항목': '버전 정보',
      '내용': '1.0.0',
    },
    {
      '항목': '인터페이스 정의 (API)',
      '내용': `
- **login(userId: string, password: string): Promise<AuthToken>**
  - 설명: 사용자 인증을 수행하고 인증 토큰을 반환한다.
  - 매개변수: userId (사용자 ID), password (비밀번호)
  - 반환 값: AuthToken (인증 토큰 객체)
  - 오류 코드: 401 (인증 실패), 404 (사용자 없음)

- **logout(authToken: string): Promise<void>**
  - 설명: 사용자 세션을 종료한다.
  - 매개변수: authToken (인증 토큰)
  - 반환 값: 없음
  - 오류 코드: 403 (유효하지 않은 토큰)
      `,
    },
    {
      '항목': '내부 구조 및 로직',
      '내용': `
- 사용 기술: Spring Security, JWT
- 주요 클래스:
  - AuthService: 인증 로직 처리
  - UserRepository: 사용자 정보 DB 접근
  - JwtTokenProvider: JWT 토큰 생성 및 검증
      `,
    },
    {
      '항목': '데이터 접근 및 활용',
      '내용': `
- 데이터베이스 테이블: USER_ACCOUNT (사용자 정보), USER_ROLE (사용자 권한)
- 접근 방식: JPA Repository를 통한 접근
      `,
    },
    {
      '항목': '다른 컴포넌트와의 연관',
      '내용': `
- 호출하는 컴포넌트: 모든 비즈니스 로직 컴포넌트 (인증 필요 시)
- 의존하는 컴포넌트: 로깅 컴포넌트, 예외 처리 컴포넌트
      `,
    },
    {
      '항목': '배포 및 설치 정보',
      '내용': `
- 패키징 방식: JAR 파일
- 배포 위치: 애플리케이션 서버 (Tomcat)
- 설치 환경: Java 11 이상, Spring Boot 2.x
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
        <h1 className="text-4xl font-bold text-gray-800">컴포넌트 설계서</h1>
        <p className="text-lg text-gray-600 mt-4">
          응용 서비스를 제공하는 핵심 소프트웨어 컴포넌트의 기능, 인터페이스, 내부 구조 등을 상세하게 정의한 문서
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
          <strong>컴포넌트 설계서 (Component Design Document)</strong>는 구축될 정보시스템의 응용 서비스를 제공하는 핵심 소프트웨어 컴포넌트(Component) 각각에 대해 컴포넌트의 기능, 인터페이스(API), 내부 구조, 사용되는 기술, 그리고 다른 컴포넌트와의 상호작용 등을 상세하게 정의한 문서입니다. 이는 재사용성, 상호 운용성, 교체 가능성을 고려하여 시스템을 구축하는 상세 설계의 핵심 산출물입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">재사용성 및 모듈화 확보</td>
                <td className="border border-gray-300 px-4 py-2">컴포넌트의 독립적인 기능과 명확한 인터페이스를 정의하여, 해당 컴포넌트를 다른 시스템이나 모듈에서 재사용할 수 있도록 하고, 시스템의 유연성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 통합 및 연동 기준</td>
                <td className="border border-gray-300 px-4 py-2">컴포넌트가 제공하는 <strong>서비스(메소드/함수)의 규격(API)</strong>을 명확히 정의하여, 다른 컴포넌트나 프로그램이 이를 정확하게 호출하고 연동할 수 있는 기술적 기준을 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">병렬 개발 환경 지원</td>
                <td className="border border-gray-300 px-4 py-2">독립적인 컴포넌트 단위로 개발과 테스트를 진행할 수 있도록 하여, 개발 일정을 단축하고 효율적인 병렬 개발 환경을 지원합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 컴포넌트 기반 개발 방법론 준수 여부, 인터페이스 설계의 적절성, 시스템 아키텍처 반영 충실도를 평가하는 핵심 기준 자료로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 설계자(SA), 컴포넌트 개발 책임자, 또는 <strong>기술 아키텍트(TA)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 아키텍처 및 기능 정의가 완료된 후, 프로그램 코딩을 시작하기 직전인 상세 설계 단계에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">컴포넌트의 인터페이스(API) 변경, 내부 로직 수정, 또는 기술 스택 변경 등이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용 (간략)</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>컴포넌트 개요:</strong> 컴포넌트 ID, 명칭, 기능 요약, 버전 정보.</li>
          <li><strong>인터페이스 정의:</strong> 컴포넌트가 외부로 제공하는 모든 서비스(함수/메소드)의 이름, 매개변수, 반환 값, 오류 코드 등 상세 규격.</li>
          <li><strong>내부 구조 및 로직:</strong> 컴포넌트의 내부 구현 기술(언어, 프레임워크), 사용되는 클래스 및 객체 구조 (클래스 명세서와 연계).</li>
          <li><strong>데이터 접근 및 활용:</strong> 컴포넌트가 접근하거나 사용하는 데이터베이스 테이블 또는 파일 목록.</li>
          <li><strong>다른 컴포넌트와의 연관:</strong> 해당 컴포넌트가 호출하거나 의존하는 외부/다른 컴포넌트 목록.</li>
          <li><strong>배포 및 설치 정보:</strong> 컴포넌트의 패키징 방식, 배포 위치, 설치 환경에 대한 명세.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 컴포넌트 설계서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="컴포넌트 설계서" fileName="컴포넌트_설계서_예시" />
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

export default ComponentDesignDocument;

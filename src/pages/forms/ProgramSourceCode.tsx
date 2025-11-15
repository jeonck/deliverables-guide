import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProgramSourceCode: React.FC = () => {
  const data = [
    {
      '항목': '코드 파일',
      '내용': `
- src/main/java/com/example/service/UserService.java
- src/main/resources/application.yml
- src/main/webapp/WEB-INF/views/userList.jsp
      `,
    },
    {
      '항목': '코딩 표준 준수',
      '내용': `
- 주석: 모든 클래스, 메서드, 복잡한 로직에는 주석 작성 (Javadoc 스타일)
- 명명 규칙:
  - 클래스: PascalCase (예: UserService)
  - 메서드/변수: camelCase (예: getUserList)
  - 상수: ALL_CAPS_WITH_UNDERSCORES (예: MAX_PAGE_SIZE)
- 들여쓰기: 4 spaces
      `,
    },
    {
      '항목': '구현 로직',
      '내용': `
- 사용자 목록 조회 (UserService.java):
  - UserRepository를 통해 DB에서 사용자 목록 조회
  - 페이징 처리 로직 적용
  - 비즈니스 로직 (예: 권한 체크) 수행
      `,
    },
    {
      '항목': '보안 코드',
      '내용': `
- 입력 데이터 유효성 검증: 모든 사용자 입력값에 대해 서버 사이드 유효성 검증 (예: @Valid 어노테이션 사용)
- 비밀번호 암호화: BCryptPasswordEncoder 사용
- 접근 통제: Spring Security를 활용한 URL 및 메서드 기반 권한 체크
      `,
    },
    {
      '항목': '버전 관리 정보',
      '내용': `
- 최종 수정일: 2023-11-15
- 수정자: Hong Gil Dong
- 버전 번호: 1.0.0
- Git Commit ID: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
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

  const codeExample = `
// src/main/java/com/example/service/UserService.java
package com.example.service;

import com.example.repository.UserRepository;
import com.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * 사용자 관련 비즈니스 로직을 처리하는 서비스 클래스
 */
@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 모든 사용자 목록을 조회한다.
     * @return 사용자 목록
     */
    public List<User> getAllUsers() {
        // TODO: 페이징 처리 및 권한 체크 로직 추가 예정
        return userRepository.findAll();
    }

    /**
     * 특정 ID의 사용자를 조회한다.
     * @param id 사용자 ID
     * @return 조회된 사용자 객체, 없으면 null
     */
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    /**
     * 새로운 사용자를 등록한다.
     * 비밀번호는 반드시 암호화하여 저장한다.
     * @param user 등록할 사용자 정보
     * @return 등록된 사용자 객체
     */
    public User registerUser(User user) {
        // 비밀번호 암호화 로직 (예시)
        // user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}
  `;

  return (
    <div className="container mx-auto p-8 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">프로그램 코드</h1>
        <p className="text-lg text-gray-600 mt-4">
          개발 언어로 작성된 실제 명령문들의 집합으로, 정보시스템 기능의 핵심 실체
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
          <strong>프로그램 코드 (Program Source Code)</strong>는 <strong>개발 언어(예: Java, C#, Python, SQL)</strong>를 사용하여 작성된 실제 명령문들의 집합입니다. 이는 프로그램 설계서와 클래스 명세서 등에 정의된 기능, 로직, 데이터 처리 방식 등을 컴퓨터가 실행할 수 있도록 구현한 원시 파일(Source File) 형태로, 정보시스템을 구성하는 모든 기능의 핵심 실체입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">시스템 기능의 실체</td>
                <td className="border border-gray-300 px-4 py-2">요구사항과 설계서에 명세된 모든 기능을 실제로 구현하여, 정보시스템이 작동하게 만드는 궁극적인 구성 요소입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">품질 및 보안 평가 대상</td>
                <td className="border border-gray-300 px-4 py-2">감리 시 코딩 표준 준수 여부, 버그 및 결함 유무, 보안 취약점 (SQL Injection, XSS 등) 등을 직접 점검하는 가장 중요한 기술적 평가 대상입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">설계와 구현의 정합성 확인</td>
                <td className="border border-gray-300 px-4 py-2"><strong>설계서(특히 클래스 명세서, 프로그램 설계서)</strong>에 정의된 로직, 변수, 함수명 등이 코드에 정확하게 반영되었는지 확인하는 기준으로 사용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">유지보수의 근거</td>
                <td className="border border-gray-300 px-4 py-2">향후 시스템의 기능 변경, 성능 튜닝, 오류 수정 등 모든 유지보수 활동의 대상이 되는 핵심 자산입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 <strong>프로그래머(Developer)</strong>가 주도적으로 작성하며, <strong>프로젝트 리더(PL)</strong>의 코드 리뷰를 거칩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">상세 설계서가 완료되고 <strong>구현 단계(Coding Phase)</strong>가 시작된 직후부터 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">단위 시험, 통합 시험, 시스템 시험, 성능 튜닝, 결함 수정 등의 활동을 통해 기능 또는 품질에 변경이 발생할 때마다 <strong>버전 관리 시스템(VCS)</strong>을 통해 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contents" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 주요 포함 내용</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>코드 파일:</strong> 시스템을 구성하는 모든 프로그램 파일 (자바 파일, 스크립트 파일, 설정 파일 등).</li>
          <li><strong>코딩 표준 준수:</strong> 주석(Comment), 변수/함수 명명 규칙, 코드 들여쓰기 등 사전에 정의된 코딩 표준 적용 여부.</li>
          <li><strong>구현 로직:</strong> 프로그램 설계서에 정의된 알고리즘 및 기능 처리 로직 구현.</li>
          <li><strong>보안 코드:</strong> 입력 데이터 유효성 검증, 암호화/복호화 처리, 접근 통제 로직 등 보안 기능 구현.</li>
          <li><strong>버전 관리 정보:</strong> 최종 수정일, 수정자, 버전 번호 등 코드 파일에 명시된 버전 관리 정보.</li>
        </ul>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 프로그램 코드 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="프로그램 코드" fileName="프로그램_코드_예시" />
        </div>
        <div className="overflow-x-auto mb-8">
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

        <h3 className="text-xl font-bold text-gray-700 mb-4">Java 소스 코드 예시 (UserService.java)</h3>
        <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
          <SyntaxHighlighter language="java" style={tomorrow}>
            {codeExample}
          </SyntaxHighlighter>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <Link to="/implementation" className="text-blue-600 hover:underline">구현 페이지로 돌아가기</Link>
      </footer>
    </div>
  );
};

export default ProgramSourceCode;

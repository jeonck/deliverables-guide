import React from 'react';
import { Link } from 'react-router-dom';
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

const UseCaseSpecification: React.FC = () => {
  const data = [
    {
      '항목': '유스케이스 ID',
      '내용': 'UC-001',
    },
    {
      '항목': '유스케이스명',
      '내용': '사용자 로그인',
    },
    {
      '항목': '개요',
      '내용': '사용자가 시스템에 접근하기 위해 인증을 수행하는 과정을 기술한다.',
    },
    {
      '항목': '주요 액터',
      '내용': '사용자 (일반회원, 관리자)',
    },
    {
      '항목': '이해관계자와 관심사항',
      '내용': '사용자: 안전하고 빠른 로그인을 원함\n관리자: 사용자 활동 추적 및 보안 강화를 원함',
    },
    {
      '항목': '전제조건',
      '내용': '사용자가 회원가입을 완료하여 계정이 활성화된 상태여야 한다.',
    },
    {
      '항목': '종료조건',
      '내용': '성공: 사용자가 성공적으로 로그인하여 메인 페이지로 이동한다.\n실패: 로그인 실패 메시지가 표시되고 사용자는 로그인 페이지에 머무른다.',
    },
    {
      '항목': '기본 시나리오 (주요 성공)',
      '내용': '1. 사용자가 로그인 페이지에서 아이디와 비밀번호를 입력하고 "로그인" 버튼을 클릭한다.\n2. 시스템은 입력된 아이디와 비밀번호의 유효성을 검사한다.\n3. 인증이 성공하면, 시스템은 사용자 세션을 생성하고 메인 페이지로 리디렉션한다.',
    },
    {
      '항목': '대안 시나리오 (예외)',
      '내용': '2a. 아이디 또는 비밀번호가 일치하지 않을 경우:\n  1. 시스템은 "아이디 또는 비밀번호가 올바르지 않습니다."라는 오류 메시지를 표시한다.\n  2. 사용자는 로그인 페이지에 머무른다.\n2b. 계정이 비활성화된 경우:\n  1. 시스템은 "비활성화된 계정입니다."라는 메시지를 표시한다.',
    },
    {
      '항목': '구현 시 고려 사항',
      '내용': '- 비밀번호는 암호화하여 저장해야 한다.\n- 로그인 시도 횟수 제한 및 실패 시 계정 잠금 기능을 구현해야 한다.',
    },
    {
      '항목': '발생 빈도',
      '내용': '높음 (시스템 사용 시 항상 발생)',
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
        <h1 className="text-4xl font-bold text-gray-800">유스케이스 명세서 (R2)</h1>
        <p className="text-lg text-gray-600 mt-4">시스템의 요구사항을 액터와 시스템 간의 상호작용 시나리오로 상세하게 기술하는 산출물</p>
      </header>

      <nav className="mb-12">
        <ul className="flex justify-center gap-4">
          <li><a href="#definition" onClick={(e) => handleNavClick(e, 'definition')} className="text-blue-600 hover:underline">정의</a></li>
          <li><a href="#purpose" onClick={(e) => handleNavClick(e, 'purpose')} className="text-blue-600 hover:underline">목적 및 역할</a></li>
          <li><a href="#author" onClick={(e) => handleNavClick(e, 'author')} className="text-blue-600 hover:underline">작성 주체 및 시점</a></li>
          <li><a href="#format" onClick={(e) => handleNavClick(e, 'format')} className="text-blue-600 hover:underline">양식</a></li>
          <li><a href="#example" onClick={(e) => handleNavClick(e, 'example')} className="text-blue-600 hover:underline">예시</a></li>
        </ul>
      </nav>

      <section id="definition" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">1. 유스케이스 명세서의 정의 (Definition)</h2>
        <p className="text-gray-800 leading-relaxed">
          유스케이스 명세서(R2)는 시스템의 요구사항에 대해 <strong>액터(Actor)</strong>와 시스템 활동 및 이들 상호 간의 활동을 순서화된 시나리오로 상세하게 기술하는 산출물입니다. 이 문서는 유스케이스의 이름, 액터, 그들 간의 연관관계를 보여주는 <strong>시스템 환경을 다이어그램(UCD)</strong>으로도 표현합니다.
        </p>
        <p className="text-gray-800 leading-relaxed mt-4">
          다른 방법론에서는 유스케이스 명세서가 요구사항 기술서 또는 현행 시스템 분석서와 유사한 역할을 수행하는 것으로 비교됩니다.
        </p>
      </section>

      <section id="purpose" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">2. 유스케이스 명세서의 목적 및 역할 (Purpose and Role)</h2>
        <p className="text-gray-800 leading-relaxed mb-4">유스케이스 명세서 작성의 주요 목적은 다음과 같습니다:</p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>시나리오 상세 기술:</strong> 시스템의 요구사항에 대해 액터와 시스템 활동 및 상호 간의 활동에 대한 순서화된 시나리오를 상세하게 기술합니다.</li>
          <li><strong>시스템 환경 표현:</strong> 유스케이스의 이름, 액터, 연관관계를 보여주는 시스템 환경을 다이어그램으로 표현하여 시스템 이해도를 높입니다.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">역할 및 특징 (작성 방법 포함):</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>유스케이스는 시나리오를 구체적인 언어표현으로 기술해야 합니다.</li>
          <li>유스케이스 다이어그램(UCD)은 그림으로 작성하며, 작성 도구를 사용할 수 있습니다.</li>
          <li>선택적으로, 주요 유스케이스에 대해 시스템과 액터 간의 오퍼레이션을 상세히 표시하는 시스템 시퀀스 다이어그램이나 오퍼레이션의 약정(약속)을 나타내는 문서를 추가로 작성할 수 있지만, 이는 필수 산출물에는 포함되지 않습니다.</li>
        </ul>
      </section>

      <section id="author" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">3. 작성 주체 및 시점 (Author and Timing)</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong>작성 시점:</strong> 유스케이스 명세서는 소프트웨어 개발 단계 중 분석 단계에 해당하는 산출물입니다 (코드: R2).</li>
          <li><strong>작성 주체:</strong> 문서는 작성자와 승인자를 명시하는 제·개정 이력을 포함합니다. 표준 산출물 관리 가이드의 맥락상, 이 문서는 <strong>개발자(분석가)</strong>가 작성하고 발주자나 프로젝트 관리자가 승인하는 형태로 진행됩니다.</li>
        </ul>
      </section>

      <section id="format" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">4. 유스케이스 명세서의 양식 (Format)</h2>
        <p className="text-gray-800 leading-relaxed mb-4">유스케이스 명세서(R2)는 기본적으로 다음과 같은 주요 항목들로 구성됩니다:</p>
        <div className="space-y-4">
          <p><strong>1. 제·개정 이력:</strong> 날짜, 버전, 작성자, 승인자, 내용을 기록합니다.</p>
          <p><strong>2. 서브시스템 목록:</strong> 전체 시스템에 대해 한 개의 표로 작성하며, 서브시스템 ID, 서브시스템명, 서브시스템 설명을 기입합니다.</p>
          <p><strong>3. 유스케이스 다이어그램(UCD):</strong> 서브시스템별로 작성하며, UCD ID, UCD 명, 관련 서브시스템 ID/명을 기입합니다.</p>
          <p><strong>4. 유스케이스 목록:</strong> 서브시스템별로 작성하며, 유스케이스 ID, 유스케이스명, 유스케이스 설명, 관련 액터 ID, 관련 UCD ID, 관련 요구사항 ID("사용자 요구사항 정의서"의 요구사항 ID)를 기입합니다.</p>
          <p><strong>5. 액터 목록:</strong> 서브시스템별로 작성하며, 액터 ID, 액터명, 액터 유형 (주요 액터, 보조 액터, 숨은 액터), 액터 설명을 기입합니다.</p>
          <p><strong>6. 유스케이스 기술서 (상세 명세):</strong> 유스케이스별로 작성하며, 다음의 핵심 항목들을 포함합니다:</p>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">유스케이스 기술서 항목</th>
                <th className="border border-gray-300 px-4 py-2 text-left">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">주요 액터</td>
                <td className="border border-gray-300 px-4 py-2">시스템의 서비스를 호출하는 주된 액터.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">이해관계자와 관심사항</td>
                <td className="border border-gray-300 px-4 py-2">유스케이스 내에 있어야 하는 사람, 조직, 컴퓨터 시스템 및 이들이 시스템에 요구하는 사항.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">전제조건</td>
                <td className="border border-gray-300 px-4 py-2">시나리오가 유스케이스에서 시작되기 전에 항상 참이어야 하는 조건.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">종료조건</td>
                <td className="border border-gray-300 px-4 py-2">유스케이스의 주요 성공 시나리오 또는 대안 경로 성공 완료 후에 항상 참이어야 하는 조건.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">기본 시나리오</td>
                <td className="border border-gray-300 px-4 py-2">이해관계자의 관심사항을 충족시키는 일반적인 성공 경로.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">대안 시나리오</td>
                <td className="border border-gray-300 px-4 py-2">성공과 실패의 경우에 관한 모든 시나리오나 분기를 기술 (주요 성공 시나리오보다 길고 복잡할 수 있음).</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">구현 시 고려 사항</td>
                <td className="border border-gray-300 px-4 py-2">비기능적 요구사항, 품질 속성, 설계 제약사항, 기술적 변화(예: 데이터 구조 변화 가능성) 등이 유스케이스와 관련되면 기술.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">발생 빈도</td>
                <td className="border border-gray-300 px-4 py-2">유스케이스가 발생하는 빈도 유형.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">5. 유스케이스 명세서 작성 예시</h2>
          <ExcelDownloadButton tableData={tableData} sheetName="유스케이스 명세서" fileName="유스케이스_명세서_예시" />
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

export default UseCaseSpecification;

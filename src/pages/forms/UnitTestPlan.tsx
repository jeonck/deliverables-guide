import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const UnitTestPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 대상 목록', '단위 시험을 수행할 프로그램(모듈) 목록 및 범위', '회원가입 모듈 (UserRegistration.java), 로그인 모듈 (UserLogin.java)'],
    ['시험 환경', '단위 시험에 사용될 하드웨어, 소프트웨어, 데이터베이스 등의 환경 구성', '개발 서버 (Dev-Server), JDK 11, Oracle 19c, JUnit 5'],
    ['시험 항목 및 방법', '각 프로그램별로 시험할 주요 기능 및 로직(예: 정상 처리, 예외 처리, 경계값)과 시험 방법 (예: 화이트박스 테스트 기법)', '회원가입: 정상 가입, 아이디 중복, 비밀번호 형식 오류 (화이트박스)'],
    ['시험 데이터', '시험을 위해 준비해야 할 입력 데이터 및 예상되는 출력 결과', '정상 케이스: ID(testuser), PW(password123!) -> 성공 메시지'],
    ['합격 기준', '단위 시험을 통과하기 위한 기준 (예: 모든 테스트 케이스 통과율, 결함 발생률 기준)', '모든 테스트 케이스 100% 통과, 심각도 상 결함 0건'],
    ['일정 및 담당자', '단위 시험의 수행 일정 및 각 프로그램별 담당자', '회원가입 모듈: 2023.01.10 ~ 2023.01.12 (담당: 홍길동)'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">단위시험 계획서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="단위시험계획서"
          fileName="단위시험계획서.xlsx"
        />
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border-2 border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">항목</th>
              <th className="border border-gray-300 px-4 py-2">설명</th>
              <th className="border border-gray-300 px-4 py-2">예시</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => ( // Skip header row for rendering
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cellIndex === 0 ? <span className="font-bold">{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">1.</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          단위시험계획서는 시스템을 구성하는 가장 작은 실행 단위인 개별 프로그램(모듈) 또는 컴포넌트에 대해 독립적으로 수행할 시험의 범위, 목표, 일정, 환경, 절차 및 합격 기준 등을 상세하게 정의한 문서입니다. 이는 코드 레벨에서 개발된 기능이 설계된 대로 정확하고 오류 없이 동작하는지 확인하기 위한 활동의 계획을 담고 있습니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>초기 오류 제거:</strong> 가장 작은 단위에서 오류를 조기에 발견하고 제거하여, 이후 통합 시험이나 시스템 시험에서 발생할 수 있는 복잡한 오류를 사전에 예방하고 결함 수정 비용을 최소화합니다.</li>
          <li><strong>기능별 정확성 검증:</strong> 개발된 <strong>개별 기능(모듈)</strong>이 기능 정의서 및 상세 설계서의 명세에 따라 정확하게 동작하는지 독립적으로 확인하는 기준을 제공합니다.</li>
          <li><strong>개발 품질 향상:</strong> 개발자가 자신의 코드를 직접 검증하는 과정을 표준화하여 코딩 품질과 설계 준수 여부를 스스로 높이도록 유도합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 시스템의 최소 단위 구성 요소들이 충분하고 체계적인 테스트를 거쳤는지 확인하고, <strong>테스트 커버리지(범위)</strong>의 적정성을 평가하는 데 필요한 공식적인 근거를 제공합니다.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">3.</span> 작성 주체 및 시점 (Author and Timing)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">항목</th>
                <th className="border border-gray-300 px-4 py-2">상세 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">작성 주체</td>
                <td className="border border-gray-300 px-4 py-2">해당 프로그램을 실제로 개발한 개발자 또는 단위 시험을 책임지는 개발 리더가 주도적으로 작성합니다. (프로젝트 관리자 또는 품질 관리자(QA)의 검토를 받습니다.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 상세 설계 단계가 완료되고 프로그램 구현(코딩)이 시작되기 직전 또는 구현과 병행하여 작성됩니다. (시험할 대상 기능과 설계가 확정된 시점)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로그램의 기능이나 설계가 변경되어 시험 항목이나 절차를 수정해야 할 경우 즉시 갱신하며, 시험 수행 후 결과 보고서 작성 시 최종 계획 대비 실적을 비교하는 자료로 활용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitTestPlan;

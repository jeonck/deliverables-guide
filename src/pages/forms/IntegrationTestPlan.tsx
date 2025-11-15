import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const IntegrationTestPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 대상 범위', '통합 시험을 수행할 모듈 그룹, 서브시스템, 또는 핵심 기능 목록', '회원 관리 서브시스템 (회원가입, 로그인, 정보 수정 모듈 통합)'],
    ['요구사항ID', '해당 통합 시험이 검증하는 기능과 관련된 요구사항 ID', 'REQ-001, REQ-002, REQ-003'],
    ['통합 전략 및 순서', '모듈을 결합하는 방법(상향식/하향식 등)과 구체적인 통합 단계별 순서', '상향식 통합 (회원가입 -> 로그인 -> 정보 수정 순서)'],
    ['시험 환경', '통합된 모듈을 실행하고 테스트할 시스템 환경 및 연동 환경(Dummy/Stub 사용 여부 등)', '통합 테스트 서버 (Test-Server), JDK 11, Oracle 19c, Selenium'],
    ['시험 항목', '인터페이스 연결, 데이터 전달 정확성, 프로세스 흐름, 모듈 간의 기능 연동 오류 등', '회원가입 후 로그인 성공 여부, 정보 수정 후 DB 반영 여부'],
    ['합격 기준', '통합 시험을 통과하기 위한 기준 (예: 인터페이스 오류 발생률, 주요 프로세스 흐름의 정상 동작 여부)', '주요 기능 프로세스 100% 정상 동작, 인터페이스 오류 0건'],
    ['일정 및 책임', '통합 시험 수행 일정 및 단계별 시험 담당자', '2023.01.15 ~ 2023.01.20 (담당: 김철수)'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">통합시험 계획서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="통합시험계획서"
          fileName="통합시험계획서.xlsx"
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
          통합시험계획서는 <strong>단위 시험(Unit Test)</strong>을 통과한 개별 모듈 및 컴포넌트들을 결합하여 시스템의 특정 기능 또는 서브시스템을 구성한 후, 이들이 상호 연동하여 정상적으로 동작하는지 확인하기 위한 시험의 범위, 목표, 일정, 환경, 절차 및 합격 기준 등을 상세하게 정의한 문서입니다. 이는 모듈 간의 인터페이스 및 데이터 흐름에 초점을 맞춥니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>인터페이스 오류 발견:</strong> 개별 모듈 간의 데이터 전달, 호출 및 제어 흐름이 설계된 명세대로 정확하게 이루어지는지 확인하여, 모듈 연동 시 발생하는 오류를 조기에 발견하고 해결합니다.</li>
          <li><strong>시스템 구조의 정합성 검증:</strong> 시스템의 <strong>설계 구조(아키텍처)</strong>를 기반으로 모듈들이 올바르게 결합되었는지, 그리고 프로세스 정의서에 따른 업무 흐름이 시스템 기능 연동을 통해 구현되었는지 검증합니다.</li>
          <li><strong>통합 방법론 정의:</strong> 상향식(Bottom-up), 하향식(Top-down), 샌드위치(Sandwich) 등 프로젝트에 적합한 모듈 통합 전략을 정의하고 이에 따른 시험 순서를 결정하는 기준이 됩니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 시스템의 모듈 결합 단계가 체계적인 절차를 거쳤는지, 그리고 주요 인터페이스 기능에 대한 테스트가 충분히 수행되었는지 확인하는 공식적인 근거를 제공합니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 테스트 매니저 (Test Manager) 또는 <strong>품질 관리자 (QA)</strong>가 주도하여 작성합니다. (각 모듈 개발팀과의 협의가 중요합니다.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 상세 설계 단계가 완료되어 모듈 간의 인터페이스 정의가 확정된 직후에 작성됩니다. (단위 시험 직후에 수행될 계획이 확정된 시점)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 구조나 인터페이스 정의가 변경되어 통합 범위나 순서를 수정해야 할 경우 즉시 갱신하며, 시험 수행 후 결과 보고서 작성 시 활용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IntegrationTestPlan;

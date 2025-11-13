import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const RequirementsTraceabilityMatrix: React.FC = () => {
  const tableData = [
    ['RFP', null, '제안서', null, '수행계획서', null, '분석 단계', '설계 단계', '구현 단계', '시험 단계', null, null, null, null, null, '기타'],
    ['page', '번호', '내용', 'page', '번호', '내용', '요구 사항 ID', '화면 UI ID', '배치 Job ID', '트랜 잭션 ID', '이벤트 ID', '프로 그램 소스 ID', '단위 테스트 시나 리오 ID', '통합 테스트 시나 리오 ID', '사용자 테스트 시나 리오 ID', null],
    ['1', '10', '회원가입 기능', '2', '25', '사용자 인증 및 가입', 'REQ-001', 'UI-001', '', 'TRN-001', 'EVT-001', 'PGM-001', 'UT-001', 'IT-001', 'UAT-001', ''],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">요구사항 추적표</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="요구사항추적표"
          fileName="요구사항추적표.xlsx"
        />
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border-2 border-gray-300">
          <thead>
            <tr>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">RFP</th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">제안서</th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">수행계획서 (착수단계)</th>
              <th className="border border-gray-300 px-4 py-2">분석 단계</th>
              <th className="border border-gray-300 px-4 py-2">설계 단계</th>
              <th className="border border-gray-300 px-4 py-2">구현 단계</th>
              <th colSpan={6} className="border border-gray-300 px-4 py-2">시험 단계</th>
              <th className="border border-gray-300 px-4 py-2">기타</th>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2">page</th>
              <th className="border border-gray-300 px-4 py-2">번호</th>
              <th className="border border-gray-300 px-4 py-2">내용</th>
              <th className="border border-gray-300 px-4 py-2">page</th>
              <th className="border border-gray-300 px-4 py-2">번호</th>
              <th className="border border-gray-300 px-4 py-2">내용</th>
              <th className="border border-gray-300 px-4 py-2">요구 사항 ID</th>
              <th className="border border-gray-300 px-4 py-2">화면 UI ID</th>
              <th className="border border-gray-300 px-4 py-2">배치 Job ID</th>
              <th className="border border-gray-300 px-4 py-2">트랜 잭션 ID</th>
              <th className="border border-gray-300 px-4 py-2">이벤트 ID</th>
              <th className="border border-gray-300 px-4 py-2">프로 그램 소스 ID</th>
              <th className="border border-gray-300 px-4 py-2">단위 테스트 시나 리오 ID</th>
              <th className="border border-gray-300 px-4 py-2">통합 테스트 시나 리오 ID</th>
              <th className="border border-gray-300 px-4 py-2">사용자 테스트 시나 리오 ID</th>
              <th className="border border-gray-300 px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">회원가입 기능</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">25</td>
              <td className="border border-gray-300 px-4 py-2">사용자 인증 및 가입</td>
              <td className="border border-gray-300 px-4 py-2">REQ-001</td>
              <td className="border border-gray-300 px-4 py-2">UI-001</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2">TRN-001</td>
              <td className="border border-gray-300 px-4 py-2">EVT-001</td>
              <td className="border border-gray-300 px-4 py-2">PGM-001</td>
              <td className="border border-gray-300 px-4 py-2">UT-001</td>
              <td className="border border-gray-300 px-4 py-2">IT-001</td>
              <td className="border border-gray-300 px-4 py-2">UAT-001</td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            {/* Add more table body rows here */}
          </tbody>
        </table>
      </div>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">📝</span> 요구사항 추적표 (Requirements Traceability Matrix) 정의
        </h2>
        <p className="mb-4 text-gray-700">
          정보시스템 감리 수행 시 활용되는 요구사항 추적표 (Requirements Traceability Matrix, RTM)는 요구사항 정의서에 기록된 개별 요구사항들이 프로젝트 진행 단계마다 적정하게 반영되었는지를 추적하고 확인할 수 있도록 작성하는 문서입니다.
        </p>
        <p className="mb-4 text-gray-700">
          쉽게 말해, '요구사항'이 프로젝트의 각 산출물(설계서, 구현 코드, 테스트 케이스 등)에 빠짐없이, 그리고 올바르게 구현되었는지를 검증하기 위한 추적 관리 목록이라고 할 수 있습니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">📌</span> 주요 목적 및 역할
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>누락 방지:</strong> 초기 정의된 요구사항이 설계, 구현, 테스트 등 후속 작업에서 빠짐없이 반영되었는지 확인하여 요구사항 누락을 방지합니다.</li>
          <li><strong>일관성 및 무결성 확보:</strong> 요구사항의 변경이나 수정이 발생했을 때, 관련 산출물들이 모두 업데이트되었는지 추적하여 프로젝트 전반의 일관성을 유지합니다.</li>
          <li><strong>감리 및 품질 관리:</strong> 감리원이 설계 단계나 테스트 단계에서 산출물을 점검할 때, 요구사항이 적절히 이행되었는지 확인하는 핵심 근거 자료로 사용되어 프로젝트 <strong>품질 보증(QA)</strong>에 기여합니다.</li>
          <li><strong>변경 영향 분석:</strong> 요구사항의 변경이 발생했을 때 어떤 산출물에 영향을 미치는지를 파악하여 변경 관리의 효율성을 높입니다.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">📜</span> 작성 주체 및 시점
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>작성 주체:</strong> 일반적으로 <strong>사업자 (개발사)</strong>가 작성하며, 프로젝트의 품질 관리 및 감리 대응을 위해 관리합니다.</li>
          <li><strong>최초 작성 시점:</strong> 주로 요구분석 단계에서 최초 작성되며, 프로젝트 진행에 따라 각 단계(설계, 구현, 테스트)의 산출물이 나올 때마다 지속적으로 갱신됩니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default RequirementsTraceabilityMatrix;
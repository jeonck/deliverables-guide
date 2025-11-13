import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const RequirementsDefinitionDocument: React.FC = () => {
  const tableData = [
    ['구성 요소', '설명', '예시'],
    ['요구사항 ID', '각 요구사항을 식별하기 위한 고유 번호', 'REQ-001'],
    ['요구사항명', '요구사항의 이름 또는 간략한 제목', '회원가입 기능'],
    ['설명', '요구사항에 대한 구체적인 설명', '사용자가 시스템에 회원으로 가입할 수 있도록 한다.'],
    ['중요도', '해당 요구사항의 중요 수준', '높음'],
    ['우선순위', '요구사항 구현의 우선순위', '1순위'],
    ['제약사항', '요구사항 이행과 관련된 제약 조건', '본인인증 필수'],
    ['수용여부', '해당 요구사항의 프로젝트 수용 결정 여부', '수용'],
    ['수용불가사유', '수용이 불가능할 경우 그 이유', ''],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">요구사항 정의서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="요구사항정의서"
          fileName="요구사항정의서.xlsx"
        />
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border-2 border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">구성 요소</th>
              <th className="border border-gray-300 px-4 py-2">설명</th>
              <th className="border border-gray-300 px-4 py-2">예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">요구사항 ID</td>
              <td className="border border-gray-300 px-4 py-2">각 요구사항을 식별하기 위한 고유 번호</td>
              <td className="border border-gray-300 px-4 py-2">REQ-001</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">요구사항명</td>
              <td className="border border-gray-300 px-4 py-2">요구사항의 이름 또는 간략한 제목</td>
              <td className="border border-gray-300 px-4 py-2">회원가입 기능</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">설명</td>
              <td className="border border-gray-300 px-4 py-2">요구사항에 대한 구체적인 설명</td>
              <td className="border border-gray-300 px-4 py-2">사용자가 시스템에 회원으로 가입할 수 있도록 한다.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">중요도</td>
              <td className="border border-gray-300 px-4 py-2">해당 요구사항의 중요 수준</td>
              <td className="border border-gray-300 px-4 py-2">높음</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">우선순위</td>
              <td className="border border-gray-300 px-4 py-2">요구사항 구현의 우선순위</td>
              <td className="border border-gray-300 px-4 py-2">1순위</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">제약사항</td>
              <td className="border border-gray-300 px-4 py-2">요구사항 이행과 관련된 제약 조건</td>
              <td className="border border-gray-300 px-4 py-2">본인인증 필수</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">수용여부</td>
              <td className="border border-gray-300 px-4 py-2">해당 요구사항의 프로젝트 수용 결정 여부</td>
              <td className="border border-gray-300 px-4 py-2">수용</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">수용불가사유</td>
              <td className="border border-gray-300 px-4 py-2">수용이 불가능할 경우 그 이유</td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <p className="mb-4 text-gray-700">
          정보시스템 감리 수행 시, 요구사항정의서는 계약문서에서 정한 과업내용이 적정하게 반영되었는지 점검하는 목적을 가지며, 이를 위해 각 요구사항 항목에는 다음과 같은 세부 정보가 기록되어야 합니다:
        </p>
        <p className="mb-4 text-gray-700">
          이러한 세부 항목들은 기능(Functional) 및 비기능(Non-functional) 요구사항별로 모두 기록되어야 하며, 특히 요구사항의 완전성, 정확성, 검증가능성, 추적성 등의 품질 특성을 만족하도록 작성되는 것이 필수적입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">✨</span> 요구사항 품질 평가 항목 (양식의 품질 기준)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>1. 완전성 (Completeness):</strong> 요구사항명세서에 식별된 기능/비기능 요구사항 중 누락된 항목이 없는지 확인합니다.</li>
          <li><strong>2. 정확성 (Accuracy):</strong> 기능/비기능 요구사항이 논리적으로 정확하게 기술되었는지 확인하며, 요구사항의 입력 조건, 처리 흐름, 출력 조건, 사용 권한 등이 정확한지 점검합니다.</li>
          <li><strong>3. 검증가능성 (Verifiability):</strong> 요구사항별로 검증이 가능하도록 기술되었는지, 명세에 대한 검증 기준 및 방법을 제시했는지 확인합니다. 이는 설계 단계의 검사기준서를 작성하기에 적정한지를 검증하는 부분입니다.</li>
          <li><strong>4. 추적성 (Traceability):</strong> 요구사항명세서와 요구 명세 이전 단계의 산출물(예: RFP, 과업수행계획서, 회의록) 간의 연관 항목 중 추적 관계가 식별되었는지 확인합니다. 모든 요구사항은 대비표를 이용하여 추적되어야 합니다.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">🔗</span> 요구사항정의서와 연계된 주요 문서 양식
        </h2>
        <p className="mb-4 text-gray-700">
          요구사항정의서는 프로젝트 전반에 걸친 추적성을 확보하기 위한 핵심 문서인 대비표 작성의 근거가 됩니다. 대비표는 과업항목의 누락 및 이행 여부를 점검하기 위한 문서로, 다음 두 가지를 통칭합니다:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>1. 과업대비표 (Task Comparison Table):</strong> 요구사항정의서를 기준으로 제안요청서, 제안서, 기술협상서, 사업수행계획서, 요구사항정의서 간의 과업 항목 누락 여부를 점검하기 위해 작성된 문서입니다.</li>
          <li><strong>2. 요구사항추적표 (Requirements Traceability Matrix):</strong> 요구사항정의서에 기록된 개별 요구사항이 프로젝트 진행 단계(분석, 설계, 구현 등)마다 적정하게 반영되었는지를 추적할 수 있도록 사업자가 요구분석 단계에 최초 작성하며, 각 사업 진행 단계마다 갱신하는 문서입니다.</li>
        </ul>
        <p className="mb-4 text-gray-700">
          결론적으로, 요구사항정의서는 이와 같이 정의된 필수 항목들을 각 요구사항별로 체계적이고 구체적으로 기록하여, 이후 설계, 구현, 시험 및 최종 과업 이행 여부 점검(종료단계 감리) 시 객관적인 검증 기준과 추적의 근거를 제공하는 형식으로 작성되어야 합니다.
        </p>
      </div>
    </div>
  );
};

export default RequirementsDefinitionDocument;

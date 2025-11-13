import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const DatabaseStandardDesignGuidelines: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['명명 규칙', '테이블, 컬럼, 인덱스, 뷰, 제약조건 등에 대한 한글/영문 명칭 규칙, 약어 사용 규칙, 대/소문자 사용 규칙', '테이블: TB_접두사, 컬럼: snake_case, PK: PK_접두사'],
    ['데이터 타입 표준', '업무 데이터 유형별 사용 권장/금지 데이터 타입 및 길이 정의 (예: 날짜는 DATE 타입, 고정 길이는 CHAR 사용 금지)', '날짜: DATE, 시간: TIMESTAMP, 고정 길이 문자열: VARCHAR2 사용'],
    ['제약조건 표준', '기본 키(PK), 외래 키(FK), 고유 키(Unique Key), 널(NULL) 허용 규칙 등에 대한 표준 설정', '모든 테이블 PK 필수, FK는 참조 무결성 유지, NULL 허용 여부 명시'],
    ['모델링 표기법', '논리 모델 및 물리 모델 작성 시 사용해야 할 표준 표기법 및 다이어그램 규칙', 'ERD 표기법: Crow\'s Foot Notation, 논리/물리 모델 분리'],
    ['인덱스 및 성능 표준', '인덱스 생성 기준, 성능 향상을 위한 데이터 분할(Partitioning) 등 기술적 지침', '대용량 테이블에 PK/FK 인덱스 필수, 자주 조회되는 컬럼에 인덱스 생성'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">데이터베이스 표준설계 지침서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="데이터베이스표준설계지침서"
          fileName="데이터베이스표준설계지침서.xlsx"
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
          데이터베이스 표준 설계 지침서는 시스템의 데이터베이스를 모델링, 설계 및 구축하는 과정 전반에 걸쳐 반드시 준수해야 할 일련의 규칙, 명명 규칙, 표기법 및 기술적 표준을 상세하게 정의한 문서입니다. 이는 데이터베이스의 일관성, 품질 및 유지보수성을 확보하기 위한 표준화된 가이드라인 역할을 합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>일관성 확보:</strong> 모든 테이블, 컬럼, 인덱스 등의 명칭, 표기법, 데이터 타입을 통일하여 데이터베이스 구조의 일관성을 높이고 개발자 간의 혼란을 방지합니다.</li>
          <li><strong>품질 향상:</strong> 정의된 표준에 따라 데이터 무결성 제약조건, 인덱스 전략 등을 적용하여 데이터베이스의 품질(정확성, 무결성)과 성능을 보장합니다.</li>
          <li><strong>유지보수 용이성:</strong> 표준화된 구조는 개발 완료 후 시스템을 운영하고 유지보수할 때 데이터 구조 파악 및 변경을 용이하게 하여 총 소유 비용(TCO)을 절감합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터베이스 정의서 및 실제 구축된 스키마가 합리적인 표준을 준수하고 있는지, 그리고 모델링의 적정성을 확보했는지 확인하는 핵심 기준 문서로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 <strong>데이터 모델러(Data Modeler)</strong>나 <strong>데이터베이스 관리자(DBA)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트의 착수/계획 단계에서 데이터 모델링이 시작되기 이전에 프로젝트 초기 환경 설정의 일환으로 수립되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트를 진행하며 새로운 기술 스택이나 데이터 유형이 추가되거나, 기존 표준에 중대한 문제점이 발견될 경우 PM의 승인 하에 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DatabaseStandardDesignGuidelines;

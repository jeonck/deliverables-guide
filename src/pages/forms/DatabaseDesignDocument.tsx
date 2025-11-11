import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const DatabaseDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['개념 데이터 모델', '업무 영역의 핵심 엔티티와 관계를 추상적으로 표현한 모델', 'ERD (개념적)'],
    ['논리 데이터 모델', '개념 모델을 특정 DBMS에 독립적인 형태로 상세화한 모델 (엔티티, 속성, 관계 정의)', '엔티티 정의서, 속성 정의서'],
    ['물리 데이터 모델', '논리 모델을 특정 DBMS에 종속적인 형태로 변환한 모델 (테이블, 컬럼, 인덱스 정의)', '테이블 정의서, 컬럼 정의서, 인덱스 정의서'],
    ['데이터 표준 적용 현황', '데이터 표준화 정의서에 따라 용어, 도메인, 코드 등이 데이터 모델에 적용된 현황', '표준 용어/단어/도메인/코드 적용률 95%'],
    ['데이터 무결성 제약조건', '데이터의 정확성과 일관성을 유지하기 위한 제약조건 (PK, FK, Unique, Check 등)', 'PK: CUST_ID, FK: ORDER_CUST_ID REFERENCES TB_CUSTOMER'],
    ['성능 최적화 방안', '데이터베이스 성능 향상을 위한 설계 방안 (인덱스 전략, 파티셔닝, 뷰 등)', '주요 테이블에 인덱스 생성, 대용량 테이블 파티셔닝 적용'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '데이터베이스설계서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '데이터베이스설계서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">데이터베이스 설계서</h1>
        <button
          onClick={handleExcelDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          엑셀 다운로드
        </button>
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
          데이터베이스 설계서는 정보시스템이 필요로 하는 모든 데이터의 논리적 및 물리적 구조를 통합적이고 상세하게 정의한 문서입니다. 이는 데이터 요구사항 분석부터 시작하여, 개념 모델, 논리 모델, 물리 모델에 이르는 데이터 설계 전 과정의 결과물과 데이터 표준, 무결성 제약조건, 성능 최적화 방안 등을 망라하는 최종적이고 공식적인 데이터 관리 명세입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>데이터 설계 통합 기준 제시:</strong> 프로젝트의 모든 데이터 관련 산출물(테이블, 컬럼, 관계 등)을 하나의 일관된 문서로 통합하여 관리 및 활용의 효율성을 높입니다.</li>
          <li><strong>시스템 정합성 확보:</strong> 시스템 기능(프로세스, 프로그램)이 요구하는 데이터가 정확하고 효율적인 구조로 설계되었는지 검증하고, 데이터 무결성을 보장하는 기준을 제공합니다.</li>
          <li><strong>성능 및 안정성 기반:</strong> 인덱스 전략, 테이블 분할(Partitioning), 저장 공간 할당 등 데이터베이스의 성능과 안정성을 확보하기 위한 기술적 설계 방안을 확정합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터 모델링의 적정성, 표준 준수 여부, 기술적 타당성, 보안 요구사항 반영 여부 등 시스템의 데이터 품질을 종합적으로 평가하는 가장 중요한 기준 문서로 활용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 아키텍트 (DA), 데이터 모델러, 또는 DBA가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계 이후에 논리 데이터 모델링이 완료되고, 이를 물리 모델로 변환하는 시점인 시스템 상세 설계 단계에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 진행 중 데이터 구조 변경, 성능 최적화 등으로 인해 논리적/물리적 설계에 수정이 발생할 경우 지속적으로 갱신되어 최종 구축된 DB 구조를 완벽하게 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DatabaseDesignDocument;

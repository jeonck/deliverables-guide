import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const TableDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['테이블 명칭 및 설명', '테이블의 물리명 및 해당 테이블이 관리하는 데이터에 대한 논리적 정의', '물리명: TB_CUSTOMER, 논리명: 고객 테이블, 설명: 고객의 기본 정보를 관리'],
    ['컬럼 목록', '테이블에 포함되는 모든 컬럼의 물리명, 데이터 타입, 길이, NULL 허용 여부 등 세부 정보', '컬럼 물리명: CUST_ID, 데이터 타입: VARCHAR2(10), NULL 허용 여부: NOT NULL'],
    ['기본 키(PK) 정의', '테이블의 인스턴스를 유일하게 식별하는 기본 키 컬럼 및 제약조건 명칭', 'PK 컬럼: CUST_ID, 제약조건명: PK_TB_CUSTOMER'],
    ['외래 키(FK) 정의', '다른 테이블과의 관계(Relationship)를 정의하는 외래 키 컬럼, 참조 테이블, 그리고 참조 무결성 처리 방식', 'FK 컬럼: ORDER_CUST_ID, 참조 테이블: TB_ORDER, 처리 방식: ON DELETE CASCADE'],
    ['인덱스 정의', '데이터 검색 성능 향상을 위해 정의된 모든 인덱스 목록, 구성 컬럼, 인덱스 유형', '인덱스명: IDX_CUSTOMER_NAME, 구성 컬럼: CUST_NM, 유형: 일반 인덱스'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">테이블 정의서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="테이블정의서"
          fileName="테이블정의서.xlsx"
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
          <strong>테이블 정의서 (Table Definition Document)</strong>는 데이터베이스의 물리적 설계 산출물로, 시스템에서 사용하는 모든 데이터베이스 테이블 각각에 대해 테이블의 물리적 명칭, 논리적 엔티티 명칭, 테이블에 포함되는 모든 컬럼(Column) 목록 및 특성, 기본 키(Primary Key), 외래 키(Foreign Key) 및 인덱스 등의 상세한 기술 정보를 명세화한 문서입니다. 이는 데이터베이스 구축 및 구현의 최종 설계 명세입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>물리적 DB 구축 및 관리 기준:</strong> 실제 데이터베이스를 생성(DDL)하고 운영하는 데 필요한 모든 물리적 정보를 제공하여, DB 구축의 정확성을 보장하는 핵심 기술 문서입니다.</li>
          <li><strong>데이터 모델의 물리적 구현 검증:</strong> <strong>논리 데이터 모델(엔티티 정의서, 속성 정의서)</strong>의 내용이 DBMS 환경에 맞춰 오류 없이 물리적으로 변환되었는지 확인하는 기준으로 사용됩니다.</li>
          <li><strong>데이터 접근 및 프로그램 개발 지원:</strong> 프로그램 개발자가 데이터에 접근하고 SQL문을 작성할 때 필요한 정확한 테이블 및 컬럼 명칭, 데이터 타입 정보를 제공합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터 표준 준수 여부, 무결성 제약조건의 적절한 설정, 성능 최적화를 위한 인덱스 설계 등이 타당한지 검토하는 주요 기술 검토 기준으로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2">논리 데이터 모델링이 완료되고, 이를 특정 DBMS 환경에 맞춰 물리 모델로 변환하는 시점인 상세 설계 단계에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">DB 구축 직전까지 DBMS 환경 변화, 성능 최적화 등으로 인해 테이블 구조(컬럼 추가/삭제, 타입 변경, 인덱스 추가)에 수정이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableDefinitionDocument;

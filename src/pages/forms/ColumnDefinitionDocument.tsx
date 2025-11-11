import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const ColumnDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['테이블/컬럼 물리명', '실제 데이터베이스에 생성될 테이블명과 컬럼명 (물리명)', '테이블명: TB_CUST, 컬럼명: CUST_ID'],
    ['DBMS 타입 및 길이', '사용되는 DBMS (예: Oracle, MySQL)에 따른 구체적인 데이터 타입 및 길이', 'DBMS 타입: VARCHAR2, 길이: 10 (Oracle)'],
    ['NULL 허용 여부', '컬럼에 값이 없어도 되는지 여부 (NULL/NOT NULL)', 'NULL 허용 여부: NOT NULL'],
    ['기본값 (Default Value)', '값을 입력하지 않을 경우 자동으로 설정되는 기본값', '기본값: SYSDATE (Oracle)'],
    ['주/외래 키 지정', '컬럼이 기본 키(PK)나 외래 키(FK) 역할을 하는지 명시', 'PK (Primary Key)'],
    ['논리 속성명 연계', '해당 컬럼이 대응되는 논리적 속성명을 함께 명시하여 설계 일관성을 확인', '논리 속성명: 고객식별번호'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '컬럼정의서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '컬럼정의서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">컬럼 정의서</h1>
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
          <strong>컬럼 정의서 (Column Definition Document)</strong>는 데이터베이스의 물리적 설계 단계에서 도출된 모든 테이블의 컬럼(Column) 각각에 대해 컬럼 물리명, 데이터베이스 타입, 길이, 제약조건(NULL/NOT NULL), 기본값(Default Value), 그리고 컬럼의 논리적인 속성명을 상세하게 명세화한 문서입니다. 이는 <strong>실제 데이터베이스를 구축(DDL 생성)</strong>하는 데 필요한 최종 기술 스펙을 제공합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>물리적 DB 구축 기준 제시:</strong> 논리적 속성을 시스템의 <strong>물리적 데이터베이스 환경(DBMS)</strong>에 맞게 변환하고, 실제 테이블과 컬럼을 생성하기 위한 구현의 기준을 제공합니다.</li>
          <li><strong>데이터 무결성 최종 확보:</strong> 데이터베이스 시스템이 강제해야 할 <strong>물리적 제약조건(PK, FK, NULL 허용 여부, Check 제약 등)</strong>을 명확히 정의하여 데이터의 무결성을 최종적으로 보장합니다.</li>
          <li><strong>프로그램 개발 및 SQL 작성 지원:</strong> 개발자가 데이터베이스에 접근하거나 데이터를 화면에 표시/입력 처리할 때, 해당 속성의 정확한 컬럼 물리명과 데이터 형식을 명시하여, SQL 문 작성의 정확성과 시스템 효율성을 높입니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터베이스 정의서 및 속성 정의서의 논리적 내용이 실제 데이터베이스 스키마로 정확하고 오류 없이 구현되었는지 확인하는 최종 기술 검토 기준으로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2">DB 구축 직전까지 DBMS 환경 변화, 성능 최적화 등으로 인해 컬럼명, 타입, 길이, 제약조건 등에 수정이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ColumnDefinitionDocument;

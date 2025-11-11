import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const EntityDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['엔티티 명칭 및 정의', '엔티티의 표준 이름, 약어, 그리고 해당 엔티티가 의미하는 바에 대한 상세한 설명', '엔티티명: 고객, 약어: CUST, 정의: 시스템에 등록된 개인 또는 법인 고객 정보'],
    ['주 식별자 (Primary Key)', '해당 엔티티의 인스턴스를 유일하게 식별하는 속성(컬럼) 정의', '속성명: 고객ID, 물리명: CUST_ID, 데이터타입: VARCHAR(10)'],
    ['속성 목록', '엔티티를 구성하는 모든 속성(컬럼)에 대한 논리명, 물리명, 데이터 타입/길이, 필수 여부(NULL 허용), 설명 등 상세 정의', '논리명: 고객명, 물리명: CUST_NM, 데이터타입: VARCHAR(100), 필수여부: Y, 설명: 고객의 전체 이름'],
    ['관계 정의', '해당 엔티티가 다른 엔티티와 맺고 있는 관계 유형 (1:1, 1:N, M:N) 및 관계의 의미 (Relationship)', '관계 엔티티: 주문, 관계 유형: 1:N, 관계 의미: 고객은 여러 주문을 할 수 있다.'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '엔티티정의서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '엔티티정의서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">엔티티 정의서</h1>
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
          <strong>엔티티 정의서 (Entity Definition Document)</strong>는 데이터베이스 설계의 논리적 모델링 단계에서 도출된 <strong>모든 주요 엔티티(Entity)</strong>에 대해 고유의 명칭, 정의, 속성(Attribute) 목록 및 설명, 주 식별자(Primary Key), 그리고 다른 엔티티와의 관계 등을 상세하고 체계적으로 명세화한 문서입니다. 이는 시스템에서 관리해야 할 핵심 데이터 구조를 규정하는 기본 문서입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>논리적 데이터 구조 확정:</strong> 시스템이 다루어야 할 데이터의 종류와 형태를 명확하게 정의하고, 이들이 데이터 모델 내에서 갖는 논리적인 의미와 역할을 확정하는 기준을 제공합니다.</li>
          <li><strong>데이터 모델링 정합성 검증:</strong> 정의된 엔티티와 속성들이 업무 요구사항(현행 업무 분석서) 및 <strong>데이터 표준(데이터 표준화 정의서)</strong>을 정확하게 반영하고 있는지 검증하는 기반 자료입니다.</li>
          <li><strong>데이터 흐름 분석의 기초:</strong> 각 엔티티에 어떤 데이터가 저장되고, 어떤 엔티티와 연관되어 사용되는지 파악하여 프로세스 설계 및 프로그램 개발 시 데이터 흐름을 이해하는 데 도움을 줍니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터 모델의 논리적 적정성, 업무 요구사항 반영도, 데이터베이스 표준 적용 여부 등을 평가할 때 사용하는 가장 기본적인 데이터 모델링 산출물입니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 모델러(Data Modeler) 또는 <strong>시스템 분석가(SA)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계 이후에 논리 데이터 모델링 활동을 수행하는 시점에 작성됩니다. 이는 데이터베이스 정의서 작성의 선행 작업입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">논리 모델이 물리 모델로 전환되거나, 업무 요구사항 변경으로 인해 엔티티의 추가/삭제/속성 변경이 발생할 경우 지속적으로 갱신하여 최신 논리 구조를 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EntityDefinitionDocument;

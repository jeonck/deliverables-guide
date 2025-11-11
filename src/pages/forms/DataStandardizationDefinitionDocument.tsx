import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const DataStandardizationDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['표준 용어 정의', '시스템 내 모든 용어에 대한 표준 명칭, 정의, 약어 등을 정의한 목록 (표준 용어 사전)', '고객 (Customer), 고객 식별 번호 (Cust_ID)'],
    ['표준 단어 정의서', '표준 용어를 구성하는 가장 기본적인 최소 단위의 명사형 단어에 대한 표준(단어명, 영문명, 약어 등)을 정의합니다. 이는 용어 생성 시 중복 및 불일치를 방지하는 기반이 됩니다.', '고객, 계약, 일자, 번호 등의 원자 단어'],
    ['표준 도메인 정의', '데이터가 가질 수 있는 값의 범위나 유형을 정의한 목록 (예: 숫자, 날짜, 금액)', '금액 (NUMBER, 18, 2), 날짜 (DATE)'],
    ['표준 코드 정의', '시스템에서 공통으로 사용되는 코드 목록 및 코드 값의 의미 (예: 상태 코드, 성별 코드)', '상태 코드 (01: 정상, 02: 대기, 03: 오류)'],
    ['데이터 명명 규칙', '테이블, 컬럼, 인덱스 등의 명칭을 생성할 때 준수해야 할 구체적인 규칙', '테이블: TB_접두사, 컬럼: snake_case, PK: PK_접두사'],
    ['데이터 타입 표준', '업무적 특성에 따른 표준 데이터 타입 및 길이 정의 (예: 주민등록번호는 항상 13자리, 금액은 숫자 18자리)', '주민등록번호 (CHAR, 13), 금액 (NUMBER, 18, 2)'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '데이터표준화정의서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '데이터표준화정의서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">데이터 표준화 정의서</h1>
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
          데이터 표준화 정의서는 정보시스템의 데이터를 관리하는 데 필요한 일관된 규칙과 기준을 명문화한 문서입니다. 이는 데이터 요소(컬럼), 도메인, 코드, 용어 등에 대한 표준 이름, 정의, 형식, 허용 값 등을 통일시켜 시스템 전반에 걸쳐 데이터의 의미적 일관성을 확보하고 데이터 품질을 유지하기 위한 핵심 기준 문서입니다.
        </p>
        <p className="mb-4 text-gray-700">
          데이터 표준화 정의서는 전사적인 데이터 품질 및 상호 운용성을 확보하기 위해 수립하는 기준 문서이며, 주요 구성 요소는 다음과 같습니다.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">표준 용어 정의서 (Standard Vocabulary Definition):</h3>
        <p className="mb-2 text-gray-700">
          업무적으로 사용되는 개념이나 데이터 항목에 대해 전사적인 <strong>통일된 이름(명칭)</strong>과 명확한 정의를 부여합니다.
          예: '고객명', '계약일자' 등.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">표준 단어 정의서 (Standard Word Definition):</h3>
        <p className="mb-2 text-gray-700">
          표준 용어를 구성하는 가장 기본적인 최소 단위의 명사형 단어에 대한 표준(단어명, 영문명, 약어 등)을 정의합니다. 이는 용어 생성 시 중복 및 불일치를 방지하는 기반이 됩니다.
          예: '고객', '계약', '일자', '번호' 등의 원자 단어.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">표준 도메인 정의서 (Standard Domain Definition):</h3>
        <p className="mb-2 text-gray-700">
          데이터 <strong>컬럼(속성)</strong>이 가질 수 있는 <strong>성격(데이터 형식)</strong>을 그룹화한 개념입니다. 주로 데이터 타입(예: 문자형, 숫자형, 날짜형), 길이, 저장 및 표현 형식, 그리고 허용 가능한 값의 범위나 목록(표준 코드 포함) 등을 정의하여 데이터의 일관성을 확보합니다.
          예: '금액 도메인' (숫자형, 길이 15, 소수점 2자리), '날짜 도메인' (DATE 타입, YYYY-MM-DD 형식).
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">표준 코드 정의서 (Standard Code Definition):</h3>
        <p className="mb-4 text-gray-700">
          표준 도메인의 한 유형으로, 특정 데이터 항목이 미리 정해진 값의 목록을 가질 때 그 코드값과 코드명을 정의합니다 (예: 성별 코드 'M/F', 부서 코드).
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>데이터 품질 및 일관성 확보:</strong> 시스템 내외부에서 사용되는 모든 데이터의 용어와 의미를 통일하여 데이터의 정확성, 일관성 및 공유성을 극대화합니다.</li>
          <li><strong>업무 이해도 증진:</strong> 표준 용어 사전을 제공하여, 기획자, 개발자, 사용자 등 모든 이해관계자가 데이터에 대한 동일한 이해를 갖도록 돕습니다.</li>
          <li><strong>시스템 개발 및 유지보수 효율 증대:</strong> 데이터 명칭, 타입 등이 표준화됨으로써 데이터베이스 설계, 프로그램 개발, 인터페이스 구축 등의 작업이 효율화되고, 시스템 변경 및 유지보수가 용이해집니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터베이스 정의서 및 현행 시스템 분석 결과와 비교하여, 데이터 표준이 적절하게 정의되었고 개발 산출물에 충실히 적용되었는지 검증하는 기준을 제공합니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 모델러(Data Modeler) 또는 <strong>데이터 아키텍트(DA)</strong>가 주도적으로 작성하며, 발주처의 업무 담당자와 협의하여 표준 용어를 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 착수 단계 또는 요구분석 단계 초기에 데이터 모델링 활동을 시작하기 이전에 수립되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 진행 중 새로운 데이터 용어, 코드, 도메인이 추가되거나 기존 표준에 대한 변경 요청이 있을 경우 지속적으로 갱신하여 최신 상태를 유지해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Wrap "정보시스템 감리 관점" section in a div */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="text-2xl mr-2">👩‍⚖️</span> 정보시스템 감리 관점
          </h3>
          <p className="mb-4 text-gray-700">
            감리에서는 이 정의서들을 통해 시스템의 데이터 관리 상태를 점검합니다.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
            <li><strong>정의의 적정성:</strong> 표준 용어, 단어, 도메인 등이 업무 요구사항을 충분히 반영하고 명확하며 유일하게 정의되었는지 확인합니다.</li>
            <li><strong>적용의 일관성:</strong> 실제 구축된 <strong>데이터 모델(테이블, 컬럼명)</strong>과 데이터베이스가 정의된 표준을 일관되게 준수하고 있는지 확인합니다.</li>
            <li><strong>관리 체계:</strong> 정의된 표준을 유지하고 변경하는 관리 절차 및 조직이 수립되어 운영되고 있는지를 확인합니다.</li>
          </ul>
        </div>

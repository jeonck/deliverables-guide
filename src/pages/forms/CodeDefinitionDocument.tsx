import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const CodeDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['코드 목록 및 ID', '시스템에서 사용되는 모든 코드 그룹의 목록 및 고유 식별자 (예: STATUS_CD, GENDER_CD)', 'STATUS_CD (상태 코드), GENDER_CD (성별 코드)'],
    ['코드 상세 정의', '코드 그룹 내의 개별 코드 값 (Code Value), 코드 명칭 (Code Name), 코드 의미에 대한 상세 설명', 'STATUS_CD: 01 (정상), 02 (대기), 03 (오류)'],
    ['코드 체계 및 속성', '코드 값의 구성 형식 (문자, 숫자, 혼합), 길이, 유효 범위 등 기술적 속성', 'STATUS_CD: 숫자 2자리, GENDER_CD: 문자 1자리 (M/F)'],
    ['코드 관리 주체', '해당 코드의 생성, 변경, 폐기를 책임지는 부서 또는 담당자', '데이터 관리팀'],
    ['사용 엔티티/컬럼 연계', '해당 코드가 어떤 테이블의 어떤 컬럼에서 사용되는지 명시', 'STATUS_CD: TB_ORDER.ORDER_STATUS, TB_USER.USER_STATUS'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '코드정의서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '코드정의서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">코드 정의서</h1>
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
          <strong>코드 정의서 (Code Definition Document)</strong>는 정보시스템에서 공통적으로 사용되는 <strong>모든 코드(Code)</strong>의 목록, 코드 값(Code Value), 코드 명칭, 상세 정의, 사용 범위, 유효 기간 등을 체계적으로 정의하고 관리하는 문서입니다. 코드는 업무상 특정 의미를 간결하게 표현하기 위해 사용되는 약속된 기호나 숫자로, 데이터의 정확성과 통일성을 유지하는 데 필수적입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">항목</th>
                <th className="border border-gray-300 px-4 py-2">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 표준화 및 일관성 확보</td>
                <td className="border border-gray-300 px-4 py-2">시스템 전반에서 사용되는 코드 값과 그 의미를 표준화하여, 데이터의 입력, 저장, 조회 시 일관성과 정확성을 유지하도록 보장합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 개발 및 유지보수 효율 증대</td>
                <td className="border border-gray-300 px-4 py-2">모든 개발자가 동일한 코드 체계를 사용하여 프로그램을 구현하도록 하여, 코드 기반의 오류를 줄이고 유지보수의 효율성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">업무 및 데이터 분석 지원</td>
                <td className="border border-gray-300 px-4 py-2">코드의 의미가 명확하게 정의되어 있으므로, 업무 전문가와 분석가가 시스템 데이터를 정확하게 이해하고 활용하는 데 도움을 줍니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 표준 준수 여부, 코드 체계의 적절성 및 확장성, 그리고 시스템 기능 구현의 정확성을 확인하는 기준 자료로 사용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 <strong>데이터 모델러(Data Modeler)</strong>나 <strong>시스템 분석가(SA)</strong>가 주도적으로 작성하며, 발주처의 업무 전문가와 협의하여 코드를 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계에서 데이터 표준화 활동을 수행하는 시점에 작성됩니다. 이는 데이터 모델링 및 프로그램 설계의 선행 작업입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">업무 규칙 변경, 법규 변경 등으로 인해 새로운 코드 추가, 기존 코드 폐지, 코드 값 변경이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CodeDefinitionDocument;

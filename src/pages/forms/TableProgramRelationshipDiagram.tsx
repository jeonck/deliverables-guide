import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const TableProgramRelationshipDiagram: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['연관 목록', '시스템의 모든 프로그램(모듈)과 해당 프로그램이 접근하는 모든 데이터베이스 테이블의 목록', '프로그램: PGM_CUST_INQ, 테이블: TB_CUSTOMER, TB_ORDER'],
    ['접근 유형 (CRUD)', '각 프로그램이 해당 테이블에 대해 수행하는 구체적인 데이터 조작 유형 (C: Create/생성, R: Read/조회, U: Update/수정, D: Delete/삭제) 명시', 'PGM_CUST_INQ -> TB_CUSTOMER (R), PGM_ORDER_REG -> TB_ORDER (C, R, U)'],
    ['연관 도식', '프로그램과 테이블 간의 관계를 시각적으로 표현한 도표 (매트릭스 또는 다이어그램 형태)', '매트릭스: 행(프로그램), 열(테이블), 셀(CRUD 유형)'],
    ['주요 SQL 명세 (선택적)', '해당 프로그램에서 해당 테이블을 접근하는 핵심 SQL 구문을 간략하게 예시', 'PGM_CUST_INQ: SELECT * FROM TB_CUSTOMER WHERE CUST_ID = :cust_id'],
    ['인터페이스 연계', '테이블 접근이 외부 인터페이스와 연관되는 경우 해당 인터페이스 정보 명시', 'PGM_CUST_INQ -> TB_CUSTOMER (R) -> 외부 시스템 (고객 정보 API)'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">테이블/프로그램 연관도</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="테이블프로그램연관도"
          fileName="테이블프로그램연관도.xlsx"
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
          <strong>테이블/프로그램 연관도 (Table/Program Relationship Diagram)</strong>는 시스템을 구성하는 <strong>모든 프로그램(모듈)</strong>과 해당 프로그램이 접근하거나 사용하는 데이터베이스 테이블 간의 <strong>사용 관계(CRUD, Create/Read/Update/Delete)</strong>를 식별하고 이를 도식화하거나 목록화한 산출물입니다. 이는 시스템의 <strong>기능적 구성 요소(프로그램)</strong>와 데이터 구성 요소(테이블) 간의 기술적 연계성을 한눈에 파악할 수 있게 합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">연관성 분석 및 누락 방지</td>
                <td className="border border-gray-300 px-4 py-2">정의된 프로그램들이 필요한 모든 데이터에 정확하게 접근하는지, 또는 불필요한 데이터에 접근하지는 않는지 확인하여 설계 누락이나 보안 취약점을 사전에 검토합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 영향도 분석의 기반</td>
                <td className="border border-gray-300 px-4 py-2">특정 테이블의 구조나 정의가 변경될 경우, 어떤 프로그램들이 영향을 받는지를 쉽게 파악할 수 있도록 하여 유지보수 및 변경 관리의 기초 자료로 활용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 활용 최적화</td>
                <td className="border border-gray-300 px-4 py-2">테이블의 CRUD(생성, 조회, 수정, 삭제) 사용 패턴을 분석하여, 프로그램의 데이터 접근 방식이 효율적이고 최적화되었는지 검토하는 데 도움을 줍니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 프로그램 설계서와 데이터베이스 설계서 간의 정합성을 확인하고, 데이터 접근의 보안성 및 효율성을 평가하는 핵심 연계성 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA), 데이터 모델러(DM), 또는 <strong>프로젝트 리더(PL)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터베이스 설계와 프로그램 상세 설계가 완료되어, 각 프로그램이 어떤 테이블에 어떻게 접근하는지에 대한 정보가 확정된 상세 설계 단계 후반에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로그램의 로직 변경, 새로운 테이블 추가/삭제, 데이터 접근 방식 수정 등이 발생할 경우 지속적으로 갱신되어 실제 시스템의 연관 관계를 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableProgramRelationshipDiagram;

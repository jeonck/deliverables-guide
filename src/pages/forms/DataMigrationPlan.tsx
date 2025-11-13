import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const DataMigrationPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['전환 대상 데이터 목록', '기존 시스템에서 신규 시스템으로 전환할 테이블, 컬럼, 데이터 범위 정의', '테이블: TB_CUSTOMER, TB_PRODUCT / 컬럼: 고객명, 상품코드 / 범위: 2020년 이후 데이터'],
    ['데이터 매핑 및 변환 규칙', '기존 시스템 데이터와 신규 시스템 데이터 간의 1:1 매핑 정보, 데이터 타입/길이/값 변환 로직 상세 정의', '고객ID: ASIS.CUST_ID -> TOBE.CUST_NO (VARCHAR2(10) -> NUMBER)'],
    ['데이터 정제 및 보정 방안', '전환 전 데이터 오류, 불일치, 중복 등을 처리하는 정제(Cleansing) 절차 및 보정 기준', '정제: 중복 고객 정보 제거, 누락된 주소 정보 보정 / 보정: 표준화된 코드 값 적용'],
    ['전환 작업 절차', '데이터 추출(Extract), 변환(Transform), 적재(Load) 단계별 상세 작업 순서, 담당자, 소요 시간, 사용 도구 명시', '추출: Legacy DB에서 SQL 스크립트 실행 (2시간, DBA) / 변환: ETL 툴 사용 (4시간, 개발팀) / 적재: New DB에 Bulk Insert (1시간, DBA)'],
    ['전환 검증 및 합격 기준', '전환 완료 후 데이터의 정확성, 무결성, 정합성을 검증하는 방법, 검증 기준 및 합격 기준', '검증: 샘플 데이터 10% 비교, 레코드 수 일치 확인 / 합격: 데이터 불일치율 0.1% 미만'],
    ['비상 및 복구 계획', '전환 작업 실패 시 복구(Rollback) 방안, 책임자, 소요 시간 등 비상 대응 절차', '복구: 전환 전 백업 데이터로 롤백 (3시간, DBA) / 책임자: 데이터 전환 PM'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">데이터 전환 계획서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="데이터전환계획서"
          fileName="데이터전환계획서.xlsx"
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
          <strong>데이터 전환 계획서 (Data Migration Plan)</strong>는 기존 시스템(Legacy System) 또는 다른 데이터 소스에 존재하는 업무 데이터를 신규 정보시스템의 새로운 데이터베이스 구조에 맞게 <strong>추출(Extract), 변환(Transform), 적재(Load)</strong>하는 과정 전체를 체계적으로 계획한 문서입니다. 이는 초기데이터 구축 계획서 중 데이터 이관 및 정제 부분을 상세화한 것으로, 데이터의 연속성과 무결성을 확보하는 데 중점을 둡니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 정합성 및 무결성 보장</td>
                <td className="border border-gray-300 px-4 py-2">기존 데이터의 오류 및 불일치를 사전에 <strong>정제(Cleansing)</strong>하고, 새로운 시스템 구조에 맞춰 정확하게 변환하는 절차를 명확히 하여 데이터 품질을 유지합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 손실 및 오류 방지</td>
                <td className="border border-gray-300 px-4 py-2">전환 작업 중 발생할 수 있는 데이터 손실, 누락, 변환 오류 등의 위험을 최소화하기 위한 철저한 검증 및 복구 방안을 수립합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">전환 작업의 통제 기준</td>
                <td className="border border-gray-300 px-4 py-2">데이터 추출부터 최종 적재까지의 단계별 상세 작업 절차, 시간, 담당자를 정의하여, 전환 작업이 혼란 없이 통제 하에 이루어지도록 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 이관 범위의 적절성, 변환 로직의 정확성, 데이터 품질 확보 방안의 타당성을 평가하는 핵심 기준 자료로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 아키텍트 (DA), DBA, 및 데이터 전환 담당 개발자가 주도적으로 작성하며, 발주처의 현업 데이터 전문가와 협의합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터베이스 상세 설계가 완료되어 테이블 및 컬럼 구조가 확정되고, 이관 대상 데이터가 식별된 후인 상세 설계 단계 후반에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터 정제 및 시험 이관 결과에 따라 변환 로직이나 이관 범위가 변경되거나, 전환 일정 조정이 필요할 경우 지속적으로 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataMigrationPlan;

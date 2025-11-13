import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const InitialDataConstructionPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['구축 대상 데이터', '이관/구축이 필요한 데이터 유형 목록 (기준 정보, 코드, 초기 트랜잭션 등) 및 각 데이터의 규모', '기준 정보: 고객, 상품 (각 10만 건), 코드 정보: 50종'],
    ['데이터 흐름/변환 규칙', '기존 시스템(As-Is)의 데이터가 신규 시스템(To-Be)의 데이터베이스 구조에 맞게 변환되는 구체적인 매핑(Mapping) 및 변환 로직', '고객ID 매핑: As-Is.CUST_NO -> To-Be.CUST_ID, 이름 변환: 한글 -> 영문'],
    ['정제 및 검증 방안', '데이터 오류를 식별하고 수정하는 정제 절차와 구축 후 데이터의 정확성을 확인하는 검증 기준 및 방법', '정제: 중복 데이터 제거, 누락 값 보정, 검증: 샘플 데이터 10% 추출 후 수동 검증'],
    ['작업 일정 및 절차', '데이터 추출, 변환, 적재(Loading) 등 단계별 상세 작업 일정, 소요 시간, 투입 인력 및 작업 순서', '추출: 2024.01.01 (1일), 변환: 2024.01.02~03 (2일), 적재: 2024.01.04 (1일)'],
    ['장애 복구 방안', '데이터 구축 작업 실패 시 기존 시스템으로 복귀(Rollback)하거나 데이터를 재구축하는 비상 대책', 'Rollback: 이관 전 DB 스냅샷 복원, 재구축: 오류 데이터 수정 후 재실행'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">초기데이터 구축 계획서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="초기데이터구축계획서"
          fileName="초기데이터구축계획서.xlsx"
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
          초기데이터 구축 계획서는 신규 정보시스템의 정상적인 운영 개시를 위해 필요한 기준 정보(Master Data), 초기 트랜잭션 데이터, 코드 정보 등 모든 필수 데이터를 수집, 정제, 변환하여 새로운 데이터베이스에 적재(Loading)하는 과정 전체를 체계적으로 계획한 문서입니다. 이는 시스템 오픈 직전에 수행되는 매우 중요한 작업의 로드맵입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>운영 개시 준비:</strong> 신규 시스템이 기능을 수행하는 데 필요한 최소한의 데이터를 정확하고 완전하게 준비하여, 시스템 오픈 시점의 안정성을 확보합니다.</li>
          <li><strong>데이터 정합성 및 무결성 확보:</strong> 기존 시스템이나 수동 데이터에서 발생할 수 있는 데이터 오류, 중복, 불일치 등을 사전에 파악하고 <strong>정제(Cleansing) 및 변환(Transformation)</strong>하는 절차를 명확히 하여 데이터 품질을 보장합니다.</li>
          <li><strong>이관/구축 위험 관리:</strong> 데이터 구축 작업의 복잡성과 시간 소요를 사전에 예측하고, 단계별 일정, 자원 투입, 비상 복구(Rollback) 방안 등을 계획하여 작업 실패 위험을 최소화합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터 이관 및 구축 작업의 범위, 방법론, 품질 관리 방안이 적절하게 수립되었는지, 그리고 데이터 오류 처리 절차가 명확한지 확인하는 기준으로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 모델러, DBA, 이관 담당 개발자가 주도적으로 작성하며, 발주자 측의 현업 데이터 전문가와 협의하여 데이터의 정확성을 검증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터베이스 상세 설계가 완료되어 테이블 구조가 확정되고, 데이터 이관 대상과 규모가 파악된 후인 상세 설계 단계 후반에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">데이터 정제 결과에 따라 이관 대상 데이터나 변환 로직이 변경되거나, 시스템 오픈 일정이 수정될 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InitialDataConstructionPlan;

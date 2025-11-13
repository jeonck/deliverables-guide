import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const IntegrationTestResultDocumentForm: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 개요', '시험 대상 모듈 그룹 또는 서브시스템 명칭, 시험 환경, 시험 기간.', '대상: 주문-결제 서브시스템, 환경: 통합 테스트 서버, 기간: 2023-11-01 ~ 2023-11-05'],
    ['시험 시나리오 연계', '실행된 통합 시험 시나리오 목록 및 관련 설계서 (인터페이스 설계서, 프로세스 설계서) 연계 정보.', '시나리오 ID: ITS_ORDER_001, 관련 설계서: 인터페이스 설계서 v1.0, 프로세스 설계서 v1.0'],
    ['시험 실행 결과 - 실행 절차', '시나리오의 단계별 실행 순서 기록.', '1. 상품 선택 및 장바구니 담기, 2. 결제 정보 입력, 3. 결제 요청'],
    ['시험 실행 결과 - 예상 결과 vs. 실제 결과', '연동 결과로 기대했던 데이터 흐름/출력과 실제로 관찰된 결과 비교.', '예상: 주문 정보 DB 저장 및 결제 완료 메시지, 실제: 주문 정보 DB 저장 및 결제 완료 메시지'],
    ['시험 실행 결과 - 판정', '각 시나리오별 합격 (Pass) 또는 불합격 (Fail) 판정.', 'Pass'],
    ['결함 및 조치 내역', '발견된 결함 ID, 결함 내용, 심각도, 조치 내용, 재시험 결과.', '결함 ID: DEF_IT_001, 내용: 결제 모듈에서 상품 재고 차감 오류, 심각도: Critical, 조치: 재고 차감 로직 수정, 재시험 결과: Pass'],
    ['시험 요약 및 승인', '총 시험 시나리오 수, 합격률, 테스트 관리자 및 PL의 서명 (최종 승인).', '총 50개 시나리오, 합격률 96%, 테스트 관리자: 박테스터, PL: 이PL'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">통합 시험 결과서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="통합시험결과서"
          fileName="통합시험결과서.xlsx"
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
          <strong>통합 시험 결과서 (Integration Test Result Document)</strong>는 단위 시험을 통과한 개별 프로그램 또는 모듈들을 통합하여 통합 시험 시나리오에 따라 연동 시험을 수행한 후, 그 시험 과정, 관찰된 실제 결과, 그리고 합격/불합격 판정을 공식적으로 기록한 문서입니다. 이는 시스템 내부의 모듈 간 인터페이스 및 데이터 전달이 설계된 대로 정확히 동작했음을 증명하는 기록입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">모듈 연동 확인</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 모듈 간의 인터페이스 및 데이터 흐름이 인터페이스 설계서와 통합 시험 시나리오에 따라 오류 없이 작동했음을 입증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">결함 추적 및 관리</td>
                <td className="border border-gray-300 px-4 py-2">연동 과정에서 발생한 <strong>결함(Faults)</strong>을 식별하고, 해당 결함의 조치 내용 및 재시험 결과를 체계적으로 기록하여 결함 관리의 투명성을 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 시험의 전제 조건</td>
                <td className="border border-gray-300 px-4 py-2">통합 시험 결과서가 최종 승인되어야 시스템의 주요 구성 요소들이 시스템 시험 단계로 진입할 수 있는 품질 기준을 충족했음을 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시험 활동의 충실성, 모듈 간 인터페이스 구현의 정확성, 그리고 결함 조치 과정의 적절성을 평가하는 핵심 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 테스트 매니저, PL(Project Leader), 또는 통합 시험 담당자가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">통합 시험 시나리오를 실행한 직후에 발생하며, 발견된 모든 결함에 대한 조치가 완료된 후 최종적으로 확정됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">통합 시험 중 결함이 수정되어 <strong>재시험(Retest)</strong>을 수행했을 때, 해당 재시험 결과가 최신 내용으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IntegrationTestResultDocumentForm;

import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const AcceptanceTestPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 대상 및 범위', '최종 인수 시험을 수행할 시스템 범위 및 핵심 업무 프로세스', '전체 시스템, 핵심 업무 프로세스 (예: 주문 처리, 결제)'],
    ['시험 시나리오 및 케이스', '최종 사용자의 실제 업무 시나리오를 기반으로 작성된 시험 항목 및 구체적인 시험 단계, 예상 결과', '주문 시나리오: 상품 검색 -> 장바구니 담기 -> 결제 -> 주문 완료'],
    ['시험 환경', '실제 운영 환경과 유사한 독립적인 환경 (HW/SW) 구성 계획', '운영 환경과 동일한 사양의 테스트 서버, 실제 데이터베이스 복제본'],
    ['시험 데이터', '실제 업무 데이터를 모사한 테스트 데이터 준비 계획', '실제 고객 데이터 1000건, 상품 데이터 500건'],
    ['합격 기준', '인수 시험을 통과하고 시스템을 인수하기 위한 공식적인 기준 (예: 치명적 결함 0건, 핵심 기능 테스트 성공률 100%, 성능 목표 충족 여부)', '치명적 결함 0건, 핵심 기능 테스트 성공률 100%, 응답 시간 3초 이내'],
    ['일정 및 책임', '인수 시험의 수행 일정 및 발주자/사업자 측 시험 담당자 및 책임 범위', '2023.02.01 ~ 2023.02.15 (발주자: 김영희, 사업자: 박철수)'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '인수시험계획서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '인수시험계획서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">인수시험 계획서</h1>
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
          인수시험계획서는 개발된 정보시스템이 <strong>발주자(사용자)</strong>의 최초 요구사항과 계약 조건을 최종적으로 모두 충족시키는지 확인하기 위해 수행하는 시험의 범위, 목표, 환경, 절차 및 합격 기준 등을 상세히 정의한 문서입니다. 흔히 사용자 인수 시험(UAT, User Acceptance Test) 계획이라고도 불리며, 시스템의 사용 적합성을 최종적으로 판단하는 기준이 됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>요구사항 충족 최종 확인:</strong> 시스템이 사용자 관점에서 업무 수행에 필요한 모든 기능과 비기능적 요구사항을 만족하는지 최종적으로 확인합니다.</li>
          <li><strong>시스템 인수의 근거:</strong> 시험 결과를 바탕으로 발주자가 시스템의 운영 적합성을 공식적으로 승인하고, 시스템 인수를 결정하는 데 필요한 객관적인 근거를 제공합니다.</li>
          <li><strong>결함 검출 및 품질 보증:</strong> 시스템 시험(System Test) 과정에서 미처 발견되지 않은 업무적 오류나 사용성 문제를 최종적으로 검출하고 해결하여, 최종 시스템 품질을 보증합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 발주자의 요구사항 이행 여부와 시스템의 최종 인수 준비 상태를 평가하는 데 사용되는 가장 중요한 산출물입니다.</li>
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
                <td className="border border-gray-300 px-4 py-2">발주자(사용자) 측의 업무 전문가와 <strong>사업자(개발사) 측의 테스트 관리자(QA Manager)</strong>가 공동으로 협의하여 작성합니다. 실제 시험은 최종 사용자가 주도합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설계 단계 완료 후, 또는 통합 시험 계획 수립 시점에 맞춰 계획이 수립되어야 하며, 상세 시험 시나리오는 시스템 구축이 완료되기 전에 준비되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 기능의 큰 변경이나 최종 사용 환경의 변경이 있을 경우 갱신되며, 시험 수행 후 결과 보고서 작성을 위한 최종 기준으로 활용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceTestPlan;

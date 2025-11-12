import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const IntegrationTestScenario: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 시나리오 ID 및 개요', '연관된 업무 프로세스 기반의 시험 시나리오 명칭 및 목적', 'ITS_ORDER_001: 주문 생성부터 결제까지의 업무 흐름 테스트'],
    ['시험 대상 모듈/서브시스템', '연동 시험을 수행할 주요 모듈 및 인터페이스 목록', 'OrderService, PaymentService, InventoryService, Order-Payment Interface, Payment-Inventory Interface'],
    ['시험 데이터 및 조건', '시나리오 실행에 필요한 초기 데이터베이스 상태 및 입력 조건', 'DB: 사용자 user1, 상품 productA 재고 10개, 초기 주문 상태: 대기'],
    ['실행 절차 및 기대 결과', '단계별 실행 순서: 시나리오를 구성하는 모듈 호출, 데이터 입력, 화면 조작 등의 상세 절차. 중간/최종 기대 결과: 각 단계별 모듈의 반환 값, DB 상태 변화, 화면 출력 결과 등 예상 결과.',
      '1. 사용자 user1이 productA 1개 주문 (입력)\n   - 기대: OrderService.createOrder 호출, 주문 상태: 생성\n2. PaymentService.processPayment 호출 (입력)\n   - 기대: 결제 성공, InventoryService.deductStock 호출, 주문 상태: 결제 완료\n3. 최종 주문 내역 확인 (화면 조작)\n   - 기대: 주문 상태 "결제 완료" 확인, 재고 9개 확인'],
    ['통합 시험 환경', '시험을 수행할 서버, 네트워크, 테스트 베드 등 환경 명세', '개발 서버 (DEV_WAS_01, DEV_DB_01), 테스트 네트워크 (192.168.1.0/24)'],
    ['오류 처리 시험', '연동 실패 등 예외 상황 발생 시 오류 메시지 및 처리 로직에 대한 시험 절차', '결제 실패 시: PaymentService에서 오류 반환, OrderService에서 주문 상태 "결제 실패"로 변경, 사용자에게 오류 메시지 표시'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '통합시험시나리오');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '통합시험시나리오.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">통합 시험 시나리오</h1>
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
          <strong>통합 시험 시나리오 (Integration Test Scenario)</strong>는 단위 시험을 통과한 개별 프로그램 또는 모듈들이 서로 연동될 때, 데이터와 제어가 정확하게 전달되고 처리되는지 확인하기 위해 작성된 업무 흐름 기반의 시험 절차입니다. 이는 특히 시스템 내부의 모듈 간 인터페이스, 서브시스템 간 연동, 그리고 DB 접근이 문제없이 이루어지는지 검증하는 데 중점을 둡니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">인터페이스 정합성 검증</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 설계서와 인터페이스 설계서에 정의된 대로, 모듈 호출 및 데이터 송수신이 오류 없이 이루어지는지 집중적으로 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">업무 프로세스 흐름 확인</td>
                <td className="border border-gray-300 px-4 py-2">프로세스 설계서에 정의된 대로 여러 모듈을 거치는 복합적인 업무 흐름이 중단 없이 정상적으로 완료되는지 검증하여 시스템의 기능적 연계성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 통합 위험 감소</td>
                <td className="border border-gray-300 px-4 py-2">모듈 간 연동 문제(Integration Fault)를 조기에 발견하고 해결하여, 이후의 시스템 시험 및 인수 시험 단계로 오류가 전파되는 것을 방지합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 설계의 논리적 연결성, 모듈 간 인터페이스의 정확성, 그리고 시험 활동의 체계성을 평가하는 핵심 기준 자료로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 테스트 매니저, PL(Project Leader), 또는 <strong>시스템 분석가(SA)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로세스 설계서 및 인터페이스 설계서가 확정되고, 단위 시험이 완료된 후, 통합 시험 단계 진입 직전에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">모듈 간의 연동 방식, 데이터 규격, 또는 업무 프로세스에 변경이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IntegrationTestScenario;

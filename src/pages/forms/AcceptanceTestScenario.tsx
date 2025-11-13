import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const AcceptanceTestScenario: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 목표 및 범위', '인수 시험을 통해 최종적으로 검증할 핵심 업무 프로세스, 기능 및 비기능 요소.', '목표: 주문/결제, 재고 관리, 회원 관리 기능의 사용자 요구사항 충족 여부 검증. 범위: 웹/모바일 주문 시스템'],
    ['시험 시나리오 목록', '사용자 역할 및 주요 업무 기능별로 구성된 실제 업무 시나리오 목록.', 'ATS_ORDER_001: 일반 사용자 상품 주문 및 결제 시나리오, ATS_ADMIN_001: 관리자 주문 승인 및 배송 처리 시나리오'],
    ['시험 데이터 및 환경', '실제 운영 데이터와 유사한 대량/정제된 테스트 데이터 사용 명세 및 운영 환경과 동일한 환경 명세.', '데이터: 실제 운영 데이터의 10% 규모 (익명화 처리), 환경: 운영 서버와 동일한 하드웨어/소프트웨어 스펙의 UAT 서버'],
    ['단계별 실행 절차 및 기대 결과', '사용자 조작 순서를 중심으로 단계별 상세 실행 절차와 업무상 최종 기대 결과 명시.',
      '1. 사용자 ID/PW 입력 후 로그인 (기대: 로그인 성공, 메인 페이지 이동)\n2. 상품 검색 (기대: 검색 결과 목록 표시)\n3. 장바구니 담기 (기대: 장바구니에 상품 추가 확인)\n4. 결제하기 버튼 클릭 (기대: 결제 페이지 이동)\n5. 결제 정보 입력 후 결제 완료 (기대: 결제 성공 메시지, 주문 내역 확인)'],
    ['합격 기준', '시험 항목별 성공률, 치명적 결함 건수, 비기능적 요구사항(예: 성능) 충족 여부 등 시스템 인수 여부를 결정할 공식 기준.', '기능 시나리오 성공률 95% 이상, 치명적 결함 0건, 주요 결함 3건 이하, 응답 시간 3초 이내'],
    ['시험 조직 및 책임', '발주자 측 시험 담당자와 사업자 측 지원 인력의 역할 및 책임 정의.', '발주자: 업무팀장 (시험 총괄), 실무 담당자 (시나리오 실행 및 결과 검토). 사업자: 테스트 매니저 (시험 지원), 개발자 (결함 수정)'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">인수 시험 시나리오</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="인수시험시나리오"
          fileName="인수시험시나리오.xlsx"
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
          <strong>인수 시험 시나리오 (Acceptance Test Scenario)</strong>는 개발된 정보시스템이 <strong>발주자(최종 사용자)</strong>의 업무 요구사항과 계약 조건을 최종적으로 충족시키는지 확인하기 위해 사용자 관점에서 작성된 시험 절차입니다. 이는 <strong>사용자 인수 시험(UAT, User Acceptance Test)</strong>의 실행 근거가 되며, 시스템이 실제 업무에 투입될 준비가 완료되었는지 판단하는 데 중점을 둡니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">최종 사용자 요구 충족 확인</td>
                <td className="border border-gray-300 px-4 py-2">시스템이 최종 사용자의 실제 업무 환경에서 정확하게 작동하고, 업무 수행에 적합한지를 발주자 스스로 검증하게 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 인수의 최종 근거</td>
                <td className="border border-gray-300 px-4 py-2">시험 결과가 사전에 정의된 합격 기준을 만족할 경우, 발주자는 시스템을 공식적으로 <strong>인수(Acceptance)</strong>하고 운영 개시를 결정하는 객관적인 근거를 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">업무 적합성 및 사용성 평가</td>
                <td className="border border-gray-300 px-4 py-2">시스템 시험이 기술적 관점이라면, 인수 시험은 업무 적합성(Fitness for Purpose) 및 사용자 편의성(Usability) 관점에서 시스템을 평가합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 발주자의 요구사항 이행 여부를 사용자 관점에서 최종적으로 확인하고, 시스템의 인수 준비 상태를 평가하는 핵심 기준 자료로 활용합니다.</td>
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
                <td className="border border-gray-300 px-4 py-2">발주자(사용자) 측의 업무 전문가와 사업자(개발사) 측의 테스트 관리자가 공동으로 협의하여 작성하며, 발주자가 주도하여 검토 및 승인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설계 단계 후반 또는 시스템 시험 단계에 작성되며, 시스템 시험이 완료된 후에 실행되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">사용자 요구사항 변경이나 업무 프로세스의 최종 수정이 발생할 경우 즉시 갱신되어, 실제 인수에 필요한 최종 기준을 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceTestScenario;

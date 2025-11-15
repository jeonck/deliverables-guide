import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const SystemTestScenario: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 시나리오 ID 및 개요', '핵심 업무 프로세스 기반의 시나리오 명칭 및 시험 목적.', 'STS_ORDER_FULL: 주문 생성부터 배송 완료까지 전체 업무 흐름 검증'],
    ['요구사항ID', '해당 시스템 시험 시나리오가 검증하는 기능과 관련된 요구사항 ID', 'REQ-001, REQ-002, REQ-003, REQ-004'],
    ['시험 대상 및 환경', '시스템 전체를 대상으로 하며, 실제 운영 환경과 동일하거나 유사한 환경 명세.', '대상: 통합 시스템 (Web/WAS/DB), 환경: 운영 환경과 동일한 스테이징 서버'],
    ['기능 시험 시나리오', '사용자 역할별로 주요 업무를 시작부터 종료까지 수행하는 단계별 상세 절차 및 기대 결과.',
      '1. 일반 사용자 로그인\n2. 상품 검색 및 장바구니 담기\n3. 주문 및 결제 (신용카드)\n4. 관리자 로그인\n5. 주문 상태 확인 및 배송 처리\n6. 사용자 배송 완료 확인\n   - 기대: 모든 기능 정상 동작, 데이터 정합성 유지'],
    ['비기능 시험 시나리오', '성능, 보안, 안정성 등 비기능 요구사항에 대한 시험 시나리오.',
      '성능 시험: 동시 사용자 1000명 접속 시 응답 시간 3초 이내 유지\n보안 시험: SQL Injection, XSS 취약점 점검 및 접근 통제 기능 동작 확인\n안정성 시험: 24시간 연속 부하 테스트 시 시스템 다운 및 메모리 누수 없음'],
    ['시험 데이터 및 조건', '시나리오 실행에 필요한 대규모 테스트 데이터 및 시스템 초기 설정 조건.', '대규모 사용자 데이터 (10만 건), 상품 데이터 (1만 건), 초기 DB 상태: 클린 상태'],
    ['합격 기준', '시스템 시험을 통과하기 위한 성능 목표 달성률, 치명적 결함 발생 건수 등 공식 기준.', '성능 목표 90% 달성, 치명적 결함 0건, 주요 결함 5건 이하'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">시스템 시험 시나리오</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="시스템시험시나리오"
          fileName="시스템시험시나리오.xlsx"
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
          <strong>시스템 시험 시나리오 (System Test Scenario)</strong>는 완전히 통합된 정보시스템이 최종 사용 환경과 유사한 조건에서 요구사항을 전반적으로 충족시키는지 확인하기 위해 수행하는 종합적인 시험 절차를 정의한 문서입니다. 이는 단순히 모듈 간 연동(통합 시험)을 넘어, 시스템의 전체 기능, 성능, 보안, 안정성, 호환성 등 모든 측면을 사용자 관점의 실제 업무 시나리오를 통해 검증하는 데 중점을 둡니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">종합적인 요구사항 충족 검증</td>
                <td className="border border-gray-300 px-4 py-2">기능 요구사항 뿐만 아니라 비기능 요구사항 (성능, 보안, 안정성)까지 포함하여, 시스템이 최초 요구사항 정의서의 내용을 모두 충족하는지 최종적으로 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">운영 환경 적합성 확인</td>
                <td className="border border-gray-300 px-4 py-2">실제 운영 환경과 동일하거나 유사한 환경에서 시험을 수행함으로써, 시스템이 실제 환경에 적합하고 안정적으로 운영될 수 있는지 확인합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최종 품질 보증</td>
                <td className="border border-gray-300 px-4 py-2">단위 시험 및 통합 시험을 통해 발견되지 않은 시스템 레벨의 복합적인 오류를 발견하고 해결하여, 시스템의 최종 품질을 보증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 전반적인 완성도, 요구사항 이행 정도, 그리고 오픈 전 안정성을 평가하는 데 사용되는 가장 포괄적인 시험 기준 문서 중 하나입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 테스트 매니저, 품질 관리자 (QA Manager), 또는 <strong>시스템 분석가(SA)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">통합 시험이 완료되고 시스템 구현이 거의 완료된 후, 시스템 시험 단계 진입 직전에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">비기능 요구사항이나 업무 프로세스에 중대한 변경이 발생하여 시험 범위가 달라질 경우 지속적으로 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SystemTestScenario;

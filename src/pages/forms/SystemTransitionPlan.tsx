import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const SystemTransitionPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['전환 목표 및 범위', '전환 작업의 최종 목표 및 신규 시스템/기능/사용자 등 전환 대상 범위 정의', '목표: 2024년 7월 1일 신규 시스템 성공적 오픈, 범위: 전사 고객 관리 시스템'],
    ['전환 환경 및 구성', '신규 시스템 운영 환경의 최종 구성 및 전환 작업에 사용될 도구/스크립트', '운영 서버: AWS EC2, DB: Aurora, 도구: 데이터 이관 스크립트 (Python)'],
    ['전환 작업 상세 절차', '단계별 상세 작업 목록, 담당자, 소요 시간, 전제 조건 등 시간 단위의 구체적인 작업 순서 (예: 데이터 백업, DB 전환, 시스템 설정 변경, 최종 점검)', '1. 기존 DB 백업 (1시간, DBA), 2. 신규 DB 스키마 적용 (30분, 개발팀)'],
    ['데이터 전환/이관 계획', '데이터 이관 방법 (일괄 전환, 병행 운영 등), 데이터 이관 검증 방법 및 초기 데이터 구축 연계 방안', '이관 방법: 일괄 전환, 검증: 샘플 데이터 비교, 연계: 초기데이터 구축 계획서 참조'],
    ['비상 대응 및 롤백 계획', '전환 실패 시 판단 기준, 비상 연락망, 기존 시스템으로 복귀(Rollback)하는 상세 절차 및 복구 소요 시간', '실패 기준: 핵심 기능 30분 이상 장애, 롤백: 기존 시스템 복구 (2시간 소요)'],
    ['최종 점검 및 승인', '전환 완료 후 시스템의 정상 운영 여부를 최종 확인하는 점검 항목 및 발주처의 최종 승인 절차', '점검: 주요 업무 프로세스 5가지, 승인: 발주처 담당자 서명'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '시스템전환계획서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '시스템전환계획서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">시스템 전환 계획서</h1>
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
          <strong>시스템 전환 계획서 (System Transition Plan)</strong>는 신규 개발 또는 개선된 정보시스템을 실제 운영 환경에 투입하고 기존 시스템(Legacy System)에서 새로운 시스템으로 업무를 완전히 이관하는 과정 전체를 체계적으로 관리하고 통제하기 위한 상세 계획 문서입니다. 이는 시스템 <strong>성공적인 운영 개시(Go-Live)</strong>를 위한 최종 로드맵이자 위험 관리 전략서입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">운영 중단 최소화</td>
                <td className="border border-gray-300 px-4 py-2">전환 과정 중 발생할 수 있는 업무 중단 시간과 데이터 손실 위험을 최소화하기 위한 철저한 절차와 일정을 수립합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">성공적인 서비스 개시</td>
                <td className="border border-gray-300 px-4 py-2">시스템 오픈 직전에 수행되는 최종 점검, 데이터 이관, 환경 설정 변경 등의 모든 작업을 누락 없이 관리하여 시스템의 안정적인 운영 개시를 보장합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">비상 복구 및 롤백 전략</td>
                <td className="border border-gray-300 px-4 py-2">전환 작업 중 심각한 문제가 발생할 경우 <strong>기존 시스템 환경으로 즉시 복귀(Rollback)</strong>하거나 신규 시스템을 복구하는 비상 대응 절차를 정의하여 위험을 통제합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 오픈 전 최종 준비 상태, 전환 절차의 적절성, 그리고 장애 대응 방안의 타당성을 평가하는 최종 운영 준비 기준으로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 프로젝트 관리자 (PM) 및 시스템 운영/전환 담당자가 주도적으로 작성하며, 발주처의 IT 운영 조직과 긴밀히 협의하여 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 시험 단계가 완료되고, 인수 시험(UAT)이 진행되거나 임박한 시점에 작성됩니다. (오픈이 가시화된 단계)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">인수 시험 결과에 따라 전환 범위나 환경에 변경이 생기거나, 오픈 일정이 변경될 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SystemTransitionPlan;

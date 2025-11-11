import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const QualityAssuranceActivityPlanResult: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['활동 계획 대비 실적', '품질 검토, 감사, 교육 등 계획된 QA 활동 목록과 실제 수행 일시 및 결과 비교', '설계 검토 (계획: 2023.03.01, 실제: 2023.03.05, 결과: 3건의 주요 결함 발견)'],
    ['산출물 검토 결과', '설계서, 프로그램 목록 등 주요 산출물에 대한 검토 일자, 참석자, 발견된 주요 결함 및 조치 결과', '요구사항 정의서 (검토일: 2023.02.10, 참석자: PM, SA, QA, 결함: 5건, 조치: 완료)'],
    ['결함 현황 분석', '단위/통합/시스템 시험 등에서 발견된 결함의 분류(심각도, 유형), 발생 추이, 조치 현황 및 미처리 결함 목록', '심각도 상: 10건 (조치율 90%), 심각도 중: 20건 (조치율 100%)'],
    ['품질 측정 지표', '계획된 품질 지표 (예: 테스트 커버리지, 결함 밀도)의 측정 결과 및 목표 달성 여부', '테스트 커버리지: 85% (목표 80% 달성), 결함 밀도: 0.4건/FP (목표 0.5건/FP 달성)'],
    ['품질 보증 이슈 및 해결 방안', '품질 관리에 영향을 미친 주요 이슈와 이를 해결하기 위한 조치 사항', '이슈: 개발팀의 테스트 케이스 작성 미흡, 해결: 테스트 케이스 작성 교육 실시'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '품질보증활동계획결과서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '품질보증활동계획결과서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">품질보증활동 계획/결과서</h1>
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
          품질보증활동 계획/결과서는 프로젝트 전반에 걸쳐 수행된 품질보증(QA) 활동의 구체적인 일정, 범위, 방법론을 계획하고, 계획에 따라 수행된 모든 품질 활동(검토, 감사, 측정)의 실행 결과와 산출물의 품질 현황을 기록하여 관리하는 문서입니다. 이 문서는 QA 활동의 실행력과 투명성을 입증합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>실행 증거 확보:</strong> 품질보증계획서에 정의된 활동들이 실제로 이행되었음을 공식적으로 증명하는 <strong>실행 증거(Evidence)</strong>를 제공합니다.</li>
          <li><strong>품질 활동 추적:</strong> 산출물 검토, 코드 감사, 회의 진행 등 주요 QA 활동의 일시, 대상, 참여자, 발견된 결함 등을 상세히 기록하여 품질 활동의 투명성과 추적성을 높입니다.</li>
          <li><strong>품질 현황 보고:</strong> 결함 발생 현황, 결함 조치율, 산출물 평가 점수 등 품질 지표를 측정하고 분석한 결과를 보고하여, 프로젝트 관리자 및 발주처가 현재 시스템의 품질 상태를 정확히 파악하도록 돕습니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 프로젝트가 형식적인 QA 활동이 아닌 실질적인 품질 관리를 수행했는지, 그리고 산출물의 품질 기준이 충족되었는지 확인하는 데 사용되는 가장 중요한 실적 자료입니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 <strong>품질 관리자 (QA Manager)</strong>가 주도적으로 작성하며, 활동에 참여한 개발팀 및 설계팀의 입력 자료를 취합하여 관리합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">품질보증 활동이 시작되는 프로젝트 전 단계에 걸쳐 주기적으로 작성 및 갱신되며, 특히 각 주요 단계(설계, 구현, 테스트) 종료 시점에 해당 단계의 결과가 정리되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">품질 검토, 결함 측정 등 QA 활동이 발생할 때마다 실적을 기록하며, 프로젝트가 완료될 때까지 지속적으로 누적 및 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QualityAssuranceActivityPlanResult;

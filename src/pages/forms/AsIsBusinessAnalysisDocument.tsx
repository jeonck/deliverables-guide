import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const AsIsBusinessAnalysisDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['업무 현황 및 범위', '분석 대상 업무의 목록 및 범위 정의', '회원 관리, 주문 처리, 상품 관리'],
    ['현행 프로세스 정의', '현재 업무의 흐름도 (As-Is Process Flow) 및 단계별 활동, 담당 조직/인력, 사용 시스템 목록', '회원가입 프로세스 (사용자 -> 시스템 -> DB)'],
    ['현행 데이터 분석', '현재 업무에서 사용되는 주요 데이터 및 문서 양식', '회원 정보 (이름, 이메일, 전화번호), 주문서 양식'],
    ['현행 시스템 구성', '현재 사용 중인 레거시(Legacy) 시스템의 구성 및 연동 현황', '기존 CRM 시스템, ERP 시스템 연동'],
    ['문제점 및 개선 요구사항', '현행 업무 프로세스 및 시스템의 비효율성, 병목 현상, 사용자 불만 등의 명확한 식별 및 개선 방향 제시', '수동 데이터 입력으로 인한 오류 발생, 시스템 응답 속도 저하'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">현행 업무 분석서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="현행업무분석서"
          fileName="현행업무분석서.xlsx"
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
          <strong>현행 업무 분석서 (As-Is Business Analysis Document)</strong>는 새로운 정보시스템을 구축하거나 기존 시스템을 개선하기 전에, <strong>현재 발주 기관(사용자)이 업무를 수행하고 있는 방식(현재 상태)</strong>을 체계적으로 조사하고 분석하여 문서화한 것입니다. 이는 현재의 업무 프로세스, 조직 구조, 사용 시스템, 데이터 흐름, 문제점 등을 파악하는 데 중점을 둡니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>요구사항 도출의 기초:</strong> 현재 업무의 문제점과 비효율성을 명확히 식별하여, 이를 해결하고 개선하기 위한 <strong>새로운 시스템의 요구사항(To-Be)</strong>을 도출하는 가장 기본적인 토대를 제공합니다.</li>
          <li><strong>개선 효과 측정의 기준:</strong> 개선된 시스템 구축 후의 <strong>성과(Benefit)</strong>를 측정할 때, 현행 업무 상태와 비교하여 정량적/정성적 개선 효과를 판단하는 기준점(Baseline) 역할을 합니다.</li>
          <li><strong>업무 지식 공유:</strong> 프로젝트 팀원들이 사용자의 업무를 정확하게 이해하고 공감대를 형성하여, 설계 과정에서 업무의 누락이나 오해를 방지합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 시스템이 현행 업무의 문제점을 제대로 해결하고, 사용자의 실제 업무 환경에 적합하게 설계되었는지 평가하는 출발점 자료로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA) 및 <strong>기획자(PM)</strong>가 주도적으로 작성하며, 발주자(사용자) 측의 현업 담당자의 심층적인 인터뷰 및 검토를 통해 내용을 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트의 착수 단계 직후 또는 요구분석 단계 초기에 작성됩니다. 이는 시스템 개발의 가장 첫 번째 분석 활동입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">현행 업무 분석은 프로젝트 초기에 집중되며, 이후에는 To-Be 프로세스 설계 및 시스템 설계로 전환됩니다. 특별한 업무 범위 변경이 없는 한, 초기 확정 내용이 유지됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AsIsBusinessAnalysisDocument;

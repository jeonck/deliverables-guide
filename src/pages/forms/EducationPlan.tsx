import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const EducationPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['교육 목표', '교육을 통해 달성하고자 하는 구체적인 목표 정의', '신규 시스템 사용자들의 시스템 활용 능력 90% 이상 달성'],
    ['교육 대상', '사용자 교육 (현업), 운영자 교육 (관리), 유지보수 교육 (IT 담당) 등 대상 그룹별 명시', '현업 사용자 (100명), 시스템 관리자 (10명)'],
    ['교육 내용 및 교재', '대상 그룹별로 필요한 교육 주제 (시스템 기능, 업무 프로세스, 장애 대응) 및 사용할 교재 목록', '시스템 기본 기능, 업무 프로세스, 장애 대응 매뉴얼'],
    ['교육 방법', '강의, 실습, 온라인 교육(e-Learning) 등 교육 방식 정의', '집합 교육 (강의 및 실습), 온라인 교육 (동영상)'],
    ['교육 일정 및 장소', '교육 기간, 시간, 횟수, 장소, 그리고 교육 이수 기준', '2024.03.01~03.05, 매일 10:00~17:00, 본사 교육장, 이수 기준: 80% 이상 출석'],
    ['강사 및 자원', '교육을 담당할 강사 정보, 필요한 교육 장비 및 시설 목록', '강사: 홍길동 (IT팀), 장비: PC 50대, 빔 프로젝터'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">교육 계획서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="교육계획서"
          fileName="교육계획서.xlsx"
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

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">1.</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          <strong>교육 계획서 (Training Plan)</strong>는 구축되거나 개선된 정보시스템을 효율적이고 안정적으로 운영 및 활용하기 위해 필요한 <strong>모든 대상자(사용자 및 시스템 관리자)</strong>에게 제공할 교육의 목표, 대상, 내용, 일정, 방법 및 평가 기준 등을 체계적으로 정의한 문서입니다. 이는 시스템 운영 환경 변화에 대한 이해관계자들의 준비 상태를 확보하기 위한 로드맵입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>시스템 활용 능력 강화:</strong> 최종 사용자에게는 새로운 시스템의 업무 기능 및 사용 방법을, 시스템 관리자에게는 운영 및 유지보수 방법을 숙지시켜 시스템 활용도를 극대화합니다.</li>
          <li><strong>시스템 조기 안정화:</strong> 사용자들의 시스템 사용 미숙으로 인한 오류 발생을 최소화하고, 시스템 오픈 후 운영 초기 단계의 혼란을 방지하여 조기에 시스템을 안정화하는 데 기여합니다.</li>
          <li><strong>교육 품질 확보:</strong> 교육 내용, 강사, 방법 등을 표준화하여 모든 교육 대상자에게 일관되고 효과적인 교육이 제공되도록 품질을 관리합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 시스템의 성공적인 운영 및 인수를 위한 준비 활동이 충분히 계획되었는지, 그리고 주요 교육 대상자(현업, 관리)가 빠짐없이 포함되었는지 확인하는 기준으로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2">주로 <strong>사업자 (개발사/수행사)</strong>의 프로젝트 관리자 (PM/PL), 기획자, 또는 교육 담당자가 작성하며, 발주처의 운영 부서 및 현업 담당자와 협의하여 교육의 범위와 필요성을 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설계 단계 후반 또는 구현 단계 초기에 시스템의 기능과 운영 환경이 확정된 후, 오픈 일정에 맞춰 교육 일정을 역산하여 계획합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 기능의 최종 확정에 따라 교육 내용이 변경되거나, 발주처의 인력 변동 등으로 교육 대상이나 일정이 수정될 경우 지속적으로 갱신됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default EducationPlan;

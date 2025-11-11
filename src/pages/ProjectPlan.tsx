const projectPlanDeliverables = [
  {
    category: '관리/계획 (QA)',
    deliverables: '제안요청서/제안서/계약서/사업수행계획서, 품질보증 계획서, 보안정책서/시스템 보안정책서, 보안 취약점 분석평가 보고서, <a href="/forms/requirements-traceability-matrix" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">요구사항 추적표</a>, 총괄 시험 계획서, 반복계획서 (반복적 방법론 적용 시)',
  },
];

const ProjectPlan = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">사업 수행 계획</h1>
      <p className="mb-8 text-gray-600">프로젝트의 계획 및 관리 단계에서 필요한 주요 산출물입니다.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 검토대상 산출물</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projectPlanDeliverables.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap font-bold">{item.category}</td>
                <td className="px-6 py-4" dangerouslySetInnerHTML={{ __html: item.deliverables }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <p className="mt-4 text-sm text-gray-500">* 위의 산출물은 정보시스템 개발 사업(SD)의 '분석' 단계에서 도출되는 관리/계획(QA) 관련 산출물을 포함합니다.</p>
    </div>
  );
};

export default ProjectPlan;
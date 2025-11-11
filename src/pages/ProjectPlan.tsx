import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const projectPlanDeliverables = [
  {
    category: '관리/계획 (QA)',
    deliverables: [
      { name: '제안요청서/제안서/계약서/사업수행계획서', path: '/project-plan' },
      { name: '품질보증 계획서', path: '/forms/quality-assurance-plan' },
      { name: '보안정책서/시스템 보안정책서', path: '/project-plan' },
      { name: '보안 취약점 분석평가 보고서', path: '/project-plan' },
      { name: '요구사항 추적표', path: '/forms/requirements-traceability-matrix' },
      { name: '총괄 시험 계획서', path: '/project-plan' },
      { name: '반복계획서 (반복적 방법론 적용 시)', path: '/project-plan' },
    ],
  },
];

const ProjectPlan = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    navigate(path);
  };

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
                <td className="px-6 py-4">
                  {item.deliverables.map((deliverable, dIndex) => (
                    <React.Fragment key={dIndex}>
                      {deliverable.path.startsWith('/forms/') ? (
                        <Link
                          to={deliverable.path}
                          onClick={(e) => handleLinkClick(e, deliverable.path)}
                          className="text-blue-600 hover:underline"
                        >
                          {deliverable.name}
                        </Link>
                      ) : (
                        <span>{deliverable.name}</span>
                      )}
                      {dIndex < item.deliverables.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </td>
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
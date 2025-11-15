import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const implementationDeliverables = [
  {
    category: '응용시스템 구현',
    deliverables: [
      { name: '프로그램 코드', path: '/forms/program-source-code' },
    ],
  },
  {
    category: '데이터베이스 구현',
    deliverables: [
      { name: '데이터베이스 테이블', path: '/forms/database-table-form' },
    ],
  },
  {
    category: '단위 시험',
    deliverables: [
      { name: '단위시험 결과서', path: '/forms/unit-test-result-document-form' },
    ],
  },
  {
    category: '통합 시험',
    deliverables: [
      { name: '통합시험 결과서', path: '/forms/integration-test-result-document-form' },
    ],
  },
  {
    category: '시스템/아키텍처',
    deliverables: [
      { name: '아키텍처 준수 보고서', path: '/forms/architecture-compliance-report' },
      { name: '시스템 튜닝 결과서', path: '/forms/system-tuning-result-document' },
    ],
  },
  {
    category: '관리/표준 (QA)',
    deliverables: [
      { name: '적용 방법론 및 개발 표준', path: '/forms/applied-methodology-and-development-standards' },
      { name: '요구사항 추적표', path: '/forms/requirements-traceability-matrix' },
      { name: '품질보증활동 계획/결과서', path: '/forms/quality-assurance-activity-plan-result' },
    ],
  },
];

const Implementation = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">구현</h1>
      <p className="mb-8 text-gray-600">구조적/정보공학적 모델 및 객체지향/컴포넌트기반 모델의 '구현' 시점을 포괄합니다.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 검토대상 산출물</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {implementationDeliverables.map((item, index) => (
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
    </div>
  );
};

export default Implementation;
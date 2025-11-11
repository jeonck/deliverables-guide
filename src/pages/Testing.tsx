import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const testDeliverables = [
  {
    category: '시험 결과/계획',
    deliverables: [
      { name: '통합시험 계획/결과서', path: '/testing' },
      { name: '시스템 시험 계획/결과서', path: '/testing' },
      { name: '시스템 튜닝 계획/결과서', path: '/testing' },
      { name: '인수시험 계획서', path: '/forms/acceptance-test-plan' },
    ],
  },
  {
    category: '문서/교육',
    deliverables: [
      { name: '사용자/운영자 지침서', path: '/testing' },
      { name: '교육교재', path: '/testing' },
      { name: '교육 계획서', path: '/testing' },
    ],
  },
  {
    category: '관리 (QA)',
    deliverables: [
      { name: '요구사항 추적표', path: '/forms/requirements-traceability-matrix' },
      { name: '품질보증활동 계획/결과서', path: '/testing' },
    ],
  },
];

const Testing = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">테스트 (시험 활동)</h1>
      <p className="mb-8 text-gray-600">구조적/정보공학적 모델 및 객체지향/컴포넌트기반 모델의 '시험' 시점을 포괄합니다.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 검토대상 산출물</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {testDeliverables.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap font-bold">{item.category}</td>
                <td className="px-6 py-4">
                  {item.deliverables.map((deliverable, dIndex) => (
                    <React.Fragment key={dIndex}>
                      <Link
                        to={deliverable.path}
                        onClick={(e) => handleLinkClick(e, deliverable.path)}
                        className="text-blue-600 hover:underline"
                      >
                        {deliverable.name}
                      </Link>
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

export default Testing;
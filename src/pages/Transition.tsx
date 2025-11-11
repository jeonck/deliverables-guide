import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const transitionDeliverables = [
  {
    category: '운영 준비',
    deliverables: [
      { name: '운영환경 설치 결과서', path: '/transition' },
      { name: '초기데이터 구축 결과서', path: '/transition' },
      { name: '데이터 전환 결과서', path: '/transition' },
      { name: '시스템 및 업무 전환 결과서', path: '/transition' },
      { name: '사용자 인수시험 결과서', path: '/transition' },
    ],
  },
  {
    category: '관리/인수',
    deliverables: [
      { name: '적용방법론 및 사업 표준', path: '/transition' },
      { name: '교육교재', path: '/transition' },
      { name: '교육 계획서', path: '/forms/education-plan' },
      { name: '교육 결과서', path: '/transition' },
      { name: '인수운영 조직도', path: '/transition' },
    ],
  },
  {
    category: '종료',
    deliverables: [
      { name: '사용자 요구사항 반영 (최종 확인)', path: '/transition' },
    ],
  },
];

const Transition = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">전환 (전개/운영 준비)</h1>
      <p className="mb-8 text-gray-600">구조적/정보공학적 모델 및 객체지향/컴포넌트기반 모델의 '전개' 시점을 포괄합니다.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 검토대상 산출물</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transitionDeliverables.map((item, index) => (
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

export default Transition;
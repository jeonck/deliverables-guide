import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const designDeliverables = [
  {
    category: '시스템/아키텍처',
    deliverables: [
      { name: '아키텍처 설계서', path: '/forms/architecture-design-document' },
      { name: '시스템 설치 및 검증 계획서', path: '/forms/system-installation-verification-plan' },
      { name: '시스템 전환 계획서', path: '/forms/system-transition-plan' },
      { name: '보안정책서/시스템 보안정책서', path: '/design' },
    ],
  },
  {
    category: '응용/인터페이스',
    deliverables: [
      { name: '응용시스템 설계서', path: '/forms/application-system-design-document' },
      { name: '프로그램 설계서', path: '/forms/program-design-document' },
      { name: '인터페이스 설계서', path: '/forms/interface-design-document' },
      { name: '사용자 인터페이스 설계서', path: '/forms/user-interface-design-document' },
      { name: '화면 설계서', path: '/forms/screen-design-document' },
      { name: '접근 권한 설계서', path: '/design' },
    ],
  },
  {
    category: '데이터베이스',
    deliverables: [
      { name: '엔티티 정의서', path: '/forms/entity-definition-document' },
      { name: '속성 정의서', path: '/forms/attribute-definition-document' },
      { name: '컬럼 정의서', path: '/forms/column-definition-document' },
      { name: '테이블 정의서', path: '/forms/table-definition-document' },
      { name: '데이터베이스 설계서', path: '/forms/database-design-document' },
      { name: '테이블/프로그램 연관도', path: '/design' },
      { name: '테이블 정의서 (객체지향 모델)', path: '/design' },
      { name: '코드설계서 (객체지향 모델)', path: '/design' },
    ],
  },
  {
    category: '계획 (DB)',
    deliverables: [
      { name: '백업 및 복구 계획서', path: '/forms/backup-and-recovery-plan' },
      { name: '초기데이터 구축 계획서', path: '/forms/initial-data-construction-plan' },
      { name: '데이터 전환 계획서', path: '/forms/data-migration-plan' },
      { name: '데이터 전환프로그램', path: '/design' },
    ],
  },
  {
    category: '계획 (시험)',
    deliverables: [
      { name: '단위시험 계획서', path: '/forms/unit-test-plan' },
      { name: '통합시험 계획서', path: '/forms/integration-test-plan' },
    ],
  },
  {
    category: '관리/전략 (QA)',
    deliverables: [
      { name: '시스템 전환 전략서', path: '/design' },
      { name: '반복 계획/평가서', path: '/design' },
    ],
  },
];

const Design = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">설계</h1>
      <p className="mb-8 text-gray-600">구조적/정보공학적 모델의 '설계' 시점과 객체지향/컴포넌트기반 모델의 '분석/설계' 시점을 포괄합니다.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 검토대상 산출물</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {designDeliverables.map((item, index) => (
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

export default Design;
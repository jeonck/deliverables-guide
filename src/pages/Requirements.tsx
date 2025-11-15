import { Link, useNavigate } from 'react-router-dom';
import React from 'react'; // React를 명시적으로 임포트

const analysisDeliverables = [
  {
    category: '요구사항/업무',
    deliverables: [
      { name: '사용자 요구사항 정의서', path: '/forms/requirements-definition-document' },
      { name: '사용자 요구사항 분석서', path: '/requirements' },
      { name: '현행 업무 분석서', path: '/forms/as-is-business-analysis-document' },
      { name: '현행 시스템 분석서', path: '/forms/as-is-system-analysis-document' },
    ],
  },
  {
    category: '사업수행/관리',
    deliverables: [
      { name: '제안요청서/제안서/계약서/사업수행계획서', path: '/requirements' },
      { name: '품질보증 계획서', path: '/forms/quality-assurance-plan' },
      { name: '요구사항 추적표', path: '/forms/requirements-traceability-matrix' },
      { name: '총괄 시험 계획서', path: '/forms/master-test-plan' },
      { name: '반복계획서 (반복적 방법론 적용 시)', path: '/requirements' },
    ],
  },
  {
    category: '시스템/아키텍처',
    deliverables: [
      { name: '시스템 환경 분석서 (정보자원 조사서, 조사현황 등)', path: '/requirements' },
      { name: '보안정책서/시스템 보안정책서', path: '/forms/security-policy-design-document' },
      { name: '보안 취약점 분석평가 보고서', path: '/requirements' },
      { name: '아키텍처 설계서', path: '/forms/architecture-design-document' },
      { name: '시스템 아키텍처 검증결과 보고서', path: '/requirements' },
    ],
  },
  {
    category: '모델링/응용',
    deliverables: [
      { name: '이벤트 시나리오', path: '/requirements' },
      { name: '프로세스 설계서', path: '/forms/process-design-document' },
      { name: '기능차트/데이터흐름도', path: '/requirements' },
      { name: '프로세스 정의서', path: '/forms/process-definition-document' },
      { name: '업무 기능 분해도', path: '/forms/business-function-decomposition-diagram' },
      { name: '엔티티 정의서', path: '/requirements' },
      { name: '엔티티 관계도', path: '/requirements' },
      { name: '엔티티/프로세스 매트릭스', path: '/requirements' },
    ],
  },
  {
    category: '데이터베이스',
    deliverables: [
      { name: '전환데이타 분석서', path: '/requirements' },
      { name: '데이터베이스 표준설계 지침서', path: '/forms/database-standard-design-guidelines' },
      { name: '데이터 표준화 정의서', path: '/forms/data-standardization-definition-document' },
      { name: '데이터 체계 정의서', path: '/forms/data-system-definition-document' },
      { name: '기존 시스템 데이터 모형 분석서 (객체지향 모델)', path: '/requirements' },
    ],
  },
];

const Requirements = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault(); // Prevent default Link behavior
    navigate(path);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">요구사항 (분석 단계)</h1>
      <p className="mb-8 text-gray-600">구조적/정보공학적 모델의 '분석' 시점과 객체지향/컴포넌트기반 모델의 '요구분석' 시점을 포괄합니다.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 검토대상 산출물</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {analysisDeliverables.map((item, index) => (
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

export default Requirements;
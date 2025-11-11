const designDeliverables = [
  {
    category: '시스템/아키텍처',
    deliverables: '<a href="/#/forms/architecture-design-document" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">아키텍처 설계서</a>, 시스템 설치 및 검증 계획서, 시스템 전환 계획서, 보안정책서/시스템 보안정책서',
  },
  {
    category: '응용/인터페이스',
    deliverables: '<a href="/#/forms/application-system-design-document" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">응용시스템 설계서</a>, 인터페이스 설계서, <a href="/#/forms/user-interface-design-document" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">사용자 인터페이스 설계서</a>, 접근 권한 설계서',
  },
  {
    category: '데이터베이스',
    deliverables: '데이터베이스 설계서, 테이블/프로그램 연관도, 테이블 정의서 (객체지향 모델), 코드설계서 (객체지향 모델)',
  },
  {
    category: '계획 (DB)',
    deliverables: '백업 및 복구계획서, 초기데이터 구축 계획서, 데이터 전환계획서, 데이터 전환프로그램',
  },
  {
    category: '계획 (시험)',
    deliverables: '<a href="/#/forms/unit-test-plan" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">단위시험 계획서</a>, <a href="/#/forms/integration-test-plan" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">통합시험 계획서</a>',
  },
  {
    category: '관리/전략 (QA)',
    deliverables: '시스템 전환 전략서, 반복 계획/평가서',
  },
];

const Design = () => {
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
                <td className="px-6 py-4" dangerouslySetInnerHTML={{ __html: item.deliverables }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Design;
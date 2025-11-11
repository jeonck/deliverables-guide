const implementationDeliverables = [
  {
    category: '시스템/아키텍처',
    deliverables: '시스템 아키텍처 정의서, 시스템 설치시험 결과서, 보안정책 및 설계서, 시스템시험 계획서',
  },
  {
    category: '응용시스템',
    deliverables: '프로그램 소스, 구현된 응용시스템, 단위시험 계획/결과서, 통합시험 계획서',
  },
  {
    category: '데이터베이스',
    deliverables: '데이터베이스 설계서, 테이블 정의서, 데이터베이스 테이블, 프로그램 코드, 단위시험 결과서',
  },
  {
    category: '관리/표준 (QA)',
    deliverables: '적용 방법론 및 개발 표준, 요구사항 추적표, 품질보증활동 계획/결과서, 반복 계획/평가서',
  },
];

const Implementation = () => {
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
                <td className="px-6 py-4">{item.deliverables}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Implementation;
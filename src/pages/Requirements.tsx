const analysisDeliverables = [
  {
    category: '요구사항/업무',
    deliverables: '<a href="/#/forms/requirements-definition-document" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">사용자 요구사항 정의서</a>, 사용자 요구사항 분석서, 현행 업무 분석서, 현행 시스템 분석서',
  },
  {
    category: '시스템/아키텍처',
    deliverables: '시스템 환경 분석서 (정보자원 조사서, 조사현황 등), 아키텍처 설계서, 시스템 아키텍처 검증결과 보고서',
  },
  {
    category: '모델링/응용',
    deliverables: '이벤트 시나리오, 기능차트/데이터흐름도/프로세스 정의서, 엔티티 정의서, 엔티티 관계도, 엔티티/프로세스 매트릭스',
  },
  {
    category: '데이터베이스',
    deliverables: '전환데이타 분석서, 데이터베이스 표준설계 지침서, 기존 시스템 데이터 모형 분석서 (객체지향 모델)',
  },
];

const Requirements = () => {
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
                <td className="px-6 py-4" dangerouslySetInnerHTML={{ __html: item.deliverables }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requirements;
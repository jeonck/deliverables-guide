const testDeliverables = [
  {
    category: '시험 결과/계획',
    deliverables: '통합시험 계획/결과서, 시스템 시험 계획/결과서, 시스템 튜닝 계획/결과서, 인수시험 계획서',
  },
  {
    category: '문서/교육',
    deliverables: '사용자/운영자 지침서, 교육교재, 교육 계획서',
  },
  {
    category: '관리 (QA)',
    deliverables: '<a href="/#/forms/requirements-traceability-matrix" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">요구사항 추적표</a>, 품질보증활동 계획/결과서',
  },
];

const Testing = () => {
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
                <td className="px-6 py-4" dangerouslySetInnerHTML={{ __html: item.deliverables }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Testing;
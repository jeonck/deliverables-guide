const SecurityDeliverables = [
    { phase: '분석', deliverables: '보안정책서/시스템 보안정책서, 보안 취약점 분석평가 보고서' },
    { phase: '설계', deliverables: '보안정책서/시스템 보안정책서, 접근 권한 설계서' },
    { phase: '구현', deliverables: '보안정책 및 설계서' },
];

const Security = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">보안</h1>
            <p className="mb-8 text-gray-600">보안은 프로젝트의 분석, 설계, 구현 등 여러 단계에 걸쳐 고려되어야 하는 핵심 요소입니다. 각 단계별 주요 보안 관련 산출물은 다음과 같습니다.</p>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">단계</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 산출물</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {SecurityDeliverables.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap font-bold">{item.phase}</td>
                                <td className="px-6 py-4">{item.deliverables}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">* 각 산출물에 대한 자세한 내용은 해당 단계 페이지를 참고하십시오.</p>
        </div>
    );
};

export default Security;
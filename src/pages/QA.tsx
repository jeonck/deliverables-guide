import { Link } from 'react-router-dom';

const QADeliverables = [
    {
        phase: '분석',
        deliverables: [
            { name: '품질보증 계획서', path: '/forms/quality-assurance-plan' },
            { name: '요구사항 추적표', path: '/forms/requirements-traceability-matrix' },
            { name: '총괄 시험 계획서', path: '/qa' },
        ],
    },
    {
        phase: '설계',
        deliverables: [
            { name: '시스템 전환 전략서', path: '/qa' },
            { name: '반복 계획/평가서', path: '/qa' },
        ],
    },
    {
        phase: '구현',
        deliverables: [
            { name: '적용 방법론 및 개발 표준', path: '/forms/applied-methodology-and-development-standards' },
            { name: '요구사항 추적표', path: '/forms/requirements-traceability-matrix' },
            { name: '품질보증활동 계획/결과서', path: '/qa' },
            { name: '반복 계획/평가서', path: '/qa' },
        ],
    },
    {
        phase: '테스트',
        deliverables: [
            { name: '요구사항 추적표', path: '/forms/requirements-traceability-matrix' },
            { name: '품질보증활동 계획/결과서', path: '/qa' },
        ],
    },
];

const QA = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">품질보증 (QA)</h1>
            <p className="mb-8 text-gray-600">품질보증은 프로젝트 전 단계에 걸쳐 수행되는 중요한 활동입니다. 각 단계별 주요 품질보증 산출물은 다음과 같습니다.</p>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">단계</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 산출물</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {QADeliverables.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap font-bold">{item.phase}</td>
                                <td className="px-6 py-4">
                                    {item.deliverables.map((deliverable, dIndex) => (
                                        <React.Fragment key={dIndex}>
                                            <Link to={deliverable.path} className="text-blue-600 hover:underline">
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
            <p className="mt-4 text-sm text-gray-500">* 각 산출물에 대한 자세한 내용은 해당 단계 페이지를 참고하십시오.</p>
        </div>
    );
};

export default QA;
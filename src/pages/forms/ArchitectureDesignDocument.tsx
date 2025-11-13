import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const ArchitectureDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시스템 구성도', '물리적/논리적 관점의 시스템 구성 요소 및 배치도', '3-Tier 구성도, 네트워크 구성도'],
    ['아키텍처 패턴/스타일', '채택된 아키텍처 패턴 (예: 계층형, 마이크로서비스 아키텍처) 및 그 선정 사유', 'MSA (Microservices Architecture), 서비스 간 독립적 배포 및 확장성'],
    ['기술 스택 정의', '시스템 구축에 사용될 주요 플랫폼, 프레임워크, 개발 언어, 상용 솔루션(COTS) 등의 목록 및 표준', 'Java 11, Spring Boot, Kafka, Oracle 19c'],
    ['컴포넌트 및 인터페이스', '시스템의 주요 구성 요소(모듈, 서비스) 정의 및 이들 간의 통신/연동 방식', '회원 서비스, 주문 서비스 (REST API 연동)'],
    ['보안 아키텍처', '보안 요구사항을 충족하기 위한 방화벽, 인증/인가 체계, 데이터 암호화 등 구조적 설계', 'WAF, OAuth2 기반 인증, DB 암호화'],
    ['배치(Deployment) 및 운영 환경', '시스템의 배포 전략, 이중화/백업 방안, 모니터링 체계 설계', 'Kubernetes 기반 배포, Active-Standby 이중화, Prometheus/Grafana 모니터링'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">아키텍처 설계서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="아키텍처설계서"
          fileName="아키텍처설계서.xlsx"
        />
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border-2 border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">항목</th>
              <th className="border border-gray-300 px-4 py-2">설명</th>
              <th className="border border-gray-300 px-4 py-2">예시</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => ( // Skip header row for rendering
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cellIndex === 0 ? <span className="font-bold">{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">1.</span> 정의 (Definition)
        </h2>
        <p className="mb-4 text-gray-700">
          아키텍처 설계서는 구축될 정보시스템의 <strong>전체적인 구조(Structure)</strong>를 정의하고, 시스템을 구성하는 주요 <strong>기술적 요소(컴포넌트)</strong>들과 이들 간의 관계 및 상호작용 방식을 명세화한 문서입니다. 이는 시스템이 성능, 보안, 확장성, 안정성 등의 비기능적 요구사항을 어떻게 충족시킬 것인지에 대한 기술 전략을 제시하는 청사진 역할을 합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>기술적 일관성 확보:</strong> 시스템 개발 전반에 걸쳐 적용될 기술 표준과 구조 원칙을 확립하여, 모든 개발 활동이 일관된 방향으로 진행되도록 보장합니다.</li>
          <li><strong>비기능적 요구사항 충족 검증:</strong> 성능(Performance), 확장성(Scalability), 안정성(Stability), 보안(Security) 등 시스템의 품질 속성을 충족시키기 위한 핵심 설계 결정의 근거를 제공합니다.</li>
          <li><strong>기술적 리스크 관리:</strong> 시스템 구축 시 발생할 수 있는 기술적 위험 요소를 식별하고, 이를 완화하기 위한 아키텍처적 대응 방안을 제시합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 시스템의 기술 구조가 적절하고 타당한지, 그리고 발주처의 환경과 요구사항에 부합하는 최적의 설계인지 평가하는 가장 중요한 기술 문서로 활용됩니다.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">3.</span> 작성 주체 및 시점 (Author and Timing)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">항목</th>
                <th className="border border-gray-300 px-4 py-2">상세 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">작성 주체</td>
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 아키텍트 (System Architect, SA) 또는 <strong>기술 책임자 (Technical Architect, TA)</strong>가 주도하여 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계 이후에 기능/비기능 요구사항이 확정되면, 이를 기반으로 시스템 설계 단계 초기에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 진행 중 기술 환경 변화, 주요 솔루션 변경, 성능 이슈 해결 등으로 인해 핵심 구조 변경이 발생할 경우 즉시 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDesignDocument;

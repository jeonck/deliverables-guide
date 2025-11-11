import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const ApplicationSystemDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시스템 아키텍처', '3-Tier, SOA, MSA 등 시스템 전체의 기술적 구조 및 구성도', '3-Tier 아키텍처 (웹/WAS/DB)'],
    ['서브시스템 및 모듈 정의', '시스템을 구성하는 주요 서브시스템 목록, 기능, 역할 및 모듈 간 계층 구조', '회원 관리 서브시스템 (회원가입, 로그인, 정보 수정 모듈)'],
    ['인터페이스 정의', '내부 모듈 간, 그리고 외부 시스템과의 연동 방식, 프로토콜, 데이터 규격', 'REST API (JSON), HTTP/HTTPS'],
    ['성능 및 보안 설계', '성능 목표 달성을 위한 설계 방안(예: 부하 분산, 캐싱), 보안 취약점 방지를 위한 설계 내용', '로드 밸런서, 웹 방화벽, SSL/TLS 적용'],
    ['배치(Deployment) 환경', '시스템의 구축 및 운영 환경(HW/SW), 프로그램 배포 방식', 'AWS EC2, Docker, Jenkins를 통한 CI/CD'],
    ['오류 처리 방안', '시스템 내부 및 외부 연동 시 발생하는 오류에 대한 처리 로직 및 복구 방안', '에러 로깅, 사용자 친화적 에러 메시지, 자동 복구 스크립트'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '응용시스템설계서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '응용시스템설계서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">응용시스템 설계서</h1>
        <button
          onClick={handleExcelDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          엑셀 다운로드
        </button>
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
          응용시스템 설계서는 시스템이 사용자의 요구사항과 정의된 기능을 실제로 구현하기 위한 기술적인 구조, 구성 요소, 데이터 흐름, 인터페이스 및 구현 방안 등을 총체적으로 상세히 명세한 문서입니다. 이는 시스템 개발의 논리적 및 물리적 설계 결과를 통합적으로 제시하는 최상위 설계 문서입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>기술 구현의 청사진 제공:</strong> 정의된 기능 요구사항을 기반으로 시스템을 실제로 구축하는 데 필요한 모든 기술적 지침을 개발팀에 제공합니다.</li>
          <li><strong>시스템 구조 명확화:</strong> 시스템의 <strong>전체 구조(Architecture)</strong>를 정의하고, 각 서브시스템(Sub-system) 및 모듈 간의 연관 관계 및 데이터 흐름을 명확히 하여 개발의 일관성을 유지합니다.</li>
          <li><strong>통합적인 검토 기준:</strong> 기능 정의서, 데이터베이스 정의서, 인터페이스 정의서, 보안 요구사항 등 다양한 설계 요소를 통합적으로 검토하고, 이들이 상호 모순 없이 구현될 수 있도록 보장합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 시스템의 설계 적정성, 기술적 타당성, 보안 설계 준수 여부 등 시스템의 핵심 기술 품질을 검증하는 데 사용되는 가장 중요한 산출물입니다.</li>
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
                <td className="border border-gray-300 px-4 py-2">주로 <strong>사업자 (개발사/수행사)</strong>의 시스템 설계자(System Architect), 기술 책임자(TA), 또는 <strong>PL(Project Leader)</strong>이 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계 이후에 기능 요구사항이 확정되면, 이를 기반으로 시스템 설계 단계에서 작성됩니다. 이는 기능 정의서와 데이터베이스 정의서 등이 완료된 이후에 이들을 통합하여 상세화합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">개발 과정에서 아키텍처 변경, 주요 기술 스택 변경, 혹은 인터페이스 변경 등이 발생할 경우 지속적으로 갱신되어, 실제 구현된 시스템의 최종 구조를 정확히 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSystemDesignDocument;

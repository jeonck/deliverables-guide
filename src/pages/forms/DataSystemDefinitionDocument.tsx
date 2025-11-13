import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const DataSystemDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['데이터 분류 체계', '시스템에서 관리되는 데이터를 업무, 주제 영역, 성격 등에 따라 구분하는 표준 분류 구조', '업무 영역: 고객, 상품, 주문 / 주제 영역: 마스터, 트랜잭션'],
    ['데이터 표준화 지침 연계', '데이터 표준화 정의서 등 다른 데이터 산출물과의 연계 및 적용 방안 정의', '데이터 표준화 정의서(DSD-001) 준수, 명명 규칙: 영문 대문자, 스네이크 케이스'],
    ['데이터 모델링 원칙', '논리/물리 데이터 모델링 시 준수해야 할 표준화된 원칙 및 규칙', '엔티티/테이블 명명 규칙, 관계 설정 원칙, 인덱스 생성 원칙'],
    ['데이터 관리 조직 및 역할', '데이터 거버넌스를 위한 데이터 관리 조직 구조, 역할, 책임 (Owner, Steward 등)', '데이터 오너: 각 업무 부서장, 데이터 스튜어드: 데이터 관리팀'],
    ['데이터 흐름/아키텍처', '데이터 흐름도 (Flow Diagram)를 통해 시스템 내외부의 데이터 생성, 변경, 활용, 보관 경로를 정의', '고객 정보 생성 (CRM) -> DB 저장 -> 분석 시스템 전송'],
    ['데이터 보안 및 품질 관리 방안', '데이터 접근 통제, 암호화 등 보안 관리 체계와 데이터 품질 목표 및 관리 절차 정의', '접근 통제: 역할 기반 접근 제어 (RBAC), 암호화: 개인정보 필드 암호화'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">데이터 체계 정의서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="데이터체계정의서"
          fileName="데이터체계정의서.xlsx"
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
          <strong>데이터 체계 정의서 (Data System Definition Document)</strong>는 구축될 정보시스템의 데이터 관리에 대한 최상위 전략 및 구조를 정의한 문서입니다. 이는 시스템에서 관리되는 데이터의 분류 체계, 표준화 원칙, 데이터 모델링 원칙, 데이터 관리 조직 및 거버넌스(Governance) 방안 등 데이터와 관련된 모든 관리적 및 기술적 체계를 포괄적으로 명세화합니다.이 문서는 데이터베이스 설계서가 데이터의 <strong>'구조'</strong>를 다룬다면, 데이터 체계 정의서는 데이터의 <strong>'관리 및 활용 체계'</strong>를 다룬다고 볼 수 있습니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">항목</th>
                <th className="border border-gray-300 px-4 py-2">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 관리 기준 확립</td>
                <td className="border border-gray-300 px-4 py-2">시스템 전반에 걸쳐 일관된 데이터 분류, 명명, 모델링, 보안 관리 원칙을 확립하여 데이터 관리의 기준을 제시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 활용 및 공유 증진</td>
                <td className="border border-gray-300 px-4 py-2">데이터의 분류 체계와 표준을 정의함으로써, 시스템 간 데이터 공유 및 활용을 용이하게 하고, 데이터 품질을 향상시킵니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 거버넌스 기반 마련</td>
                <td className="border border-gray-300 px-4 py-2">데이터의 관리 조직, 역할, 책임 등을 정의하여, 데이터 관리가 지속적이고 체계적으로 이루어지도록 데이터 거버넌스 체계를 구축하는 기반이 됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 관리 체계의 적절성, 표준화 노력, 데이터 품질 확보 방안의 타당성을 종합적으로 평가하는 기준으로 사용됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 아키텍트 (DA) 및 <strong>시스템 분석가(SA)</strong>가 주도적으로 작성하며, 발주처의 데이터 관리 총괄 부서와 협의하여 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 착수 단계 또는 요구분석 단계 초기에 현행 업무/시스템 분석을 기반으로 가장 먼저 수립되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트를 진행하며 데이터 표준이나 거버넌스 체계에 중대한 변화가 발생하거나, 새로운 데이터 기술이 도입될 경우 갱신될 수 있습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataSystemDefinitionDocument;

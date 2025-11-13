import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const AsIsSystemAnalysisDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['하드웨어 구성', '서버, 스토리지, 네트워크 장비 등의 목록, 사양, 용량 및 배치 현황', '웹 서버 (Dell PowerEdge R740, 2대), DB 서버 (HP ProLiant DL380, 1대)'],
    ['소프트웨어 구성', '운영체제, DBMS, 미들웨어(WAS), 개발 도구, 보안 솔루션 등 기술 환경 목록 및 버전', 'OS: CentOS 7.x, DBMS: Oracle 12c, WAS: WebLogic 12c'],
    ['네트워크 구성', '시스템 간의 물리적/논리적 네트워크 구조, 방화벽, L4 스위치 등의 구성 현황', 'DMZ 구간 웹/WAS, 내부망 DB 구성, 방화벽 정책'],
    ['데이터베이스 현황', '주요 데이터베이스의 스키마 구조, 용량, 사용률, 백업 및 복구 체계', '회원 DB (스키마: MEMBER_SCHEMA, 용량: 500GB, 사용률: 70%)'],
    ['인터페이스 현황', '현재 시스템이 외부/내부 시스템과 연동하는 방식, 프로토콜, 데이터 규격', '외부 결제 시스템 (REST API, JSON), 내부 ERP 시스템 (SOAP, XML)'],
    ['문제점 및 취약점', '성능 병목 구간, 노후화된 기술, 보안 취약점 등의 기술적 진단 결과', 'DB 쿼리 속도 저하, 구형 OS 사용, SQL Injection 취약점'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">현행 시스템 분석서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="현행시스템분석서"
          fileName="현행시스템분석서.xlsx"
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
          <strong>현행 시스템 분석서 (As-Is System Analysis Document)</strong>는 현재 운영 중인 정보시스템의 기술적인 현황을 상세하게 조사하고 분석하여 문서화한 것입니다. 이는 기존 시스템의 하드웨어(H/W), 소프트웨어(S/W) 구성, 데이터베이스, 네트워크, 보안, 성능 등 기술적 측면을 파악하여 신규 시스템 구축 또는 시스템 개선의 기초 자료로 활용됩니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>기술적 제약사항 파악:</strong> 기존 시스템의 기술적 구성 요소(예: 노후화된 장비, 구형 운영체제, 특정 DBMS 종속성)를 정확히 파악하여, 신규 시스템 설계 시 계승해야 할 요소와 반드시 변경해야 할 요소를 구분합니다.</li>
          <li><strong>이관 및 연계 방안 수립의 기초:</strong> 기존 시스템의 데이터 구조와 인터페이스 현황을 분석하여, 신규 시스템으로의 데이터 이관(Migration) 및 시스템 간 연계(Interface) 방안을 수립하는 데 필수적인 정보를 제공합니다.</li>
          <li><strong>성능 및 안정성 문제 진단:</strong> 현재 시스템의 성능 병목 현상, 가용성 문제, 보안 취약점 등 기술적 문제점을 진단하여, To-Be 시스템 설계의 개선 요구사항을 도출합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 신규 시스템 설계가 기존 환경을 합리적으로 계승하고 있으며, 파악된 문제점들을 적절히 해결하도록 계획되었는지 검토하는 기준 자료로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 분석가(SA) 및 <strong>기술 책임자(TA)</strong>가 주도적으로 작성하며, 발주자(사용자) 측의 시스템 운영/관리 담당자의 협조를 통해 기술 자료를 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트의 착수 단계 직후 또는 요구분석 단계 초기에 현행 업무 분석과 병행하여 가장 먼저 수행되는 기술 분석 활동입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">현행 시스템 분석은 초기에 집중되며, 이후에는 To-Be 시스템 설계를 위한 기준으로 활용됩니다. 분석 내용의 큰 변경이 없는 한, 초기 확정 내용이 유지됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AsIsSystemAnalysisDocument;

import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const SystemInstallationVerificationPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['설치 대상 및 범위', '설치할 서버, 데이터베이스, 미들웨어, 애플리케이션 등 모든 구성 요소 목록', '서버: Web/WAS 2대, DB 1대 / 미들웨어: WebLogic / 애플리케이션: 고객관리 시스템'],
    ['설치 환경 구성', '운영 환경의 하드웨어, 소프트웨어(OS, DBMS 등), 네트워크 구성의 최종 명세', 'OS: CentOS 7.x, DBMS: Oracle 19c, 네트워크: 이중화 구성'],
    ['설치 상세 절차', '단계별 설치 순서, 담당자, 소요 시간, 전제 조건 등 시간 단위의 구체적인 작업 매뉴얼', '1. OS 설치 (2시간, 인프라팀) / 2. DBMS 설치 (3시간, DBA) / 3. 애플리케이션 배포 (1시간, 개발팀)'],
    ['설치 후 검증 항목', '설치된 애플리케이션의 정상 구동 여부, DB 연동 확인, 외부 시스템 인터페이스 확인, 보안 설정 등 기술적 검증 목록', '웹 서비스 접속 확인, DB 데이터 조회, SMS 연동 테스트, 방화벽 설정 확인'],
    ['장애 및 복구 방안', '설치 작업 중 오류 발생 시 설치 전 상태로 복구(Rollback)하는 상세 절차 및 비상 대응 방안', '오류 발생 시: 설치 로그 확인, 롤백: 스냅샷 복원 (1시간 소요)'],
    ['최종 승인 기준', '시스템 설치 및 검증이 완료되었음을 공식적으로 인정받는 기준 및 발주처의 최종 승인 절차', '모든 검증 항목 통과, 발주처 운영팀장 최종 서명'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '시스템설치및검증계획서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '시스템설치및검증계획서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">시스템 설치 및 검증 계획서</h1>
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
          <strong>시스템 설치 및 검증 계획서 (System Installation and Verification Plan)</strong>는 구축된 정보시스템을 실제 운영될 환경에 물리적, 논리적으로 <strong>설치(Installation)</strong>하고, 설치된 시스템이 성능, 기능, 보안 등 모든 측면에서 정상적으로 동작하는지 확인하는 최종적인 활동을 체계적으로 계획한 문서입니다. 이는 시스템 운영 개시 전 최종 점검 및 준비 상태를 확정합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">운영 환경 구성의 표준화</td>
                <td className="border border-gray-300 px-4 py-2">하드웨어, 운영체제, 네트워크, 미들웨어 등 모든 기술 구성 요소가 설계된 아키텍처에 따라 정확하게 설치 및 설정되도록 표준 절차를 제시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 건전성 확보</td>
                <td className="border border-gray-300 px-4 py-2">설치 후 시스템이 정상적으로 부팅되고, 주요 애플리케이션 및 서비스가 오류 없이 구동되는지 확인하는 기술적 건전성 검증을 수행합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">환경 설정 오류 최소화</td>
                <td className="border border-gray-300 px-4 py-2">개발 환경, 테스트 환경과 다른 운영 환경의 특성으로 인해 발생할 수 있는 환경 설정 및 연동 오류를 사전에 발견하고 해결하여 안정적인 운영을 준비합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 운영 환경 구성의 적절성, 설치 절차의 명확성 및 통제 가능성, 그리고 시스템의 최종 준비 상태를 평가하는 기준으로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 운영 담당자, DBA, 및 <strong>기술 책임자(TA)</strong>가 주도적으로 작성하며, 발주처의 IT 인프라/운영 담당 조직과 협의하여 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 개발 및 시험 단계가 완료되어 운영 환경에 설치를 준비하는 시점인 시스템 시험 단계 후반에 작성되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">운영 환경 변경, 시스템 중요도 변화, 백업 장비/소프트웨어 변경 등이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SystemInstallationVerificationPlan;

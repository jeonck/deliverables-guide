import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const OperatorManual: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시스템 구성 및 아키텍처', '운영 환경의 최종 H/W, S/W 구성, 네트워크 구성 등 기술 환경 명세', '서버: Web/WAS 2대, DB 1대 / OS: CentOS 7.x / 네트워크: 이중화 구성'],
    ['일일/정기 운영 및 점검', '시스템 시작/종료 절차, 로그 관리, 정기 점검 항목 및 주기, 운영 보고서 양식', '매일 09시 시스템 상태 점검, 주간 단위 로그 백업, 월간 운영 보고서 작성'],
    ['장애 진단 및 복구 절차', '장애 유형별(HW, S/W, DB 등) 진단 방법, 비상 연락망, 복구 담당자, 상세 복구 단계 매뉴얼', 'DB 장애 발생 시: 1. DBA 비상 연락 2. DB 로그 분석 3. 백업 데이터 복구'],
    ['백업 및 복구 관리', '백업 주기, 백업 매체, 데이터 보관 정책 등 백업 및 복구 계획서의 실행 절차', '매일 새벽 2시 DB 전체 백업, 백업 데이터 3개월 보관, Tape 백업'],
    ['성능 관리 및 튜닝', '성능 모니터링 방법, 임계치 설정, 성능 저하 시 조치 방안', 'CPU 사용률 80% 초과 시 경고 알림, DB 쿼리 튜닝, WAS 스레드 설정 조정'],
    ['운영 환경 설정', 'DBMS, WAS, OS 등 주요 미들웨어의 운영 파라미터 및 설정 값 목록', 'DBMS: max_connections=500, WAS: Xmx=4g, OS: ulimit -n 65535'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '운영자지침서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '운영자지침서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">운영자 지침서</h1>
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
          <strong>운영자 지침서 (Operator Manual / System Administration Guide)</strong>는 구축된 정보시스템을 <strong>실제로 운영하고 관리하는 담당자(IT 운영 인력)</strong>가 시스템을 안정적이고 효율적으로 유지보수하기 위해 필요한 모든 기술적 절차와 관리 방안을 상세히 정의한 문서입니다. 이는 시스템의 일일 운영, 성능 모니터링, 백업/복구, 장애 대응 등 기술 관리 활동에 중점을 둡니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">시스템 안정성 확보</td>
                <td className="border border-gray-300 px-4 py-2">시스템 가동률과 성능을 최대화하기 위한 표준 운영 절차를 정의하고, 정기적인 점검 및 모니터링 방법을 제시하여 시스템의 안정성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">신속하고 정확한 장애 대응</td>
                <td className="border border-gray-300 px-4 py-2">시스템 장애 유형별 진단 및 복구 절차를 상세히 제공하여, 운영자가 문제 발생 시 신속하고 정확하게 대응하고 서비스 중단을 최소화하도록 지원합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">효율적인 유지보수 지원</td>
                <td className="border border-gray-300 px-4 py-2">소프트웨어 배포(Deployment), 패치 적용, 버전 관리 등 시스템 변경 작업에 대한 표준화된 절차를 제공하여 유지보수 활동의 효율성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템 운영 환경의 적절성, 장애 대응 체계의 타당성, 그리고 백업 및 복구 계획의 실행 가능성을 평가하는 핵심 기준 자료로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 운영 담당자, DBA, <strong>기술 책임자(TA)</strong>가 주도적으로 작성하며, 발주처의 IT 운영 조직과 협의하여 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 구현 및 시험 단계 후반에 운영 환경이 최종 확정되고, 시스템 전환 계획 수립과 병행하여 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">운영 환경 변경, 시스템 아키텍처 수정, 새로운 솔루션 도입 등으로 인해 운영 절차가 달라질 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OperatorManual;

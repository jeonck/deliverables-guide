import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const SystemTestResultDocumentForm: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 개요', '시험 대상 시스템 명칭 및 버전, 최종 시험 환경 명세, 시험 기간.', '시스템 명칭: 통합 관리 시스템, 버전: 1.0, 환경: 운영 전 테스트 서버, 기간: 2023-11-10 ~ 2023-11-20'],
    ['시험 시나리오 연계', '실행된 시스템 시험 시나리오 목록 및 관련 요구사항 정의서 연계 정보.', '시나리오 ID: STS_FULL_001, 관련 요구사항: 요구사항 정의서 v1.0'],
    ['시험 실행 결과 - 기능 시험', '사용자 관점의 핵심 업무 시나리오 실행 결과 및 판정.', '모든 핵심 기능 (회원가입, 로그인, 게시물 작성, 결제) 정상 작동 확인. 판정: Pass'],
    ['시험 실행 결과 - 비기능 시험 (성능/보안/안정성)', '부하 시험 결과, 보안 취약점 점검 결과 등 비기능 항목의 달성 수준 및 판정.', '성능: 동시 사용자 1000명 접속 시 응답 시간 2초 이내 (Pass). 보안: OWASP Top 10 취약점 점검 결과 안전 (Pass). 안정성: 72시간 연속 운영 중단 없음 (Pass).'],
    ['시험 실행 결과 - 판정', '각 시나리오별 합격 (Pass) 또는 불합격 (Fail) 판정 및 전체 시스템의 종합 판정.', '전체 시나리오 95% Pass, 종합 판정: 조건부 합격 (Minor 결함 2건)'],
    ['결함 및 조치 내역', '발견된 결함 ID, 결함 내용, 심각도, 조치 내용, 재시험 결과 요약.', '결함 ID: DEF_ST_001, 내용: 특정 페이지 로딩 지연, 심각도: Minor, 조치: DB 쿼리 최적화, 재시험 결과: Pass'],
    ['시험 요약 및 승인', '총 시험 항목 수, 기능 및 비기능 시험 합격률, 테스트 관리자 및 PM의 서명 (최종 승인).', '총 200개 항목, 기능 합격률 98%, 비기능 합격률 100%, 테스트 관리자: 김테스터, PM: 박PM'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '시스템시험결과서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '시스템시험결과서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">시스템 시험 결과서</h1>
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
          <strong>시스템 시험 결과서 (System Test Result Document)</strong>는 완전히 통합된 시스템이 시스템 시험 시나리오에 따라 기능, 성능, 보안, 안정성, 호환성 등 모든 요구사항을 충족시키는지 시험한 후, 그 시험 과정, 관찰된 실제 결과, 그리고 종합적인 판정을 공식적으로 기록한 문서입니다. 이는 시스템이 운영 환경 투입 전 최종 품질과 안정성을 확보했음을 증명하는 기록입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">요구사항 충족 최종 증명</td>
                <td className="border border-gray-300 px-4 py-2">기능적/비기능적 요구사항 정의서에 명시된 모든 요구사항이 시스템에 완벽하게 구현되었음을 종합적인 시험 결과를 통해 객관적으로 입증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">운영 환경 적합성 확인</td>
                <td className="border border-gray-300 px-4 py-2">실제 운영 환경과 동일하거나 유사한 환경에서 시험을 수행함으로써, 시스템이 현실적인 부하와 조건 하에서 안정적으로 운영될 수 있음을 검증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">인수 시험의 전제 조건</td>
                <td className="border border-gray-300 px-4 py-2">시스템 시험 결과서가 최종 승인되어야 시스템의 종합적인 품질이 확보되었다고 판단하며, 인수 시험(UAT) 단계로 진입할 수 있는 자격을 부여합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 최종 품질 수준, 비기능 요구사항(성능, 보안) 달성 여부, 그리고 종합적인 시험 활동의 완성도를 평가하는 핵심 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 테스트 매니저, 품질 관리자 (QA Manager) 등 시험 전담 조직이 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 시험 시나리오 실행이 완료된 직후에 작성되며, 발견된 치명적 결함에 대한 조치가 완료된 후 최종적으로 확정됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시험 결과 비기능 요구사항 미달 등으로 시스템 수정 후 재시험이 필요할 경우, 해당 재시험 결과가 최신 내용으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SystemTestResultDocumentForm;

import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const UnitTestResultDocumentForm: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 개요', '시험 대상 모듈/프로그램 ID 및 명칭, 시험 환경, 시험 기간.', '모듈 ID: MOD_LOGIN, 명칭: 로그인 모듈, 환경: 개발 서버, 기간: 2023-10-26 ~ 2023-10-27'],
    ['시험 케이스 연계', '실행된 단위 시험 케이스 목록 (ID) 및 관련 설계서 (프로그램 설계서) 연계 정보.', '시험 케이스 ID: UTC_LOGIN_001, 관련 설계서: PRG_LOGIN_001.docx'],
    ['시험 실행 결과 - 입력 데이터 및 조건', '시험 시 사용된 실제 입력 값.', 'ID: testuser, PW: password123'],
    ['시험 실행 결과 - 예상 결과 vs. 실제 결과', '시험 전 정의한 기대 결과와 시험 후 실제로 관찰된 결과 비교.', '예상: 로그인 성공, 실제: 로그인 성공'],
    ['시험 실행 결과 - 판정', '각 케이스별 합격 (Pass) 또는 불합격 (Fail) 판정.', 'Pass'],
    ['결함 및 조치 내역', '불합격된 항목에 대한 결함 ID, 결함 내용, 심각도, 조치(수정) 내용, 재시험 결과.', '결함 ID: DEF_LOGIN_001, 내용: 비밀번호 5회 오류 시 계정 잠금 미작동, 심각도: High, 조치: 계정 잠금 로직 추가, 재시험 결과: Pass'],
    ['시험 요약 및 승인', '총 시험 항목 수, 합격률, 시험자 및 검토자(PL 등)의 서명 (최종 승인).', '총 100개 항목, 합격률 98%, 시험자: 김개발, 검토자: 이PL'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '단위시험결과서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '단위시험결과서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">단위 시험 결과서</h1>
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
          <strong>단위 시험 결과서 (Unit Test Result Document)</strong>는 개발된 <strong>개별 프로그램 또는 모듈(Unit)</strong>에 대해 <strong>단위 시험 케이스(Unit Test Case)</strong>를 실행한 후, 그 시험 과정, 관찰된 실제 결과, 그리고 합격/불합격 판정을 공식적으로 기록한 문서입니다. 이는 프로그램의 최소 기능 단위가 설계된 대로 정확하게 구현되었음을 증명하는 객관적인 증거입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">구현 품질 입증</td>
                <td className="border border-gray-300 px-4 py-2">개별 모듈의 내부 로직과 알고리즘이 프로그램 설계서에 따라 오류 없이 작동했음을 수치적이고 객관적인 데이터로 입증하여, 구현 품질을 보증합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">결함 식별 및 추적</td>
                <td className="border border-gray-300 px-4 py-2">시험 결과 불합격(Fail)된 항목에 대해 결함(Defect)을 식별하고, 해당 결함이 재시험(Retest)을 통해 정상적으로 수정 및 조치되었는지 그 이력을 관리하는 근거가 됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">후속 시험의 전제 조건</td>
                <td className="border border-gray-300 px-4 py-2">단위 시험 결과서가 최종적으로 승인되어야 해당 모듈이 통합 시험 단계로 넘어갈 수 있는 자격이 주어져, 전체 시험 절차의 체계성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 개발자의 시험 활동 이행 여부, 시험 케이스의 충실성, 그리고 발견된 결함에 대한 조치 결과의 적절성을 평가하는 핵심 자료입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 해당 프로그램/모듈을 개발하고 단위 시험을 직접 수행한 개발자가 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">단위 시험 케이스를 실행한 직후에 발생하며, 모든 시험 항목에 대해 결과가 기록되고 결함 조치가 완료된 후 최종적으로 확정됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시험 결과 오류가 발생하여 프로그램 코드를 수정한 후 <strong>재시험(Retest)</strong>을 수행했을 때, 해당 재시험 결과가 최신 내용으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitTestResultDocumentForm;

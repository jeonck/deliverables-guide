import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const UnitTestCases: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['시험 케이스 ID 및 개요', '시험 항목의 고유 식별자 및 테스트할 기능/로직에 대한 설명', 'TC_LOGIN_001: 사용자 로그인 기능 정상 동작 확인'],
    ['시험 대상 프로그램/모듈', '시험 대상이 되는 프로그램 ID 및 버전 정보', 'LoginService.java (v1.0)'],
    ['입력 데이터 및 조건', '프로그램 실행 시 필요한 입력 값, 환경 변수, 데이터베이스 초기 상태 등 설정 조건', 'ID: user1, PW: pass123, DB: users 테이블에 user1 존재'],
    ['실행 절차', '시험을 수행하는 구체적인 단계 및 순서 (예: 함수 호출, 입력 값 전달)', '1. LoginService.login(user1, pass123) 호출'],
    ['예상 결과', '해당 입력과 조건 하에서 프로그램이 반환해야 할 정확한 출력 값, DB 상태 변화, 오류 메시지 등', '로그인 성공 메시지 반환, 세션 정보 생성'],
    ['시험 결과 (실제)', '시험 수행 후 실제로 관찰된 결과 및 합격(Pass)/불합격(Fail) 판정', '로그인 성공 메시지 반환 (Pass)'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '단위시험케이스');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '단위시험케이스.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">단위 시험 케이스</h1>
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
          <strong>단위 시험 케이스 (Unit Test Case)</strong>는 개발된 <strong>개별 프로그램 또는 모듈(Unit)</strong>의 기능 및 로직이 프로그램 설계서에 명세된 대로 정확하게 동작하는지 확인하기 위해, 특정 입력 값, 실행 조건, 예상되는 출력 값, 그리고 시험 절차를 상세하게 정의한 문서입니다. 이는 프로그램의 최소 기능 단위에 대한 정확성을 검증하는 데 사용됩니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">개별 로직의 정확성 검증</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 내의 <strong>모든 분기점(Decision Point)</strong>과 핵심 알고리즘이 예상대로 작동하는지 검증하여, 개별 기능의 완성도를 높이고 잠재적 오류를 조기에 발견합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">설계와 구현의 정합성 확인</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 설계서에 정의된 입출력 조건, 데이터 처리 로직, 오류 처리 방안이 코드로 정확하게 구현되었는지 확인하는 기준으로 사용됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">통합 시험의 전제 조건</td>
                <td className="border border-gray-300 px-4 py-2">개별 모듈이 단위 시험을 통과해야만 통합 시험 단계로 넘어갈 수 있으므로, 전체 시스템 품질 확보의 첫 번째 단계를 구성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 프로그램 구현의 품질, 설계서 준수 여부, 그리고 시험 활동의 충실성을 평가하는 가장 기본적인 기술 검증 자료로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 해당 프로그램/모듈을 개발한 개발자 또는 단위 시험 담당 개발자가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 설계서가 완료되고 코딩을 시작하거나 완료한 직후에 작성됩니다. 보통 코딩 전 설계 기반으로 작성하는 것이 권장됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 로직이나 입출력 정의가 변경될 경우 즉시 갱신되어, 시험 케이스가 최신 코드를 정확하게 검증하도록 유지해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitTestCases;

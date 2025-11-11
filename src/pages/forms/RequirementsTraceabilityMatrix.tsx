import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const RequirementsTraceabilityMatrix: React.FC = () => {
  const tableData = [
    ['RFP', null, '제안서', null, '수행계획서', null, '분석 단계', '설계 단계', '구현 단계', '시험 단계', null, null, null, null, null, '기타'],
    ['page', '번호', '내용', 'page', '번호', '내용', '요구 사항 ID', '화면 UI ID', '배치 Job ID', '트랜 잭션 ID', '이벤트 ID', '프로 그램 소스 ID', '단위 테스트 시나 리오 ID', '통합 테스트 시나 리오 ID', '사용자 테스트 시나 리오 ID', null],
    ['1', '10', '회원가입 기능', '2', '25', '사용자 인증 및 가입', 'REQ-001', 'UI-001', '', 'TRN-001', 'EVT-001', 'PGM-001', 'UT-001', 'IT-001', 'UAT-001', ''],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    // Merging cells for the header
    worksheet['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }, // RFP
      { s: { r: 0, c: 2 }, e: { r: 0, c: 3 } }, // 제안서
      { s: { r: 0, c: 4 }, e: { r: 0, c: 5 } }, // 수행계획서
      { s: { r: 0, c: 9 }, e: { r: 0, c: 14 } }, // 시험 단계 (col 9 to 14 is 6 columns)
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '요구사항추적표');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '요구사항추적표.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">요구사항 추적표</h1>
        <button
          onClick={handleExcelDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          엑셀 다운로드
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-2 border-gray-300">
          <thead>
            <tr>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">RFP</th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">제안서</th>
              <th colSpan={2} className="border border-gray-300 px-4 py-2">수행계획서 (착수단계)</th>
              <th className="border border-gray-300 px-4 py-2">분석 단계</th>
              <th className="border border-gray-300 px-4 py-2">설계 단계</th>
              <th className="border border-gray-300 px-4 py-2">구현 단계</th>
              <th colSpan={6} className="border border-gray-300 px-4 py-2">시험 단계</th>
              <th className="border border-gray-300 px-4 py-2">기타</th>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2">page</th>
              <th className="border border-gray-300 px-4 py-2">번호</th>
              <th className="border border-gray-300 px-4 py-2">내용</th>
              <th className="border border-gray-300 px-4 py-2">page</th>
              <th className="border border-gray-300 px-4 py-2">번호</th>
              <th className="border border-gray-300 px-4 py-2">내용</th>
              <th className="border border-gray-300 px-4 py-2">요구 사항 ID</th>
              <th className="border border-gray-300 px-4 py-2">화면 UI ID</th>
              <th className="border border-gray-300 px-4 py-2">배치 Job ID</th>
              <th className="border border-gray-300 px-4 py-2">트랜 잭션 ID</th>
              <th className="border border-gray-300 px-4 py-2">이벤트 ID</th>
              <th className="border border-gray-300 px-4 py-2">프로 그램 소스 ID</th>
              <th className="border border-gray-300 px-4 py-2">단위 테스트 시나 리오 ID</th>
              <th className="border border-gray-300 px-4 py-2">통합 테스트 시나 리오 ID</th>
              <th className="border border-gray-300 px-4 py-2">사용자 테스트 시나 리오 ID</th>
              <th className="border border-gray-300 px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">회원가입 기능</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">25</td>
              <td className="border border-gray-300 px-4 py-2">사용자 인증 및 가입</td>
              <td className="border border-gray-300 px-4 py-2">REQ-001</td>
              <td className="border border-gray-300 px-4 py-2">UI-001</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2">TRN-001</td>
              <td className="border border-gray-300 px-4 py-2">EVT-001</td>
              <td className="border border-gray-300 px-4 py-2">PGM-001</td>
              <td className="border border-gray-300 px-4 py-2">UT-001</td>
              <td className="border border-gray-300 px-4 py-2">IT-001</td>
              <td className="border border-gray-300 px-4 py-2">UAT-001</td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            {/* Add more table body rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequirementsTraceabilityMatrix;

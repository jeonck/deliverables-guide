import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const AccessControlDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['사용자 역할(Role) 정의', '시스템에 접근하는 모든 사용자 유형 (예: 시스템 관리자, 일반 사용자, 승인 담당자) 및 그 역할 정의', '시스템 관리자: 모든 기능 접근 / 일반 사용자: 조회 기능만 접근'],
    ['접근 대상 자원 목록', '기능(화면/프로그램), 데이터베이스 테이블/컬럼, 파일 등 접근 통제가 필요한 모든 자원 목록', '자원: 고객 정보 조회 화면, TB_CUSTOMER 테이블'],
    ['권한 매핑', '정의된 역할이 각 자원에 대해 갖는 구체적인 권한 (예: 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)) 정의', '시스템 관리자: 고객 정보 조회 화면 (CRUD), TB_CUSTOMER (CRUD)'],
    ['인증 및 인가 방식', '사용자 식별 및 인증 방식 (예: ID/PW, OTP), 접근 인가(Authorization)를 처리하는 기술적 로직 정의', '인증: ID/PW, OTP / 인가: 역할 기반 접근 제어 (RBAC)'],
    ['데이터 접근 통제', '중요 데이터 및 개인정보에 대한 접근 로그 기록, 조회 권한 통제 등 상세 보안 처리 방안', '개인정보 조회 시: 접근자, 시간, 조회 내용 로그 기록'],
    ['권한 관리 프로세스', '신규 계정 생성, 권한 변경, 계정 비활성화 등에 대한 관리 절차', '신규 계정: 관리자 승인 후 생성 / 권한 변경: 신청서 제출 후 보안팀 승인'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '접근권한설계서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '접근권한설계서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">접근 권한 설계서</h1>
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
          <strong>접근 권한 설계서 (Access Control Design Document)</strong>는 정보시스템의 보안 요구사항을 충족시키기 위해, 시스템 내의 데이터, 기능, 자원 등에 대한 사용자 및 시스템 계정별 접근 권한 및 제어 방식을 상세하게 정의한 문서입니다. 이는 시스템의 <strong>기밀성(Confidentiality)과 무결성(Integrity)</strong>을 보장하는 핵심 보안 설계 산출물입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">보안 요구사항 구현 기준</td>
                <td className="border border-gray-300 px-4 py-2">사용자 인증(Authentication) 후, <strong>인가(Authorization)</strong>된 사용자만이 특정 기능이나 데이터에 접근할 수 있도록 하는 접근 통제 규칙을 구현하기 위한 기준으로 작용합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">권한 오남용 방지</td>
                <td className="border border-gray-300 px-4 py-2">사용자 역할(Role) 기반으로 권한을 세밀하게 정의하여, 불필요하거나 과도한 접근 권한 부여를 방지하고 권한의 오남용 위험을 최소화합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">운영 및 관리의 효율성</td>
                <td className="border border-gray-300 px-4 py-2"><strong>역할(Role)</strong>을 기반으로 권한을 관리하여, 인사 변동 시 권한 부여/회수 작업을 용이하게 하고, 권한 관리의 일관성을 유지합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 정보시스템의 보안 취약성을 평가하고, <strong>접근 통제 설계가 보안 요구사항 및 법규(예: 개인정보보호법)</strong>를 준수했는지 확인하는 가장 중요한 보안 설계 문서입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 설계자(SA), 보안 전문가, 또는 <strong>기술 책임자(TA)</strong>가 주도적으로 작성하며, 발주처의 보안 관리 부서와 협의하여 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계 이후에 시스템 설계 단계 초기에 작성됩니다. 이는 기능 정의 및 데이터 설계와 병행하여 진행되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">보안 정책 변경, 새로운 기능 추가, 사용자 역할 변경 등이 발생할 경우 지속적으로 갱신하여 실제 시스템의 권한 체계를 정확히 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccessControlDesignDocument;

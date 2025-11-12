import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const SecurityPolicyDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['보안 정책 요약', '시스템에 적용되는 최상위 보안 목표, 범위, 정책 (예: 접근 통제, 데이터 보호, 감사)', '접근 통제 정책: 모든 시스템 접근은 인증 및 인가 절차를 거쳐야 함'],
    ['보안 아키텍처', '시스템의 논리적/물리적 구조에서 보안 영역 및 경계, 보안 구성 요소(방화벽, IPS, 인증 서버) 등의 배치도', 'DMZ 구간에 웹 방화벽, 내부망에 DB 방화벽 배치'],
    ['접근 통제 설계', '사용자 인증/인가 방식, 역할 기반 접근 통제(RBAC) 체계, 접근 권한 매핑 등 상세 설계 (접근 권한 설계서와 연계)', '사용자 ID/PW 인증, 관리자/일반 사용자 역할 분리, CRUD 권한 매핑'],
    ['데이터 보안 설계', '개인정보/중요 데이터의 암호화(저장/전송), 데이터 마스킹, 무결성 검증 등 방안', '개인정보 DB 저장 시 AES256 암호화, 통신 구간 TLS 1.2 적용'],
    ['시스템 보안 설계', '운영체제, DB, 미들웨어 등 구성 요소별 보안 설정 기준 및 취약점 관리 방안', 'OS 보안 패치 주기적 적용, DB 계정 권한 최소화, 미들웨어 관리자 페이지 접근 제한'],
    ['보안 감사 및 로깅', '보안 이벤트 및 사용자 접근 기록의 수집, 저장, 분석, 보관에 대한 상세 계획', '모든 로그인/로그아웃, 데이터 조회/수정 기록, 시스템 오류 기록을 1년간 보관'],
    ['침해사고 대응', '보안 사고 발생 시 대응 조직, 절차, 복구 방안', '사고 발생 시: 비상 연락망 가동 -> 상황 전파 -> 원인 분석 -> 복구 -> 재발 방지 대책 수립'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '보안정책및설계서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '보안정책및설계서.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">보안 정책 및 설계서</h1>
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
          <strong>보안 정책 및 설계서 (Security Policy and Design Document)</strong>는 정보시스템의 안정성과 신뢰성을 확보하기 위해 기관 전체 또는 해당 시스템에 적용될 <strong>보안 원칙 및 규정(Policy)</strong>과, 이를 시스템에 <strong>구현하기 위한 기술적 구조 및 상세 설계 방안(Design)</strong>을 총체적으로 정의한 문서입니다. 이는 관리적, 물리적, 기술적 측면의 보안 요구사항을 모두 포괄합니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">보안 기준 확립 및 준수</td>
                <td className="border border-gray-300 px-4 py-2">정보시스템의 보안 목표 및 범위를 명확히 하고, 관련 법규(예: 개인정보보호법, 정보통신망법) 및 기관의 내부 보안 규정 준수를 위한 공식적인 기준을 제시합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">보안 설계의 체계화</td>
                <td className="border border-gray-300 px-4 py-2">침입 탐지, 접근 통제, 암호화, 데이터 무결성 등 주요 보안 기능이 시스템의 어떤 계층과 모듈에 어떻게 구현될지 기술적으로 상세히 명세하여, 보안 기능 구현의 일관성과 정확성을 보장합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">위험 관리 및 대응</td>
                <td className="border border-gray-300 px-4 py-2">시스템의 잠재적인 보안 위험 및 취약점을 식별하고, 이를 예방, 탐지, 대응, 복구하기 위한 관리적/기술적 통제 방안을 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 보안 요구사항 이행 여부, 보안 설계의 적정성 및 타당성, 그리고 법규 준수 수준을 평가하는 가장 중요한 보안 기준 문서로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 설계자(SA), 정보보안 전문가가 주도적으로 작성하며, 발주처의 정보보호 최고 책임자(CISO) 및 보안 담당 부서와 협의하여 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">요구분석 단계 이후에 시스템 설계 단계 초기에 작성됩니다. 시스템의 아키텍처 및 기능 정의와 병행하여 진행되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">보안 취약점 발견, 법규/정책 변경, 시스템 환경 변화 등으로 인해 보안 전략 또는 기술적 설계에 수정이 발생할 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SecurityPolicyDesignDocument;

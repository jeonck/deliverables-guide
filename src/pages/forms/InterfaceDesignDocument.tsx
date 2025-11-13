import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const InterfaceDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['인터페이스 목록', '시스템이 연동해야 할 모든 내부/외부 인터페이스 목록 및 연동 목적', '인터페이스 ID: IF001, 목적: 고객 정보 동기화'],
    ['연동 유형', '동기(Synchronous) 방식, 비동기(Asynchronous) 방식 등 통신 방식 및 사용되는 프로토콜 (예: REST API, SOAP, DB Link, 파일)', '연동 방식: 동기, 프로토콜: REST API'],
    ['데이터 구조 및 포맷', '송수신되는 데이터의 규격, 필드 목록, 데이터 타입, 길이, 필수 여부 및 인코딩 방식 (예: JSON, XML, Plain Text)', '포맷: JSON, 필드: custId (String, 필수), custName (String, 필수)'],
    ['오류 처리 정의', '연동 실패 시의 오류 코드, 메시지, 재시도 횟수, 처리 로직 정의', '오류 코드: E001, 메시지: 시스템 연동 실패, 재시도: 3회, 로직: 로그 기록 후 관리자 알림'],
    ['보안 방안', '통신 구간 암호화(HTTPS), 인증/인가 방식 등 보안 요구사항을 위한 기술적 처리 방안', '암호화: HTTPS, 인증: OAuth 2.0'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">인터페이스 설계서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="인터페이스설계서"
          fileName="인터페이스설계서.xlsx"
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
          인터페이스 설계서는 구축되는 정보시스템이 외부 시스템이나 다른 내부 모듈과 데이터를 주고받으며 상호 연동하기 위해 필요한 모든 통신 방식, 데이터 형식, 통신 규약(프로토콜), 연동 규칙, 오류 처리 방안 등을 상세히 정의한 문서입니다. 이는 시스템 간의 정확하고 안정적인 정보 교환을 보장하기 위한 기술적 명세입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>시스템 연동의 명확화:</strong> 내부 모듈 간 또는 외부 시스템과의 연동 방식과 데이터 규격을 명확히 정의하여, 관련 개발자들이 통일된 기준으로 연동 기능을 구현하도록 합니다.</li>
          <li><strong>통합 및 시험 기준 제공:</strong> 시스템 간의 데이터 송수신 기능을 통합 시험(Integration Test) 및 시스템 시험(System Test) 단계에서 검증하는 주요 기준이 됩니다.</li>
          <li><strong>오류 및 예외 처리 기준:</strong> 연동 과정에서 발생할 수 있는 통신 오류, 데이터 형식 불일치, 응답 지연 등 다양한 예외 상황에 대한 표준 처리 로직을 정의하여 시스템의 안정성을 높입니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 시스템의 연동 요구사항 이행 여부, 인터페이스 설계의 기술적 타당성 및 보안 취약점 방지 대책의 적절성을 검토하는 핵심 자료로 활용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 설계자(SA), 기술 책임자(TA), 또는 특정 인터페이스 모듈 개발 담당자가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">응용시스템 설계 단계에서 시스템 간의 연동 범위와 방식이 확정된 후, 상세 설계 단계 초기에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">연동 대상 시스템의 변경, 데이터 규격의 변경, 또는 통신 프로토콜의 수정이 발생할 경우 지속적으로 갱신하여 실제 구현된 인터페이스의 내용을 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InterfaceDesignDocument;

import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const ProgramDesignDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['프로그램 개요', '프로그램 ID, 명칭, 기능 정의서 및 모듈과의 연계', '프로그램 ID: PGM001, 명칭: 고객정보조회, 연계 모듈: 고객관리'],
    ['요구사항ID', '해당 프로그램이 구현하는 기능과 관련된 요구사항 ID', 'REQ-001, REQ-005'],
    ['입/출력 정의', '프로그램에 전달되는 입력 데이터와 처리 후 생성되는 출력 데이터의 형식 및 내용', '입력: 고객ID (VARCHAR2(10)), 출력: 고객명 (VARCHAR2(100)), 연락처 (VARCHAR2(20))'],
    ['처리 로직 (Flow)', '프로그램 내부의 핵심 알고리즘, 로직 흐름도(Flowchart), 조건/반복 처리 등을 구체적으로 서술', '고객ID로 DB 조회 -> 결과 존재 시 고객명, 연락처 반환 -> 결과 없을 시 오류 처리'],
    ['인터페이스 정의', '프로그램이 사용하는 내부 모듈, DB 테이블, 외부 시스템 등과의 데이터 연동 및 호출 규격', 'DB 인터페이스: TB_CUSTOMER 테이블 조회, 외부 시스템: SMS 발송 API 호출'],
    ['오류 및 예외 처리', '프로그램 실행 중 발생 가능한 오류 코드, 메시지, 그리고 이에 대한 처리 로직', '오류 코드: ERR001, 메시지: 고객 정보 없음, 처리: 사용자에게 알림 후 종료'],
    ['내부 변수/자료구조', '프로그램 내에서 사용되는 주요 변수, 배열, 구조체 등 자료구조의 정의', '변수: custId (String), custName (String), phoneNum (String)'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">프로그램 설계서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="프로그램설계서"
          fileName="프로그램설계서.xlsx"
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
          <strong>프로그램 설계서 (Program Design Document)</strong>는 응용시스템 설계서에서 정의된 개별 모듈 또는 프로그램 단위에 대해 실제 코딩(구현)에 필요한 모든 기술적 상세 내용을 정의한 문서입니다. 이는 프로그램의 기능(Function)을 실행하기 위한 논리(Logic), 입출력 데이터, 내부 자료구조, 처리 흐름(Flow), 그리고 외부 인터페이스 등을 명세화한 개발자의 최종 구현 지침서 역할을 합니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>구현 표준 제시:</strong> 개발자가 코딩을 시작하기 전에 처리 로직과 기술적 세부 사항을 명확히 이해하고, 표준화된 방식으로 프로그램을 구현하도록 하는 기준으로 사용됩니다.</li>
          <li><strong>개발 품질 향상:</strong> 로직에 대한 사전 검토(Review)를 통해 설계 단계에서 잠재적인 오류나 비효율적인 로직을 발견하고 수정하여, 코드 품질과 성능을 향상시킵니다.</li>
          <li><strong>단위 시험의 기준:</strong> 프로그램의 모든 기능과 로직 분기점이 명세화되어 있으므로, 이를 기반으로 단위 시험(Unit Test) 케이스를 작성하고 시험을 수행하는 근거 자료가 됩니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 상세 설계의 충실성과 요구된 기능의 정확한 반영 여부, 그리고 개발 표준 준수 여부를 확인하는 데 사용되는 가장 상세한 기술 산출물입니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 프로그램 개발자 또는 <strong>모듈별 개발 리더(PL)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">응용시스템 설계(모듈 분할)가 완료된 후, 프로그램 구현(코딩)을 시작하기 직전인 상세 설계 단계에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로그램 구현 및 단위 시험 과정에서 로직 변경, 인터페이스 수정 등이 발생할 경우 지속적으로 갱신하며, 최종적으로 단위 시험이 완료된 시점의 구조를 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramDesignDocument;

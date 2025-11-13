import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const DatabaseTableForm: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['테이블 명칭', '실제 DB에 생성된 물리적인 테이블 이름.', 'TB_USER_INFO (사용자 정보 테이블)'],
    ['컬럼 목록 및 정의', '테이블 내 모든 컬럼의 물리명, 데이터 타입, 길이, NULL 허용 여부, 기본값 등.', 'USER_ID (VARCHAR2(20), NOT NULL, PK), USER_NM (VARCHAR2(100), NULL)'],
    ['제약조건', '기본 키(PK), 외래 키(FK), 고유 키(Unique Key) 등 무결성을 강제하는 제약조건 명세.', 'PK_TB_USER_INFO (USER_ID), FK_TB_USER_INFO_DEPT (DEPT_CD 참조)'],
    ['인덱스', '성능 최적화를 위해 생성된 모든 인덱스의 명칭, 구성 컬럼, 유형.', 'IDX_USER_NM (USER_NM, Normal Index), IDX_USER_LOGIN_ID (LOGIN_ID, Unique Index)'],
    ['테이블 스페이스 및 저장 옵션', '테이블이 저장되는 물리적 공간(Tablespace) 및 저장 옵션(Storage Option).', '테이블스페이스: TS_DATA_01, 초기 저장 공간: 10M, 다음 증분: 5M'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">데이터베이스 테이블</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="데이터베이스테이블"
          fileName="데이터베이스테이블.xlsx"
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
          <strong>데이터베이스 테이블</strong>은 데이터베이스 설계서에 따라 특정 DBMS 환경(예: Oracle, MySQL) 내에 생성된 실제 데이터 저장 구조입니다. 이는 컬럼(Column), 데이터 타입, 길이, 제약조건(기본 키, 외래 키 등), 인덱스 등 물리적 설계의 모든 요소를 포함하며, 시스템에서 사용되는 모든 데이터의 저장 및 접근 기준이 됩니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">물리적 설계 구현 증명</td>
                <td className="border border-gray-300 px-4 py-2">테이블 정의서에 명세된 모든 설계 내용(컬럼명, 타입, 제약조건)이 운영 환경의 DB에 정확하게 적용되었음을 최종적으로 증명하는 실체입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 무결성 강제</td>
                <td className="border border-gray-300 px-4 py-2">기본 키(PK), 외래 키(FK), Not Null 제약조건 등을 통해 데이터베이스 시스템 자체가 데이터의 정확성 및 일관성을 유지하도록 강제하는 핵심 요소입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">성능 최적화 반영</td>
                <td className="border border-gray-300 px-4 py-2">인덱스, 파티션(Partitioning) 등 성능 향상 기법이 실제 DB 구조에 반영되었는지 확인하는 근거를 제공합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 데이터 표준 준수율, 무결성 제약조건의 적절성, 설계서와 구현 간의 정합성을 직접 점검하는 최종 대상입니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 <strong>DBA (데이터베이스 관리자)</strong>가 데이터베이스 설계서를 기반으로 DDL 스크립트를 작성하고 실행하여 생성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 생성 시점</td>
                <td className="border border-gray-300 px-4 py-2">물리 데이터 모델링 및 테이블 정의서 작성이 완료되고, 프로그램 구현 및 단위 시험을 시작하기 위한 테스트/개발 환경 구축 시점에 생성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 시험 또는 성능 튜닝 과정에서 테이블 구조, 인덱스, 제약조건 등에 변경이 발생할 경우 즉시 수정하고, 해당 변경사항을 DDL 또는 테이블 정의서에 반영해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DatabaseTableForm;

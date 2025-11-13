import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const AttributeDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['논리명 및 물리명', '속성의 표준화된 한글 이름과 데이터베이스 테이블 컬럼으로 사용될 영문 이름', '논리명: 고객명, 물리명: CUST_NM'],
    ['데이터 타입 및 길이', '속성이 저장할 데이터의 유형 (예: CHAR, VARCHAR, NUMBER, DATE) 및 최대 길이', '데이터 타입: VARCHAR, 길이: 100'],
    ['필수 여부 (NULL)', '해당 속성에 반드시 값이 있어야 하는지 여부 (NOT NULL) 명시', '필수 여부: NOT NULL (Y)'],
    ['정의/설명', '해당 속성이 시스템에서 갖는 의미에 대한 상세한 설명', '고객의 전체 이름'],
    ['도메인/코드 연계', '해당 속성이 특정 데이터 표준 도메인이나 코드를 사용하는 경우 그 정보 명시', '도메인: 이름도메인, 코드: 성별코드 (M/F)'],
    ['제약조건', '기본값(Default Value), 범위 제약(Range Constraint) 등 데이터 입력 시 필요한 추가 제약조건', '기본값: \'미지정\', 범위: 0 ~ 100'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">속성 정의서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="속성정의서"
          fileName="속성정의서.xlsx"
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
          <strong>속성 정의서 (Attribute Definition Document)</strong>는 데이터베이스 설계의 논리적 모델링 단계에서 도출된 모든 엔티티(Entity)의 속성(Attribute) 각각에 대해 논리명, 물리명, 데이터 타입, 길이, 필수 여부, 상세 정의 및 설명, 제약조건 등을 상세하고 체계적으로 명세화한 문서입니다. 이는 데이터베이스의 가장 세부적인 데이터 요소를 규정하는 핵심 문서입니다.
        </p>

        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-2xl mr-2">2.</span> 목적 및 역할 (Purpose and Role)
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
          <li><strong>데이터 요소의 명확화:</strong> 시스템에서 사용되는 모든 데이터 항목에 대해 표준화된 정의와 형식을 확정하여, 개발팀과 사용자 간의 데이터 해석 차이를 없애고 일관성을 확보합니다.</li>
          <li><strong>데이터 무결성 확보:</strong> 각 속성의 데이터 타입, 길이, 필수 여부(NULL/NOT NULL), 허용 값 범위 등 무결성 제약조건을 명시하여, 데이터베이스에 잘못된 값이 입력되는 것을 방지합니다.</li>
          <li><strong>프로그램 개발의 기준:</strong> 프로그램 개발자가 데이터베이스에 접근하거나 데이터를 화면에 표시/입력 처리할 때, 해당 속성의 정확한 형식과 제약사항을 알 수 있도록 구현의 기준을 제시합니다.</li>
          <li><strong>감리 및 검증 자료:</strong> 감리원이 데이터 표준화 정의서가 실제 속성 설계에 충실히 적용되었는지, 그리고 데이터 무결성이 충분히 확보되도록 설계되었는지 확인하는 세부적인 검토 기준으로 사용됩니다.</li>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 데이터 모델러(Data Modeler) 또는 <strong>시스템 분석가(SA)</strong>가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">논리 데이터 모델링 활동 중 엔티티가 정의되고 속성들이 도출된 직후에 작성됩니다. 이는 엔티티 정의서와 밀접하게 연관됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">프로젝트 진행 중 속성의 추가/삭제, 데이터 타입이나 길이 변경, 필수 여부 변경 등 속성에 대한 수정 사항이 발생할 경우 지속적으로 갱신하여 물리적 DB 구축 전까지 최종 구조를 확정해야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttributeDefinitionDocument;

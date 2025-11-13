import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const ClassSpecificationDocumentForm: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['클래스 개요', '클래스 이름, 역할 및 책임, 상속 관계(슈퍼/서브 클래스) 등 개요 정보.', '클래스명: User, 역할: 사용자 정보 관리, 상속: Person 클래스 상속'],
    ['속성(Attribute) 정의', '클래스가 갖는 데이터의 이름, 데이터 타입, 접근 제어자 (private, public 등), 상세 설명.', '속성명: userId, 타입: String, 접근: private, 설명: 사용자 고유 ID'],
    ['기능/메소드(Operation) 정의', '클래스가 제공하는 기능의 메소드 이름, 반환 타입, 매개변수(Parameter) 목록, 접근 제어자, 로직 설명.', '메소드명: createUser(), 반환: User, 매개변수: (name: String, email: String), 접근: public, 로직: 새로운 사용자 생성 및 저장'],
    ['관계 정의', '해당 클래스가 다른 클래스와 맺고 있는 관계 (예: 연관(Association), 의존(Dependency), 집합(Aggregation), 합성(Composition)).', 'User 클래스는 Order 클래스와 1:N 연관 관계를 가짐 (한 명의 사용자는 여러 개의 주문을 할 수 있음).'],
    ['제약조건', '해당 클래스 또는 속성/메소드에 적용되는 제약사항 및 불변 조건(Invariant).', 'userId는 반드시 유니크해야 함. email 형식은 유효해야 함.'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">클래스 명세서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="클래스명세서"
          fileName="클래스명세서.xlsx"
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
          <strong>클래스 명세서 (Class Specification Document)</strong>는 객체지향 시스템의 설계 단계에서 도출된 <strong>각 클래스(Class)</strong>에 대해 클래스 이름, 역할, 속성(Attribute), 기능/메소드(Operation), 다른 클래스와의 관계 등을 상세하고 구조적으로 정의한 문서입니다. 이는 <strong>프로그램 구현(코딩)</strong>의 직접적인 기준이 되는 상세 설계 산출물입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">객체 모델의 구체화</td>
                <td className="border border-gray-300 px-4 py-2">논리적인 개념으로 정의된 객체들을 실제 구현될 클래스 구조로 변환하여, 객체 모델을 구체화하고 설계의 일관성을 유지합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">프로그램 구현의 기준</td>
                <td className="border border-gray-300 px-4 py-2">각 클래스의 <strong>데이터 구조(속성)</strong>와 <strong>행위(메소드)</strong>를 명확히 정의하여, 개발자가 표준화된 방식으로 코딩을 수행하고 모듈 간 인터페이스를 정확하게 구현하도록 안내합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">재사용성 및 유지보수성 향상</td>
                <td className="border border-gray-300 px-4 py-2">클래스 간의 책임과 관계를 명확히 분리하고 정의하여, <strong>클래스의 응집도(Cohesion)</strong>와 <strong>결합도(Coupling)</strong>를 최적화함으로써 유지보수 용이성과 코드 재사용성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 객체지향 설계 원칙 준수 여부, 프로그램 설계서 및 데이터베이스 설계와의 정합성, 그리고 구현의 정확성을 평가하는 핵심 기준 자료로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 설계자(SA), 프로젝트 리더(PL) 또는 해당 모듈 개발 책임자가 주도적으로 작성합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">논리 시스템 설계 이후, 프로그램 코딩을 시작하기 직전인 상세 설계 단계에 작성됩니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">구현 과정에서 클래스 책임, 속성, 메소드 등에 변경이 발생하거나, 성능 최적화 등으로 구조가 수정될 경우 지속적으로 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassSpecificationDocumentForm;
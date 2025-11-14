import React from 'react';

const DocumentManagement: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">산출물 문서 관리</h1>

      {/* 문서 템플릿 이력 */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="text-2xl mr-2">📜</span> 문서 템플릿 이력
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">버전</th>
                <th className="border border-gray-300 px-4 py-2">수정일자</th>
                <th className="border border-gray-300 px-4 py-2">수정자</th>
                <th className="border border-gray-300 px-4 py-2">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1.0</td>
                <td className="border border-gray-300 px-4 py-2">15/12/2020</td>
                <td className="border border-gray-300 px-4 py-2">metacog</td>
                <td className="border border-gray-300 px-4 py-2">최초 작성/배포( metacog(email:metacog@abc.com )</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2.0</td>
                <td className="border border-gray-300 px-4 py-2">04/01/2023</td>
                <td className="border border-gray-300 px-4 py-2">metacog</td>
                <td className="border border-gray-300 px-4 py-2">버전/사용가이드 시트(Sheet) 추가 및 요구사항추적표 항목 추가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 프로젝트 정보 */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="text-2xl mr-2">📊</span> 프로젝트 정보
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold w-1/4">프로젝트명</td>
                <td className="border border-gray-300 px-4 py-2">OOOO 프로젝트</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">문서작성자</td>
                <td className="border border-gray-300 px-4 py-2">Tom</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">승인자</td>
                <td className="border border-gray-300 px-4 py-2">Harry</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">승인일자</td>
                <td className="border border-gray-300 px-4 py-2">04/01/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 문서이력 */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="text-2xl mr-2">📝</span> 문서이력
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">버전</th>
                <th className="border border-gray-300 px-4 py-2">변경일자</th>
                <th className="border border-gray-300 px-4 py-2">변경자</th>
                <th className="border border-gray-300 px-4 py-2">변경 내용 요약</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1.0</td>
                <td className="border border-gray-300 px-4 py-2">04/01/2023</td>
                <td className="border border-gray-300 px-4 py-2">Tom</td>
                <td className="border border-gray-300 px-4 py-2">최초 작성</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1.1</td>
                <td className="border border-gray-300 px-4 py-2">05/01/2023</td>
                <td className="border border-gray-300 px-4 py-2">Harry</td>
                <td className="border border-gray-300 px-4 py-2">테일러링 산출물 수정사항 변경</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentManagement;

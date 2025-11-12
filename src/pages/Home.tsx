import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allDeliverables } from '../data/deliverables';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredDeliverables = allDeliverables.filter((deliverable) =>
    deliverable.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryLinkClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12 py-8">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
          정보시스템 감리 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">산출물 가이드</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
          정보시스템 감리 프로젝트의 각 단계별 산출물을 체계적으로 안내합니다.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-12 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="산출물 검색..."
          className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">검색 결과</h2>
          {filteredDeliverables.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDeliverables.map((deliverable, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{deliverable.name}</h3>
                  <p className="text-gray-600 mb-2">카테고리: {deliverable.category}</p>
                  <div className="flex space-x-2">
                    {deliverable.categoryPath.startsWith('/forms/') ? (
                      <Link
                        to={deliverable.categoryPath}
                        onClick={(e) => handleCategoryLinkClick(e, deliverable.categoryPath)}
                        className="text-blue-600 hover:underline"
                      >
                        카테고리 보기
                      </Link>
                    ) : (
                      <span>{deliverable.category}</span>
                    )}
                    {deliverable.formPath && (
                      <Link
                        to={deliverable.formPath}
                        className="text-green-600 hover:underline"
                      >
                        양식 보기
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg">검색 결과가 없습니다.</div>
          )}
        </div>
      )}

      {/* All Categories Grid (only if no search term) */}
      {!searchTerm && (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
          {[
            { name: '표준산출물목록', path: '/etc', icon: '📦' },
            { name: '요구사항', path: '/requirements', icon: '📋' },
            { name: '설계', path: '/design', icon: '📐' },
            { name: '구현', path: '/implementation', icon: '💻' },
            { name: '테스트', path: '/testing', icon: '🧪' },
            { name: '전환', path: '/transition', icon: '🚚' },
            { name: '문서관리', path: '/document-management', icon: '🗂️' },
          ].map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group block p-2 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-36 h-36 flex flex-col justify-center items-center"
            >
              <div className="flex items-center justify-center h-7 w-7 rounded-full bg-blue-100 text-blue-600 mx-auto mb-1 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="text-lg">{category.icon}</span>
              </div>
              <h3 className="text-center text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

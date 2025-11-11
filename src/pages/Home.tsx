import { Link } from 'react-router-dom';

const categories = [
  { name: '사업수행', path: '/project-plan', icon: '📝' },
  { name: '요구사항', path: '/requirements', icon: '📋' },
  { name: '설계', path: '/design', icon: '📐' },
  { name: '구현', path: '/implementation', icon: '💻' },
  { name: '테스트', path: '/testing', icon: '🧪' },
  { name: '품질보증', path: '/qa', icon: '🛡️' },
  { name: '보안', path: '/security', icon: '🔒' },
  { name: '기타', path: '/etc', icon: '📎' },
];

export default function Home() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <span className="text-3xl">{category.icon}</span>
            </div>
            <h3 className="text-center text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

## 정보시스템 감리 산출물 가이드 포털: 구현 코드 구조

본 문서는 "정보시스템 감리 산출물 가이드 포털" 솔루션의 주요 코드 구조와 기능 구현 방식을 설명합니다.

### 1. 개요 (Overview)

본 포털은 React, TypeScript, Vite, Tailwind CSS를 기반으로 구축된 단일 페이지 애플리케이션(SPA)입니다. 사용자에게 정보시스템 감리 산출물에 대한 상세 가이드와 양식을 제공하며, 효율적인 정보 탐색 및 활용을 목표로 합니다.

### 2. 주요 파일 및 역할 (Key Files and Roles)

*   **`src/App.tsx`**:
    *   애플리케이션의 메인 진입점 역할을 하며, React Router를 사용하여 전체 페이지 라우팅을 관리합니다.
    *   `Navbar` 컴포넌트와 `Footer` 컴포넌트를 포함하여 애플리케이션의 전반적인 레이아웃을 구성합니다.
    *   각 카테고리 페이지 및 개별 산출물 양식 페이지로의 경로를 정의합니다.
    *   **핵심 코드 예시 (라우팅):**
        ```tsx
        // src/App.tsx
        import UseCaseSpecification from './pages/forms/UseCaseSpecification';
        // ... (다른 import 생략)

        function App() {
          return (
            <Router>
              {/* ... */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/requirements" element={<Requirements />} />
                {/* ... (다른 라우트 생략) */}
                <Route path="/forms/use-case-specification" element={<UseCaseSpecification />} />
                <Route path="/forms/component-design-document" element={<ComponentDesignDocument />} />
              </Routes>
              {/* ... */}
            </Router>
          );
        }
        ```
*   **`src/components/Navbar.tsx`**:
    *   상단 내비게이션 바를 구현하는 컴포넌트입니다.
    *   주요 감리 단계(요구사항, 설계, 구현 등) 및 표준산출물목록, 문서관리 메뉴로의 링크를 제공합니다.
    *   데스크톱 및 모바일 환경에 대응하는 반응형 메뉴를 포함합니다.
    *   **핵심 코드 예시 (메뉴 링크):**
        ```tsx
        // src/components/Navbar.tsx
        import { Link } from 'react-router-dom';

        const Navbar = () => {
          return (
            <nav className="...">
              <div className="...">
                {/* ... */}
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                  <NavLink to="/etc">표준산출물목록</NavLink>
                  <NavLink to="/requirements">요구사항</NavLink>
                  {/* ... */}
                  <NavLink to="/document-management">문서관리(예시)</NavLink>
                </div>
                {/* ... */}
              </div>
            </nav>
          );
        };

        const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
          <Link to={to} className="...">
            {children}
          </Link>
        );
        ```
*   **`src/pages/Home.tsx`**:
    *   포털의 메인 페이지입니다.
    *   전체 산출물을 대상으로 하는 검색 기능을 제공하며, 검색 결과가 없을 경우 주요 감리 단계별 카테고리 카드를 표시합니다.
    *   카테고리 카드를 통해 각 단계별 페이지로 이동할 수 있습니다.
    *   **핵심 코드 예시 (검색 기능):**
        ```tsx
        // src/pages/Home.tsx
        import { allDeliverables } from '../data/deliverables';

        export default function Home() {
          const [searchTerm, setSearchTerm] = useState('');

          const filteredDeliverables = allDeliverables.filter((deliverable) =>
            deliverable.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          return (
            <div className="...">
              {/* ... */}
              <input
                type="text"
                placeholder="산출물 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* ... */}
              {searchTerm && (
                <div className="mb-12">
                  {filteredDeliverables.map((deliverable, index) => (
                    <div key={index} className="...">
                      <h3 className="...">{deliverable.name}</h3>
                      {/* ... */}
                      {deliverable.formPath && (
                        <Link to={deliverable.formPath} className="text-green-600 hover:underline">
                          양식 보기
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* ... */}
            </div>
          );
        }
        ```
*   **`src/pages/Requirements.tsx`, `src/pages/Design.tsx`, `src/pages/Etc.tsx` 등**:
    *   각 감리 단계별 또는 특정 분류별 산출물 목록을 표시하는 페이지입니다.
    *   내부적으로 해당 카테고리에 속하는 산출물 데이터를 배열 형태로 관리하며, 이를 테이블 형태로 렌더링합니다.
    *   각 산출물 항목에 대해 상세 양식 페이지로의 링크를 제공합니다.
    *   **핵심 코드 예시 (Etc.tsx의 산출물 링크 렌더링):**
        ```tsx
        // src/pages/Etc.tsx
        import { Link } from 'react-router-dom';
        import { allDeliverables } from '../data/deliverables';

        const Etc = () => {
          const cbdDeliverables = [
            // ... (산출물 데이터 정의)
            { phase: '설계', code: 'D3', name: '컴포넌트 설계서', otherMethodology: '컴포넌트 명세서', eaDeliverable: '', formPath: '/forms/component-design-document' },
            // ...
          ];

          return (
            <div className="...">
              {/* ... */}
              <tbody>
                {cbdDeliverables.map((item, index) => {
                  const matchingDeliverable = allDeliverables.find(d => d.name === item.name);
                  return (
                    <tr key={index}>
                      {/* ... */}
                      <td className="px-4 py-2 border border-gray-300 w-3/8">
                        {item.formPath ? ( // item.formPath가 있으면 우선 사용
                          <Link to={item.formPath} className="text-blue-600 hover:underline">
                            {item.name}
                          </Link>
                        ) : matchingDeliverable && matchingDeliverable.formPath ? ( // 없으면 allDeliverables에서 찾은 formPath 사용
                          <Link to={matchingDeliverable.formPath} className="text-blue-600 hover:underline">
                            {item.name}
                          </Link>
                        ) : (
                          <span>{item.name}</span>
                        )}
                      </td>
                      {/* ... */}
                    </tr>
                  );
                })}
              </tbody>
              {/* ... */}
            </div>
          );
        };
        ```
*   **`src/pages/forms/*.tsx`**:
    *   `UseCaseSpecification.tsx`, `ComponentDesignDocument.tsx` 등 개별 산출물 양식에 대한 상세 가이드 페이지입니다.
    *   각 산출물의 정의, 목적, 역할, 작성 주체 및 시점, 주요 포함 내용, 작성 예시 등을 구조화된 형태로 제공합니다.
    *   페이지 내 특정 섹션으로 빠르게 이동할 수 있는 앵커 링크 기능을 포함합니다.
    *   **핵심 코드 예시 (앵커 링크 스크롤):**
        ```tsx
        // src/pages/forms/UseCaseSpecification.tsx
        const UseCaseSpecification: React.FC = () => {
          // ...
          const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
            e.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              const navbarOffset = 100; // sticky navbar 높이
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          };

          return (
            <div className="...">
              {/* ... */}
              <nav className="mb-12">
                <ul className="flex justify-center gap-4">
                  <li><a href="#definition" onClick={(e) => handleNavClick(e, 'definition')} className="text-blue-600 hover:underline">정의</a></li>
                  {/* ... */}
                </ul>
              </nav>
              {/* ... */}
            </div>
          );
        };
        ```
*   **`src/data/deliverables.ts`**:
    *   모든 산출물에 대한 메타데이터를 중앙에서 관리하는 파일입니다.
    *   `allDeliverables` 배열에 각 산출물의 `name`, `category`, `categoryPath`, 그리고 `formPath` (양식 페이지 경로) 등의 정보를 정의합니다.
    *   이 데이터는 `Home.tsx`의 검색 기능 및 각 카테고리 페이지의 링크 생성에 활용됩니다.
    *   **핵심 코드 예시 (Deliverable 인터페이스 및 데이터):**
        ```tsx
        // src/data/deliverables.ts
        export interface Deliverable {
          name: string;
          category: string;
          categoryPath: string;
          formPath?: string; // Optional path to the form page
        }

        export const allDeliverables: Deliverable[] = [
          {
            name: '유스케이스 명세서',
            category: '요구사항',
            categoryPath: '/requirements',
            formPath: '/forms/use-case-specification',
          },
          {
            name: '컴포넌트 설계서',
            category: '설계',
            categoryPath: '/design',
            formPath: '/forms/component-design-document',
          },
          // ... (다른 산출물 데이터)
        ];
        ```
*   **`src/components/ExcelDownloadButton.tsx`**:
    *   테이블 데이터를 엑셀 파일로 다운로드할 수 있는 재사용 가능한 버튼 컴포넌트입니다.
    *   `tableData`, `sheetName`, `fileName` 등의 props를 받아 엑셀 파일을 생성하고 다운로드합니다.
    *   **핵심 코드 예시 (컴포넌트 정의 및 사용):**
        ```tsx
        // src/components/ExcelDownloadButton.tsx
        import React from 'react';
        import { saveAs } from 'file-saver';
        import * as XLSX from 'xlsx';

        interface ExcelDownloadButtonProps {
          tableData: any[][];
          sheetName: string;
          fileName: string;
        }

        const ExcelDownloadButton: React.FC<ExcelDownloadButtonProps> = ({ tableData, sheetName, fileName }) => {
          const handleExcelDownload = () => {
            const worksheet = XLSX.utils.aoa_to_sheet(tableData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(data, fileName);
          };

          return (
            <button onClick={handleExcelDownload} className="...">
              {/* ... */}
              엑셀 다운로드
            </button>
          );
        };

        export default ExcelDownloadButton;

        // 사용 예시 (UseCaseSpecification.tsx에서)
        // const tableData = [['항목', '내용'], ...];
        // <ExcelDownloadButton tableData={tableData} sheetName="유스케이스 명세서" fileName="유스케이스_명세서_예시" />
        ```

### 3. 링크 및 검색 로직 (Linking and Search Logic)

*   **중앙 데이터 관리 (`deliverables.ts`):**
    *   `allDeliverables` 배열은 모든 산출물의 '진실의 원천(Single Source of Truth)' 역할을 합니다. 각 산출물의 고유한 이름과 해당 양식 페이지의 경로(`formPath`)가 이곳에 정의됩니다.
*   **카테고리 페이지 (`Requirements.tsx`, `Design.tsx`, `Etc.tsx`):**
    *   각 페이지는 자체적인 산출물 목록 배열(예: `analysisDeliverables`, `designDeliverables`, `cbdDeliverables`)을 가집니다.
    *   이 배열의 각 `item.name`을 `deliverables.ts`의 `allDeliverables`에서 찾아(`allDeliverables.find(d => d.name === item.name)`) `matchingDeliverable` 객체를 얻습니다.
    *   링크 생성 시, `Etc.tsx`의 경우 `item.formPath`가 명시적으로 정의되어 있으면 이를 우선적으로 사용하고, 그렇지 않으면 `matchingDeliverable.formPath`를 사용하여 `<Link>` 컴포넌트를 렌더링합니다. 이 로직은 특정 산출물에 대한 링크 연결의 견고성을 확보합니다.
*   **검색 기능 (`Home.tsx`):**
    *   사용자가 검색어를 입력하면 `allDeliverables` 배열 전체를 대상으로 `deliverable.name` 속성을 기준으로 필터링하여 검색 결과를 표시합니다. 이는 모든 산출물이 검색 대상이 될 수 있도록 합니다.
*   **앵커 링크 (`UseCaseSpecification.tsx`, `ComponentDesignDocument.tsx` 등 양식 페이지):**
    *   페이지 내 특정 섹션으로 이동하는 앵커 링크는 `handleNavClick` 함수를 통해 구현됩니다.
    *   이 함수는 `event.preventDefault()`를 호출하여 기본 링크 동작을 막고, `document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' })`를 사용하여 부드러운 스크롤을 구현합니다.
    *   특히, 상단에 고정된 내비게이션 바(`Navbar`)의 높이를 고려하여 `navbarOffset`을 적용, 스크롤 시 제목이 가려지지 않도록 정확한 위치로 이동시킵니다.

### 4. 기술 스택 (Technology Stack)

*   **프레임워크/라이브러리:** React
*   **언어:** TypeScript, JavaScript, HTML, CSS
*   **빌드 도구:** Vite
*   **스타일링:** Tailwind CSS
*   **라우팅:** React Router DOM
*   **기타:** File-Saver, XLSX (엑셀 처리)

이러한 구조를 통해 본 포털은 감리 산출물 정보를 체계적으로 제공하고, 사용자 친화적인 방식으로 접근할 수 있도록 구현되었습니다.
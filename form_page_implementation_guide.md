## '데이터 전환 및 초기 데이터 설계서' 양식 페이지 구성 및 구현 방법 설명

본 문서는 '데이터 전환 및 초기 데이터 설계서' 양식 페이지(`DataMigrationAndInitialDataDesignDocument.tsx`)의 구성과 구현 방법을 상세히 설명합니다.

### 1. 개요 (Overview)

'데이터 전환 및 초기 데이터 설계서' 양식 페이지는 신규 정보시스템 운영을 위한 데이터 이관 및 초기 데이터 구축 방안을 정의한 문서의 내용을 사용자에게 제공합니다. 정의, 목적, 작성 주체, 주요 포함 내용, 그리고 실제 작성 예시를 구조화된 형태로 보여주며, 사용자가 내용을 쉽게 탐색하고 필요시 예시 데이터를 엑셀로 다운로드할 수 있도록 구현되었습니다.

### 2. 파일 위치 (File Location)

`src/pages/forms/DataMigrationAndInitialDataDesignDocument.tsx`

### 3. 구성 (Structure)

*   **React Functional Component**: `DataMigrationAndInitialDataDesignDocument`라는 이름의 React 함수형 컴포넌트로 구현되었습니다.
*   **데이터 정의 (`data` 배열)**: 페이지에 표시될 주요 콘텐츠(정의, 목적, 예시 등)는 JavaScript 객체 배열인 `data` 변수에 정의되어 있습니다. 이는 테이블 형태로 렌더링될 예시 데이터와 주요 설명 항목을 포함합니다.
*   **Excel 다운로드 데이터 (`tableData`)**: `data` 배열을 기반으로 `ExcelDownloadButton` 컴포넌트에 전달될 2차원 배열 형태의 `tableData`가 생성됩니다.
*   **내비게이션 (`handleNavClick`)**: 페이지 내 특정 섹션으로 부드럽게 스크롤 이동하는 기능을 위한 `handleNavClick` 함수가 정의되어 있습니다.
*   **UI 렌더링**: Tailwind CSS를 활용하여 반응형 및 시각적으로 깔끔한 UI를 구성합니다. `<header>`, `<nav>`, `<section>`, `<footer>` 등의 시맨틱 태그를 사용하여 문서 구조를 명확히 합니다.
*   **외부 컴포넌트**: `ExcelDownloadButton` 컴포넌트를 재사용하여 엑셀 다운로드 기능을 제공합니다.

### 4. 주요 구현 방법 (Key Implementation Details)

#### 4.1. 콘텐츠 렌더링

페이지의 주요 내용은 `data` 배열에 정의된 정보를 기반으로 렌더링됩니다. 정의, 목적 및 역할, 작성 주체 및 시점, 주요 포함 내용은 `<section>` 태그와 `<h2/>`, `<p/>`, `<ul>`, `<table>` 등을 활용하여 구조화됩니다. 특히, '작성 예시' 섹션에서는 `data` 배열을 `map` 함수로 순회하며 동적으로 테이블 행을 생성합니다.

**코드 스니펫 (예시 테이블 렌더링):**

```tsx
// src/pages/forms/DataMigrationAndInitialDataDesignDocument.tsx
// ... (data 배열 정의)

<section id="example" className="mb-12 p-6 bg-white rounded-lg shadow-md">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-700">5. 데이터 전환 및 초기 데이터 설계서 작성 예시</h2>
    <ExcelDownloadButton tableData={tableData} sheetName="데이터 전환 및 초기 데이터 설계서" fileName="데이터_전환_및_초기_데이터_설계서_예시" />
  </div>
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left w-1/4">항목</th>
          <th className="border border-gray-300 px-4 py-2 text-left w-3/4">내용</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2 font-semibold">{item.항목}</td>
            <td className="border border-gray-300 px-4 py-2 whitespace-pre-wrap">{item.내용}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
```

#### 4.2. 앵커 링크 (Smooth Scrolling)

페이지 상단의 내비게이션 메뉴를 클릭하면 페이지 내 해당 섹션으로 부드럽게 스크롤됩니다. 이는 `handleNavClick` 함수를 통해 구현됩니다.

**코드 스니펫 (`handleNavClick` 함수):**

```tsx
// src/pages/forms/DataMigrationAndInitialDataDesignDocument.tsx
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault(); // 기본 앵커 동작 방지
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const navbarOffset = 100; // sticky navbar의 높이를 고려한 오프셋
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' // 부드러운 스크롤 효과
    });
  }
};

// 내비게이션 메뉴 예시
<nav className="mb-12">
  <ul className="flex justify-center gap-4">
    <li><a href="#definition" onClick={(e) => handleNavClick(e, 'definition')} className="text-blue-600 hover:underline">정의</a></li>
    {/* ... */}
  </ul>
</nav>
```

#### 4.3. Excel 다운로드 기능

페이지 내 예시 테이블 데이터를 엑셀 파일로 다운로드할 수 있도록 `ExcelDownloadButton` 컴포넌트를 재사용합니다.

**코드 스니펫 (`ExcelDownloadButton` 사용):**

```tsx
// src/pages/forms/DataMigrationAndInitialDataDesignDocument.tsx
import ExcelDownloadButton from '../../components/ExcelDownloadButton.tsx';

// ... (tableData 정의)

<ExcelDownloadButton
  tableData={tableData}
  sheetName="데이터 전환 및 초기 데이터 설계서"
  fileName="데이터_전환_및_초기_데이터_설계서_예시"
/>
```

### 5. 통합 (Integration)

*   **`src/App.tsx`**: 해당 페이지로 접근할 수 있도록 라우트(`Route`)가 추가되었습니다.
    ```tsx
    <Route path="/forms/data-migration-and-initial-data-design-document" element={<DataMigrationAndInitialDataDesignDocument />} />
    ```
*   **`src/data/deliverables.ts`**: `allDeliverables` 배열에 '데이터 전환 및 초기 데이터 설계서' 항목이 `formPath`와 함께 추가되어, 검색 및 다른 페이지에서의 링크 생성을 지원합니다.
    ```tsx
    {
      name: '데이터 전환 및 초기 데이터 설계서',
      category: '설계',
      categoryPath: '/design',
      formPath: '/forms/data-migration-and-initial-data-design-document',
    },
    ```
*   **`src/pages/Design.tsx`**: '설계' 페이지의 `designDeliverables` 배열에 해당 산출물이 추가되어, '설계' 카테고리 목록에서 링크를 통해 접근할 수 있습니다.
    ```tsx
    { name: '데이터 전환 및 초기 데이터 설계서', path: '/forms/data-migration-and-initial-data-design-document' },
    ```
*   **`src/pages/Etc.tsx`**: '표준산출물목록' 페이지의 `cbdDeliverables` 배열 내 D12 항목의 `name`이 '데이터 전환 및 초기 데이터 설계서'와 일치하도록 하여, `allDeliverables`의 `formPath`를 통해 링크가 자동으로 생성되도록 하였습니다.

이러한 구성과 구현 방법을 통해 '데이터 전환 및 초기 데이터 설계서' 양식 페이지는 포털 내에서 완전하게 기능하며, 사용자에게 필요한 정보를 효과적으로 전달합니다.

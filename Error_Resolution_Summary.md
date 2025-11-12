# 프로젝트 오류 해결 요약 (재활용 예정)

이 문서는 프로젝트 진행 중 발생했던 주요 오류와 그 해결 과정을 요약하여 기록합니다. 향후 유사한 프로젝트에서 발생할 수 있는 문제를 예방하고, 효율적인 문제 해결에 기여하고자 합니다.

---

## 1. `DataStandardizationDefinitionDocument.tsx` 파일의 `TS1192` 오류

### 문제 발생
GitHub Actions 환경에서 `DataStandardizationDefinitionDocument.tsx` 파일에 대해 TypeScript 컴파일러 오류 `TS1192` ("모듈에 기본 내보내기가 없음")가 지속적으로 보고되었습니다. 해당 파일에는 `export default` 구문이 명시적으로 존재했음에도 불구하고 발생했습니다.

### 원인 분석
로컬 개발 환경에서는 문제가 없었으나 CI/CD 환경에서만 발생하는 것으로 보아, TypeScript 컴파일러의 설정(`tsconfig.json`) 또는 모듈 해석 방식과 관련된 환경적 요인이 원인으로 추정되었습니다. 특히, `export const`와 `export default`를 한 파일 내에서 혼용하는 방식이 특정 환경에서 TypeScript 컴파일러의 모듈 해석을 혼란스럽게 할 가능성이 제기되었습니다.

### 해결
`DataStandardizationDefinitionDocument.tsx` 파일의 내보내기 방식을 가장 표준적이고 단순한 형태로 변경했습니다.
- `export const`로 선언된 컴포넌트 정의를 제거하고, 컴포넌트 정의 자체를 `export default`로 변경하거나, 컴포넌트 정의 후 파일 하단에 `export default ComponentName;` 형태로 명시했습니다.
- `App.tsx`에서 해당 컴포넌트를 `import ComponentName from './path/to/ComponentName';`와 같이 기본 가져오기(default import) 방식으로 가져오는지 확인했습니다.

### 교훈
TypeScript 환경에서 모듈 내보내기 시 `export const`와 `export default`를 혼용하는 것은 특정 빌드 환경이나 `tsconfig.json` 설정(예: `allowSyntheticDefaultImports`, `esModuleInterop`)에 따라 예기치 않은 문제를 발생시킬 수 있습니다. 단일 컴포넌트 파일에서는 명확하게 `export default`만 사용하는 것이 안전합니다.

---

## 2. "설계" 페이지에서 "데이터베이스 설계서" 링크 미작동

### 문제 발생
"설계" 페이지(`Design.tsx`)에서 "데이터베이스 설계서" 항목을 클릭했을 때, 해당 양식 페이지로 이동하지 않고 "설계" 페이지에 머무르는 문제가 발생했습니다.

### 원인 분석
`src/pages/Design.tsx` 파일의 `designDeliverables` 배열 내 "데이터베이스" 카테고리에서 "데이터베이스 설계서" 항목이 두 번 정의되어 있었습니다. 하나는 올바른 양식 경로(`formPath: '/forms/database-design-document'`)를 가지고 있었으나, 다른 하나는 이전의 잘못된 경로(`path: '/design'`)를 가지고 있었습니다. 렌더링 로직이 중복된 항목 중 잘못된 경로를 가진 항목을 먼저 처리하여 링크가 제대로 작동하지 않았습니다.

### 해결
`src/pages/Design.tsx` 파일에서 중복된 "데이터베이스 설계서" 항목 중 `path: '/design'`으로 설정된 잘못된 항목을 제거했습니다. 이를 통해 올바른 양식 페이지로의 링크가 정상적으로 작동하게 되었습니다.

### 교훈
데이터 목록을 관리하는 배열에서 중복된 항목이 존재할 경우, 예상치 못한 렌더링 문제나 링크 오류가 발생할 수 있습니다. 특히, 동일한 `name`을 가진 항목이 여러 개 있을 경우, 렌더링 순서에 따라 잘못된 정보가 표시될 수 있으므로 주의해야 합니다.

---

## 3. "전환" 페이지에서 "교육 계획서" 링크 미작동

### 문제 발생
"전환" 페이지(`Transition.tsx`)에서 "교육 계획서" 항목이 클릭 가능한 링크로 표시되지 않고 일반 텍스트로만 나타나는 문제가 발생했습니다.

### 원인 분석
`src/pages/Transition.tsx` 파일의 `transitionDeliverables` 배열 구조가 다른 페이지(`Design.tsx`, `Testing.tsx` 등)와 달랐습니다. `deliverables` 속성이 `name`과 `path`를 가진 객체 배열이 아닌, 쉼표로 구분된 문자열로 정의되어 있었습니다. 이로 인해 렌더링 로직이 `Link` 컴포넌트를 생성하지 못하고 단순히 문자열을 출력했습니다.

### 해결
`src/pages/Transition.tsx` 파일의 `transitionDeliverables` 배열 구조를 `name`과 `path` 속성을 가진 객체 배열로 변경했습니다. 또한, 렌더링 로직을 수정하여 `path`가 `/forms/`로 시작하는 항목에 대해 `react-router-dom`의 `Link` 컴포넌트를 사용하도록 업데이트했습니다.

### 교훈
데이터 구조의 일관성은 애플리케이션의 유지보수성과 확장성에 매우 중요합니다. 특히, 유사한 기능을 수행하는 여러 페이지에서 동일한 데이터 구조 패턴을 따르지 않을 경우, 렌더링 로직의 복잡성이 증가하고 오류 발생 가능성이 높아집니다.

---

## 4. `https://jeonck.github.io/#/forms/education-plan` 직접 접근 시 404 오류

### 문제 발생
웹 브라우저에서 `https://jeonck.github.io/#/forms/education-plan` URL로 직접 접근했을 때 404 "페이지를 찾을 수 없음" 오류가 발생했습니다.

### 원인 분석
클라이언트 측 라우팅(React Router)을 사용하는 싱글 페이지 애플리케이션(SPA)에서 특정 경로에 대한 컴포넌트가 `App.tsx`의 `Routes` 내에 정의되어 있지 않으면, 해당 경로로 직접 접근 시 404 오류가 발생합니다. "교육 계획서" 컴포넌트(`EducationPlan.tsx`)는 생성되었고 `Transition.tsx`에서 링크도 연결되었으나, `App.tsx`에 해당 경로에 대한 `Route` 정의가 누락되어 있었습니다.

### 해결
`src/App.tsx` 파일에 `EducationPlan` 컴포넌트를 임포트하고, `path="/forms/education-plan"`을 가진 `Route`를 `Routes` 컴포넌트 내에 추가했습니다.

### 교훈
새로운 페이지 컴포넌트를 추가할 때는 해당 컴포넌트의 파일 생성, 데이터 목록 업데이트, 그리고 `App.tsx`에 라우트 정의 추가의 세 가지 단계를 항상 확인해야 합니다. 이 중 하나라도 누락되면 페이지 접근 시 오류가 발생할 수 있습니다. 특히 SPA에서는 모든 라우트가 중앙 `Routes` 컴포넌트에 명시적으로 정의되어야 합니다.

---

## 5. `UserInterfaceDesignDocumentForm` 모듈을 찾을 수 없음 (`TS2307`)

### 문제 발생
`npm run build` 실행 시 `src/App.tsx`에서 `'./pages/forms/UserInterfaceDesignDocumentForm'` 모듈을 찾을 수 없다는 TypeScript 오류 `TS2307`이 발생했습니다.

### 원인 분석
`UserInterfaceDesignDocumentForm.tsx` 파일이 정상적으로 생성되었고 `App.tsx`의 import 경로도 올바르게 보였음에도 불구하고 발생한 오류였습니다. 이는 TypeScript 컴파일러 또는 빌드 도구(Vite)의 캐싱 문제, 또는 `node_modules` 내의 타입 정의 불일치로 인해 발생할 수 있습니다. 특히, 새로운 파일을 추가한 후 빌드 시스템이 변경 사항을 즉시 인식하지 못하는 경우에 나타납니다.

### 해결
프로젝트의 `node_modules` 디렉토리와 `package-lock.json` 파일을 삭제하여 기존 종속성 및 캐시를 완전히 제거했습니다. 이후 `npm install` 명령을 통해 모든 종속성을 새로 설치하고, `npm run build`를 다시 실행하여 문제를 해결했습니다.

### 교훈
새로운 파일이나 모듈을 추가한 후 `Cannot find module`과 같은 모듈 관련 오류가 발생하고 코드 상의 경로에 문제가 없어 보일 경우, `node_modules` 및 `package-lock.json`을 정리하고 종속성을 재설치하는 것이 효과적인 해결책이 될 수 있습니다. 이는 빌드 시스템의 캐시 문제를 해결하고 최신 종속성 상태를 반영하는 데 도움이 됩니다.
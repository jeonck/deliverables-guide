# 정보시스템 감리 산출물 가이드 포털

정보시스템 감리 시 필요한 다양한 산출물 양식 및 가이드라인을 제공하는 웹 포털입니다. 각 산출물의 정의, 목적, 역할, 작성 주체 및 시점, 주요 포함 내용 등을 상세히 설명하여 프로젝트 참여자들이 감리 산출물을 이해하고 작성하는 데 도움을 줍니다.

## 🚀 주요 기능

- **다양한 감리 산출물 양식 제공**: 표준산출물목록, 요구사항, 설계, 구현, 테스트, 전환 등 단계별 주요 산출물 양식 제공.
- **산출물별 상세 가이드라인**: 각 산출물의 정의, 목적, 역할, 작성 주체 및 시점, 주요 포함 내용 등 상세 설명.
- **엑셀 다운로드 기능**: 각 산출물 양식을 엑셀 파일로 다운로드하여 활용 가능.
- **직관적인 UI/UX**: 사용자가 쉽게 정보를 찾고 활용할 수 있도록 구성.
- **향상된 스크롤 기능**: 고정 헤더를 고려한 앵커 링크 스크롤 기능.
- **빠른 개발 환경**: Vite를 통한 신속한 개발 및 빌드.
- **타입 안정성**: TypeScript를 통한 견고한 코드 작성.

## 🛠️ 기술 스택

- React 18.2.0
- Vite 5.2.0
- TypeScript 5.9.3
- Tailwind CSS 3.4.1
- React Router DOM 6.30.1
- File-Saver
- XLSX

## 📦 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/jeonck/deliverables-guide.git

# 프로젝트 디렉토리로 이동
cd deliverables-guide

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

## 🏗️ 사용 가능한 스크립트

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 빌드 미리보기
npm run preview

# 린터 실행
npm run lint
```

## 📁 프로젝트 구조

```
deliverables-guide/
├── src/
│   ├── components/             # 공통 컴포넌트
│   │   ├── ExcelDownloadButton.tsx # 엑셀 다운로드 버튼 추가
│   │   ├── ExpandableCard.tsx
│   │   ├── Navbar.tsx
│   │   └── TabNavigation.tsx
│   ├── data/                   # 산출물 데이터 정의
│   │   └── deliverables.ts
│   ├── pages/                  # 주요 페이지 및 카테고리 페이지
│   │   ├── Design.tsx
│   │   ├── DocumentManagement.tsx
│   │   ├── Etc.tsx             # 표준산출물목록 페이지로 변경
│   │   ├── Home.tsx
│   │   ├── Implementation.tsx
│   │   ├── ProjectPlan.tsx
│   │   ├── QA.tsx
│   │   ├── Requirements.tsx
│   │   ├── Security.tsx
│   │   ├── Testing.tsx
│   │   ├── Transition.tsx
│   │   └── forms/              # 개별 산출물 양식 페이지
│   │       ├── AcceptanceTestPlan.tsx
│   │       ├── ApplicationSystemDesignDocument.tsx
│   │       ├── AppliedMethodologyAndDevelopmentStandards.tsx
│   │       ├── ArchitectureDesignDocument.tsx
│   │       ├── AsIsBusinessAnalysisDocument.tsx
│   │       ├── AsIsSystemAnalysisDocument.tsx
│   │       ├── AttributeDefinitionDocument.tsx
│   │       ├── ColumnDefinitionDocument.tsx
│   │       ├── DatabaseDesignDocument.tsx
│   │       ├── DatabaseStandardDesignGuidelines.tsx
│   │       ├── DataStandardizationDefinitionDocument.tsx
│   │       ├── EducationPlan.tsx
│   │       ├── EntityDefinitionDocument.tsx
│   │       ├── InitialDataConstructionPlan.tsx
│   │       ├── IntegrationTestPlan.tsx
│   │       ├── InterfaceDesignDocument.tsx
│   │       ├── MasterTestPlan.tsx
│   │       ├── ProcessDefinitionDocument.tsx
│   │       ├── ProgramDesignDocument.tsx
│   │       ├── QualityAssuranceActivityPlanResult.tsx
│   │       ├── QualityAssurancePlan.tsx
│   │       ├── RequirementsDefinitionDocument.tsx
│   │       ├── RequirementsTraceabilityMatrix.tsx
│   │       ├── TableDefinitionDocument.tsx
│   │       ├── UnitTestPlan.tsx
│   │       ├── UseCaseSpecification.tsx # 유스케이스 명세서 양식 추가
│   │       └── UserInterfaceDesignDocument.tsx
│   ├── App.tsx                 # 메인 애플리케이션 컴포넌트 (라우팅 포함)
│   ├── main.tsx                # 애플리케이션 진입점
│   └── index.css               # 전역 CSS
├── public/                     # 정적 자산
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 📚 주요 산출물

이 포털은 정보시스템 감리 단계별로 필요한 다양한 산출물에 대한 가이드라인을 제공합니다. 각 카테고리 페이지에서 해당 산출물 목록을 확인하고, 상세 가이드 페이지로 이동하여 내용을 열람하거나 엑셀 양식을 다운로드할 수 있습니다.

- **표준산출물목록**: 유스케이스 명세서, 화면설계서 등
- **요구사항**: 사용자 요구사항 정의서, 현행 업무/시스템 분석서, 프로세스 정의서 등
- **설계**: 아키텍처 설계서, 응용시스템 설계서, 데이터베이스 설계서, 프로그램 설계서, 인터페이스 설계서 등
- **구현**: 적용 방법론 및 개발 표준, 품질보증활동 계획/결과서 등
- **테스트**: 총괄 시험 계획서, 단위/통합/인수 시험 계획서, 시스템 시험 계획/결과서 등
- **전환**: 교육 계획서, 초기데이터 구축 계획서 등

## ⚠️ 오류 해결 요약

프로젝트 진행 중 발생했던 주요 오류와 그 해결 과정을 [Error_Resolution_Summary.md](Error_Resolution_Summary.md) 문서에 상세히 기록해두었습니다. 이 문서는 향후 유사 프로젝트에서 발생할 수 있는 문제를 사전에 방지하고, 효율적인 문제 해결에 기여하기 위한 지식 공유 자료로 활용될 수 있습니다.

## 📝 라이선스

MIT

## 🤝 기여

기여, 이슈 보고 및 기능 요청을 환영합니다!
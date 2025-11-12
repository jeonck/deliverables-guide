export interface Deliverable {
  name: string;
  category: string;
  categoryPath: string;
  formPath?: string; // Optional path to the form page
}

export const allDeliverables: Deliverable[] = [
  // 요구사항 (Requirements)
  {
    name: '사용자 요구사항 정의서',
    category: '요구사항',
    categoryPath: '/requirements',
    formPath: '/forms/requirements-definition-document',
  },
  {
    name: '사용자 요구사항 분석서',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '현행 업무 분석서',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '현행 업무 분석서',
    category: '요구사항',
    categoryPath: '/requirements',
    formPath: '/forms/as-is-business-analysis-document',
  },
  {
    name: '현행 시스템 분석서',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '현행 시스템 분석서',
    category: '요구사항',
    categoryPath: '/requirements',
    formPath: '/forms/as-is-system-analysis-document',
  },
  {
    name: '프로세스 정의서',
    category: '요구사항',
    categoryPath: '/requirements',
    formPath: '/forms/process-definition-document',
  },
  {
    name: '업무 기능 분해도',
    category: '요구사항',
    categoryPath: '/requirements',
    formPath: '/forms/business-function-decomposition-diagram',
  },
  {
    name: '이벤트 시나리오',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '프로세스 설계서',
    category: '요구사항',
    categoryPath: '/requirements',
    formPath: '/forms/process-design-document',
  },
  {
    name: '기능차트/데이터흐름도',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '엔티티 정의서',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '엔티티 관계도',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '엔티티/프로세스 매트릭스',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '전환데이타 분석서',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  {
    name: '데이터베이스 표준설계 지침서',
    category: '요구사항',
    categoryPath: '/requirements',
    formPath: '/forms/database-standard-design-guidelines',
  },
  {
    name: '기존 시스템 데이터 모형 분석서 (객체지향 모델)',
    category: '요구사항',
    categoryPath: '/requirements',
  },
  // 설계 (Design)
  {
    name: '아키텍처 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/architecture-design-document',
  },
  {
    name: '시스템 설치 및 검증 계획서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/system-installation-verification-plan',
  },
  {
    name: '시스템 전환 계획서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/system-transition-plan',
  },
  {
    name: '보안 정책 및 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/security-policy-design-document',
  },
  {
    name: '응용시스템 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/application-system-design-document',
  },
  {
    name: '인터페이스 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/interface-design-document',
  },
  {
    name: '화면 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/screen-design-document',
  },
  {
    name: '접근 권한 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/access-control-design-document',
  },
  {
    name: '데이터베이스 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/database-design-document',
  },
  {
    name: '테이블 정의서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/table-definition-document',
  },
  {
    name: '컬럼 정의서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/column-definition-document',
  },
  {
    name: '속성 정의서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/attribute-definition-document',
  },
  {
    name: '엔티티 정의서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/entity-definition-document',
  },
  {
    name: '데이터베이스 설계서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/database-design-document',
  },
  {
    name: '테이블/프로그램 연관도',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/table-program-relationship-diagram',
  },
  {
    name: '테이블 정의서 (객체지향 모델)',
    category: '설계',
    categoryPath: '/design',
  },
  {
    name: '코드설계서 (객체지향 모델)',
    category: '설계',
    categoryPath: '/design',
  },
  {
    name: '코드 정의서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/code-definition-document',
  },
  {
    name: '초기데이터 구축 계획서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/initial-data-construction-plan',
  },
  {
    name: '데이터 전환 계획서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/data-migration-plan',
  },
  {
    name: '데이터 전환프로그램',
    category: '설계',
    categoryPath: '/design',
  },
  {
    name: '단위시험 계획서',
    category: '설계',
    categoryPath: '/design',
  },
  {
    name: '단위시험 계획서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/unit-test-plan',
  },
  {
    name: '통합시험 계획서',
    category: '설계',
    categoryPath: '/design',
    formPath: '/forms/integration-test-plan',
  },
  {
    name: '시스템 전환 전략서',
    category: '설계',
    categoryPath: '/design',
  },
  {
    name: '반복 계획/평가서',
    category: '설계',
    categoryPath: '/design',
  },
  // 구현 (Implementation)
  {
    name: '시스템 아키텍처 정의서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '시스템 설치시험 결과서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '보안정책 및 설계서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '시스템시험 계획서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '프로그램 소스',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '구현된 응용시스템',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '단위시험 계획/결과서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '통합시험 계획서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '데이터베이스 설계서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '테이블 정의서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '데이터베이스 테이블',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '프로그램 코드',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '단위시험 결과서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '적용 방법론 및 개발 표준',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '적용 방법론 및 개발 표준',
    category: '구현',
    categoryPath: '/implementation',
    formPath: '/forms/applied-methodology-and-development-standards',
  },
  {
    name: '요구사항 추적표',
    category: '구현',
    categoryPath: '/implementation',
    formPath: '/forms/requirements-traceability-matrix',
  },
  {
    name: '품질보증활동 계획/결과서',
    category: '구현',
    categoryPath: '/implementation',
  },
  {
    name: '품질보증활동 계획/결과서',
    category: '구현',
    categoryPath: '/implementation',
    formPath: '/forms/quality-assurance-activity-plan-result',
  },
  {
    name: '반복 계획/평가서',
    category: '구현',
    categoryPath: '/implementation',
  },
  // 테스트 (Testing)
  {
    name: '총괄 시험 계획서',
    category: '테스트',
    categoryPath: '/testing',
    formPath: '/forms/master-test-plan',
  },
  {
    name: '통합시험 계획/결과서',
    category: '테스트',
    categoryPath: '/testing',
  },
  {
    name: '시스템 시험 계획/결과서',
    category: '테스트',
    categoryPath: '/testing',
  },
  {
    name: '시스템 튜닝 계획/결과서',
    category: '테스트',
    categoryPath: '/testing',
  },
  {
    name: '인수시험 계획서',
    category: '테스트',
    categoryPath: '/testing',
  },
  {
    name: '인수시험 계획서',
    category: '테스트',
    categoryPath: '/testing',
    formPath: '/forms/acceptance-test-plan',
  },
  {
    name: '사용자 지침서',
    category: '테스트',
    categoryPath: '/testing',
    formPath: '/forms/user-manual',
  },
  {
    name: '운영자 지침서',
    category: '테스트',
    categoryPath: '/testing',
    formPath: '/forms/operator-manual',
  },
  {
    name: '교육교재',
    category: '테스트',
    categoryPath: '/testing',
  },
  {
    name: '요구사항 추적표',
    category: '테스트',
    categoryPath: '/testing',
    formPath: '/forms/requirements-traceability-matrix',
  },
  {
    name: '품질보증활동 계획/결과서',
    category: '테스트',
    categoryPath: '/testing',
  },
  // 전환 (Transition)
  {
    name: '운영환경 설치 결과서',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '초기데이터 구축 결과서',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '데이터 전환 결과서',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '교육 계획서',
    category: '전환',
    categoryPath: '/transition',
    formPath: '/forms/education-plan',
  },
  {
    name: '시스템 및 업무 전환 결과서',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '사용자 인수시험 결과서',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '적용방법론 및 사업 표준',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '교육교재',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '교육 결과서',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '인수운영 조직도',
    category: '전환',
    categoryPath: '/transition',
  },
  {
    name: '사용자 요구사항 반영 (최종 확인)',
    category: '전환',
    categoryPath: '/transition',
  },
];

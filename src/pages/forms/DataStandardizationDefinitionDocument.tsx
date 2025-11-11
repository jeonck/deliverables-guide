import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const DataStandardizationDefinitionDocument: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['표준 용어 정의', '시스템 내 모든 용어에 대한 표준 명칭, 정의, 약어 등을 정의한 목록 (표준 용어 사전)', '고객 (Customer), 고객 식별 번호 (Cust_ID)'],
    ['표준 도메인 정의', '데이터가 가질 수 있는 값의 범위나 유형을 정의한 목록 (예: 숫자, 날짜, 금액)', '금액 (NUMBER, 18, 2), 날짜 (DATE)'],
    ['표준 코드 정의', '시스템에서 공통으로 사용되는 코드 목록 및 코드 값의 의미 (예: 상태 코드, 성별 코드)', '상태 코드 (01: 정상, 02: 대기, 03: 오류)'],
    ['데이터 명명 규칙', '테이블, 컬럼, 인덱스 등의 명칭을 생성할 때 준수해야 할 구체적인 규칙', '테이블: TB_접두사, 컬럼: snake_case, PK: PK_접두사'],
    ['데이터 타입 표준', '업무적 특성에 따른 표준 데이터 타입 및 길이 정의 (예: 주민등록번호는 항상 13자리, 금액은 숫자 18자리)', '주민등록번호 (CHAR, 13), 금액 (NUMBER, 18, 2)'],
  ];

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '데이터표준화정의서');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, '데이터표준화정의서.xlsx');
  };

  return (
    <div>Hello</div>
  );
};

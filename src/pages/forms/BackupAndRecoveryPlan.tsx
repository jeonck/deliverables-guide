import React from 'react';
import ExcelDownloadButton from '../../components/ExcelDownloadButton';

const BackupAndRecoveryPlan: React.FC = () => {
  const tableData = [
    ['항목', '설명', '예시'],
    ['백업 대상 및 범위', '백업해야 할 데이터베이스, 애플리케이션 파일, 운영체제 등 대상 목록 및 중요도 분류', 'DB: 고객DB, 상품DB (중요도: 높음) / 파일: WAS 로그, 설정 파일 (중요도: 중간)'],
    ['백업 정책', '백업 주기 (매일, 매주 등), 백업 유형 (전체, 증분, 차등), 보관 기간 및 장소 (온사이트, 오프사이트)', '주기: 매일 증분, 매주 전체 / 보관: 1개월 (온사이트), 1년 (오프사이트)'],
    ['복구 목표 정의 (RTO/RPO)', 'RTO (Recovery Time Objective): 장애 발생 후 서비스를 복구하는 데 걸리는 최대 허용 시간. RPO (Recovery Point Objective): 장애 발생 시 허용 가능한 최대 데이터 손실 시점.', 'RTO: 4시간 이내, RPO: 1시간 이내'],
    ['백업/복구 상세 절차', '백업 작업 수행 절차, 복구 작업 상세 단계, 담당자, 소요 시간 등 구체적인 매뉴얼', '백업: 매일 02시 자동 실행 확인 / 복구: 장애 발생 시 복구 매뉴얼(BRM-001) 참조'],
    ['복구 테스트 계획', '백업 데이터의 정상적인 복구 가능 여부를 확인하기 위한 정기적인 테스트 일정 및 방법', '테스트: 분기별 1회, 모의 장애 발생 후 복구 시나리오 수행'],
    ['비상 연락망 및 대응 조직', '장애 발생 시 즉시 가동될 복구 담당 조직 및 연락 체계', '담당 조직: IT 운영팀, 비상 연락망: 팀장, DBA, 개발팀장'],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">백업 및 복구 계획서</h1>
        <ExcelDownloadButton
          tableData={tableData}
          sheetName="백업및복구계획서"
          fileName="백업및복구계획서.xlsx"
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
          <strong>백업 및 복구 계획서 (Backup and Recovery Plan)</strong>는 정보시스템 운영 중 하드웨어 장애, 소프트웨어 오류, 데이터 손상, 또는 재해 등의 상황이 발생했을 때, 업무의 연속성을 보장하고 시스템을 정상 상태로 신속하게 복원하기 위해 데이터 및 시스템 환경을 주기적으로 백업하고, 백업 데이터를 이용하여 복구하는 모든 절차와 체계를 상세히 정의한 문서입니다.
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
                <td className="border border-gray-300 px-4 py-2 font-bold">데이터 및 서비스 연속성 확보</td>
                <td className="border border-gray-300 px-4 py-2">시스템 장애 시 데이터 손실을 최소화하고, 최대한 빠르게 서비스 정상화를 달성하기 위한 구체적인 절차(RTO/RPO)를 수립하여 업무 연속성을 보장합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">재해 복구 체계의 근거</td>
                <td className="border border-gray-300 px-4 py-2">백업 주기, 보관 장소, 복구 목표 시간 등 재해 복구(DR) 전략의 기술적 기반을 제공하여 시스템의 안정성 및 신뢰성을 높입니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">운영 표준 제시</td>
                <td className="border border-gray-300 px-4 py-2">시스템 운영자들이 표준화된 절차에 따라 백업을 수행하고 복구 작업을 진행하도록 하여, 운영의 효율성 및 정확성을 확보합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">감리 및 검증 자료</td>
                <td className="border border-gray-300 px-4 py-2">감리원이 시스템의 안정성 및 복구 가능성을 평가하고, 백업 전략, 복구 목표(RTO/RPO), 테스트 방안의 적절성을 검토하는 핵심 기준 자료로 사용됩니다.</td>
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
                <td className="border border-gray-300 px-4 py-2"><strong>사업자 (개발사/수행사)</strong>의 시스템 운영 담당자, DBA, 및 <strong>기술 책임자(TA)</strong>가 주도적으로 작성하며, 발주처의 IT 운영 조직과 협의하여 확정합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">최초 작성 시점</td>
                <td className="border border-gray-300 px-4 py-2">시스템 설계 단계 후반 또는 구현 단계에서 운영 환경이 확정되고, 시스템 운영 계획을 수립하는 시점에 작성되어야 합니다.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">갱신 시점</td>
                <td className="border border-gray-300 px-4 py-2">운영 환경 변경, 시스템 중요도 변화, 백업 장비/소프트웨어 변경 등이 발생할 경우 정기적으로 검토하고 갱신되어야 합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BackupAndRecoveryPlan;

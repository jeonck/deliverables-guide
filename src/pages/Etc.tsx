import { Link } from 'react-router-dom';
import { allDeliverables } from '../data/deliverables';

const Etc = () => {
  const cbdDeliverables = [
    { phase: '분석 단계', code: 'R1', name: '사용자 요구사항 정의서', otherMethodology: '상위 요구사항 정의서', eaDeliverable: '' },
    { phase: '분석 단계', code: 'R2', name: '유스케이스 명세서', otherMethodology: '과업대비표, 요구 시스템분석서', eaDeliverable: 'AV2응용시스템관계도' },
    { phase: '분석 단계', code: 'R3', name: '요구사항 추적표', otherMethodology: '현행 시스템분석서', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D1', name: '클래스 명세서', otherMethodology: '상세 클래스 설계서', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D2', name: '사용자 인터페이스 설계서', otherMethodology: '사용자 화면정의서, 화면설계서, 메뉴구성도, 인터페이스 명세서, 상호작용 명세서, 프로그램 명세서', eaDeliverable: 'AV3응용기능분할도' },
    { phase: '설계 단계', code: 'D3', name: '컴포넌트 설계서', otherMethodology: '컴포넌트 명세서', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D4', name: '인터페이스 설계서', otherMethodology: '인터페이스 명세서', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D5', name: '아키텍처 설계서', otherMethodology: '아키텍처 정의서, 시스템 구성도', eaDeliverable: 'TV2기반구조관계도' },
    { phase: '설계 단계', code: 'D6', name: '총괄 시험 계획서', otherMethodology: '', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D7', name: '시스템시험 시나리오', otherMethodology: '', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D8', name: '엔티티 관계 모델 기술서', otherMethodology: '데이터모델링 설계서', eaDeliverable: 'DV4논리데이터모델' },
    { phase: '설계 단계', code: 'D9', name: '데이터베이스 설계서', otherMethodology: '', eaDeliverable: 'DV6물리데이터모델' },
    { phase: '설계 단계', code: 'D10', name: '통합시험 시나리오', otherMethodology: '', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D11', name: '단위시험 케이스', otherMethodology: '', eaDeliverable: '' },
    { phase: '설계 단계', code: 'D12', name: '데이터 전환 및 초기 데이터 설계서', otherMethodology: '', eaDeliverable: '' },
    { phase: '구현 단계', code: 'I1', name: '프로그램 코드', otherMethodology: '프로그램 소스, 프로그램 목록', eaDeliverable: 'TV3기반구조설계도' },
    { phase: '구현 단계', code: 'I2', name: '단위시험 결과서', otherMethodology: '', eaDeliverable: '' },
    { phase: '구현 단계', code: 'I3', name: '데이터베이스 테이블', otherMethodology: '', eaDeliverable: '' },
    { phase: '시험 단계', code: 'T1', name: '통합시험 결과서', otherMethodology: '', eaDeliverable: '' },
    { phase: '시험 단계', code: 'T2', name: '시스템시험 결과서', otherMethodology: '', eaDeliverable: '' },
    { phase: '시험 단계', code: 'T3', name: '사용자 지침서', otherMethodology: '', eaDeliverable: '' },
    { phase: '시험 단계', code: 'T4', name: '운영자 지침서', otherMethodology: '', eaDeliverable: '' },
    { phase: '시험 단계', code: 'T5', name: '시스템 설치 결과서', otherMethodology: '', eaDeliverable: '' },
    { phase: '시험 단계', code: 'T6', name: '인수시험 시나리오', otherMethodology: '', eaDeliverable: '' },
    { phase: '시험 단계', code: 'T7', name: '인수시험 결과서', otherMethodology: '', eaDeliverable: '' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">기타</h1>
      <p className="mb-8 text-gray-600">프로젝트 수행 과정에서 위에 분류되지 않은 기타 산출물들을 관리합니다.</p>

      <h2 className="text-2xl font-bold mb-4">CBD SW 개발 표준 산출물 목록</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-2 border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">단계</th>
              <th className="px-4 py-2 border border-gray-300">코드</th>
              <th className="px-4 py-2 border border-gray-300 w-1/3">산출물</th>
              <th className="px-4 py-2 border border-gray-300 w-1/3">다른 방법론의 산출물명</th>
              <th className="px-4 py-2 border border-gray-300 w-1/3">범정부 EA 산출물명</th>
            </tr>
          </thead>
          <tbody>
            {cbdDeliverables.map((item, index) => {
              const matchingDeliverable = allDeliverables.find(d => d.name === item.name);
              return (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">{item.phase}</td>
                  <td className="px-4 py-2 border border-gray-300">{item.code}</td>
                  <td className="px-4 py-2 border border-gray-300 w-1/3">
                    {matchingDeliverable && matchingDeliverable.formPath ? (
                      <Link to={matchingDeliverable.formPath} className="text-blue-600 hover:underline">
                        {item.name}
                      </Link>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 w-1/3">{item.otherMethodology}</td>
                  <td className="px-4 py-2 border border-gray-300 w-1/3">{item.eaDeliverable}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Etc;
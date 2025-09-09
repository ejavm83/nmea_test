
# NMEA 0183 Parser

NMEA 0183 표준을 기반으로 한 모듈형 파서 라이브러리와 React 데모 애플리케이션입니다.

## 🚀 주요 기능

- **포괄적인 NMEA 메시지 지원**: 100개 이상의 NMEA 0183 메시지 타입 파싱
- **TypeScript 기반**: 완전한 타입 안전성과 IntelliSense 지원
- **모듈형 아키텍처**: 재사용 가능한 파서 라이브러리
- **React 데모 앱**: 실시간 파싱 테스트 및 시각화
- **한국어 지원**: 모든 필드와 주석이 한국어로 제공

## 📁 프로젝트 구조

```
NMEA0183Parser/
├── packages/
│   └── nmea-core/          # NMEA 파서 핵심 라이브러리
│       ├── src/
│       │   ├── schemas/    # NMEA 메시지 스키마 (100+ 타입)
│       │   ├── index.ts    # 메인 엔트리 포인트
│       │   ├── registry.ts # 스키마 레지스트리
│       │   ├── types.ts    # TypeScript 타입 정의
│       │   └── utils.ts    # 유틸리티 함수
│       └── dist/           # 빌드된 라이브러리
├── apps/
│   └── nmea-react-demo/    # React 데모 애플리케이션
│       ├── src/
│       │   ├── components/ # React 컴포넌트
│       │   ├── App.tsx     # 메인 애플리케이션
│       │   └── utils.ts    # 유틸리티 함수
│       └── dist/           # 빌드된 웹 앱
└── package.json            # 워크스페이스 루트 설정
```

## 🛠️ 기술 스택

- **언어**: TypeScript
- **빌드 도구**: Vite, TypeScript Compiler
- **프론트엔드**: React 18
- **패키지 관리**: npm workspaces
- **코드 품질**: ESLint, TypeScript strict mode

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18+
- npm 8+

### 설치
```bash
# 전체 프로젝트 의존성 설치
npm install

# 또는 개별 패키지 설치
npm install --workspace=packages/nmea-core
npm install --workspace=apps/nmea-react-demo
```

### 개발 서버 실행
```bash
# React 데모 앱 실행
npm run dev

# 또는 직접 실행
npm run dev --workspace=apps/nmea-react-demo
```

### 빌드
```bash
# 전체 프로젝트 빌드
npm run build

# 개별 빌드
npm run build:core  # nmea-core 라이브러리만
npm run build:app   # React 앱만
```

## 🔧 사용법

### 라이브러리 사용
```typescript
import { parseNMEASentence, listSchemaTypes } from 'nmea-core';

// NMEA 메시지 파싱
const result = parseNMEASentence('$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47');

// 지원되는 메시지 타입 목록
const supportedTypes = listSchemaTypes();
```

### React 데모 앱
1. `npm run dev` 실행
2. 브라우저에서 `http://localhost:5173` 접속
3. NMEA 메시지를 입력하고 파싱 결과 확인

## 📋 지원되는 NMEA 메시지

### 주요 메시지 타입
- **GGA**: GPS 수신기 고정 데이터
- **RMC**: 권장 최소 특정 GPS/TRANSIT 데이터
- **GSA**: GPS DOP 및 활성 위성
- **GSV**: GPS 위성 시계
- **VTG**: 지상 속도 및 추적
- **HDT**: 헤딩 - 참
- **DBT**: 깊이
- **MWV**: 바람 속도 및 각도

### 확장 메시지 타입
- **FSR**: AIS 수신 프레임 요약
- **HSC**: 헤딩 조향 명령
- **HSS**: 선체 응력 감시 시스템
- **TPC**: 전송 슬롯 금지 명령
- **TRD**: 스러스터 응답 데이터
- **TSA**: 전송 슬롯 할당

## 🧪 테스트

```bash
# 전체 테스트 실행
npm test

# 개별 패키지 테스트
npm test --workspace=packages/nmea-core
```

## 📝 라이선스

MIT License

## 👨‍💻 개발자

**GMT Senior Kim Gilyong** - NMEA0183 V4.0 표준 기반

## 🔗 관련 링크

- [NMEA 0183 표준 문서](https://www.nmea.org/)
- [GitHub 저장소](https://github.com/ejavm83/NMEAP)

# 새로 추가된 NMEA 메시지 테스트 예시

다음은 Obsidian 파일에서 가져온 6개 NMEA 메시지 타입의 테스트 예시입니다.

## 1. FSR – Frame Summary of AIS Reception
```
$AIFSR,123456789012345,123456.78,A,-85.5,15,120,5,8,25,12*7A
```

## 2. HSC – Heading Steering Command  
```
$AIHSC,A,15.5,R,S,T,30.0,5.0,0.5,2.5,180.0,1.0,270.0,T,C*4B
```

## 3. HSS – Hull Stress Surveillance Systems
```
$AIHSS*5C
```

## 4. TPC – Transmit Slot Prohibit, Command
```
$AITPC,123456789012345,1,A,123456.78,100,5,10,200,15,300,20,C,R*6D
```

## 5. TRD – Thruster Response Data
```
$AITRD,1,1500.0,R,25.5,P,180.0*3E
```

## 6. TSA – Transmit Slot Assignment
```
$AITSA,123456789012345,1,A,1430,50,2*5F
```

## 사용 방법
1. 브라우저에서 http://localhost:5173 접속
2. 위의 NMEA 메시지들을 복사하여 입력 패널에 붙여넣기
3. 파싱 결과 확인

각 메시지는 다음과 같은 정보를 포함합니다:
- **FSR**: AIS 수신 프레임 요약 정보
- **HSC**: 헤딩 조향 명령 정보  
- **HSS**: 선체 응력 감시 시스템 (필드 없음)
- **TPC**: 전송 슬롯 금지 명령
- **TRD**: 스러스터 응답 데이터
- **TSA**: 전송 슬롯 할당

# dependencies 설치 및 컴포넌트 생성

## 1. install

```
npm install
```

-   package.json / package-lock.json 기준 의존성 동기화
-   보안 취약점 없음

---

## 2. src/components/

퀴즈 앱 UI를 구성하는 기본 컴포넌트 디렉터리입니다.  
각 컴포넌트는 폴더 단위로 관리하며, index.tsx를 엔트리로 사용합니다.

### AppButton/

-   공통 버튼 컴포넌트
-   퀴즈 시작, 다음 문제, 제출 등 사용자 액션에 재사용
-   UI 표현과 이벤트 전달만 담당

### QuestionCard/

-   퀴즈 문제 1개를 표시하는 카드 컴포넌트
-   문제 텍스트와 선택지 UI 렌더링 담당
-   정답 판정 및 점수 계산 로직은 포함하지 않음

### Spinner/

-   로딩 상태 표시용 컴포넌트
-   문제 데이터 로딩 중 사용자 피드백 제공

구성:

-   index.tsx: Spinner 컴포넌트 정의
-   index.css: 로딩 애니메이션 및 스타일 정의

---

## 3. src/constants/

애플리케이션 전반에서 사용되는 고정 값 상수 관리 디렉터리입니다.

-   퀴즈 설정 값 (문제 수, 제한 조건 등)
-   UI에서 반복 사용되는 문자열
-   Difficulty 등 공통 상수 정의
-   하드코딩 방지 및 유지보수성 향상 목적

---

## 4. src/services/

외부 데이터 통신을 담당하는 API 레이어입니다.

### fetchQuestions.tsx

-   퀴즈 문제 데이터를 가져오는 API 함수 정의
-   fetch 또는 axios 기반 HTTP 요청 처리
-   컴포넌트에서 직접 API를 호출하지 않고 해당 함수를 통해 데이터 접근

---

## 5. @chakra-ui/react 설치

퀴즈 앱 UI 구성을 위해 Chakra UI를 설치했습니다.

```
npm install @chakra-ui/react
```

-   Chakra UI 라이브러리 추가
-   공통 UI 컴포넌트 구현을 위한 기반 마련

---

## 6. Chakra UI Provider 적용

설치한 Chakra UI를 애플리케이션 전역에서 사용할 수 있도록 설정했습니다.

-   main.tsx에서 ChakraProvider로 App 컴포넌트를 감쌈
-   Chakra UI v3 기준 Provider 설정 적용
-   전역 스타일 시스템 및 UI 토큰 사용 가능

※ @emotion/react, @emotion/styled, framer-motion은 설치하지 않음  
※ Provider 설정만 적용

---

## 7. axios 설치 및 사용 목적 정리

퀴즈 앱에서 비동기 HTTP 요청을 보내기 위해 axios 모듈을 설치하고 사용합니다.  
주로 퀴즈 문제 데이터를 외부 API에서 가져오는 용도로 활용합니다.

```
npm install axios
```

-   axios 모듈 정상 설치 완료
-   프로젝트 의존성에 axios 추가됨
-   보안 취약점 없음

---

## 8. 변경 목적 요약

-   퀴즈 앱 기본 구조 세팅
-   UI, 데이터 통신, 상수 영역 분리
-   Chakra UI 도입 및 전역 Provider 설정 적용
-   axios 기반 비동기 통신 환경 구성
-   이후 기능 구현을 위한 기반 구성 완료

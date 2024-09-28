# Newnews

## 요약

## 상세

### 0. 목차

1. 소개
2. 기술 스택
3. 느낀 점
4. 기능 (페이지 구성)
5. 아쉬웠던 부분
6. 앞으로 학습할 것들, 나아갈 방향
7. 어려웠던 부분, 해결한 과정

## 1. 소개

[Newnews배포링크추가예정]()

주제

- Open API를 이용한 도서 검색 서비스

- 도서 신간, 베스트셀러 등을 보여줌
- 제목, 저자 등을 검색해 도서를 찾을 수 있음
- 해당 도서의 상세 정보를 확인할 수 있음
- 알라딘 Open API 사용

## 2. 기술 스택

### Client

<!-- HTML5 -->
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<!-- CSS3 -->
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<!-- JavaScript -->
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">

<!-- React -->
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<!-- Next.js -->
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">

<!-- TypeScript -->
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">

<!-- TailwindCSS -->
<img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=for-the-badge&logo=Tailwindcss&logoColor=white">

<!-- Vercel -->
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">

### Server

<!-- Node.js -->
<img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=Node.js&logoColor=white">

<!-- Express -->
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">

<!-- Heroku -->
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">

## 3. 느낀 점

Next.js

데이터 페칭 코드를 옮기면 가독성이 좋아지고 관리도 수월하겠다는 생각이 들었다.

## 4. 기능 (페이지 구성)

### Client

1. Books
   - `/books`
   - 신간, 베스트셀러 목록을 조회하는 페이지
2. Book detail
   - `/books/:id`
   - 선택한 도서의 상세 정보를 보는 페이지
3. Book search
   - 도서 검색 결과를 보여주는 페이지

### Server

- Express

### 1. Books

### 2. Book detail

### 3. Book search

## 5. 아쉬웠던 부분

- 검색 결과 페이지도 구현하고 싶었는데 시간이 없어 하지 못함. 향후 추가 예정
- TailwindCSS를 적용하는 데 시간을 잡아먹음
-

## 6. 앞으로 학습할 것들 나아갈 방향

서버 구성

## 7. 어려웠던 부분, 해결한 과정

### CSS

- width나 height의 `100%`, `100vw·vh`의 차이
- 요소들의 Flex가 원하는 대로 적용되지 않아 시간을 많이 소모
- 반응형 레이아웃을 제작하는 것이 아직 익숙하지 않음. 많은 연습 필요

### CORS

- 클라이언트에서 로컬로 개발하는 중에, Open API에 연결하려니 CORS 에러 발생
- 서버에서 허용해주지 않고, 브라우저의 정책이기 때문에 JSONP 등의 방법을 사용해봤으나 해결되지 않음
- 프록시 서버로 우회해서 데이터를 받아 해결
- 그러나 프록시 서버의 요청 횟수가 너무 제한되어 결국 따로 Express로 서버를 구성
- 앱 서버가 Open API로 데이터를 받아온 후, 클라이언트에 데이터를 전송해서 해결

### Express

- `index.js`에 모든 코드를 작성했었는데, 프로젝트를 진행할수록 코드 양이 너무 늘어나 관리하는 데에 시간이 점점 늘어남
- 파일로 분리하면 좋을 것 같아 찾아보니, 라우트, 컨트롤러로 로직을 나눌 수 있었음
- 라우트를 파일로 분할하고, 거기에서 컨트롤러도 분리해 라우팅과 비즈니스 로직을 분리해 관리하니 코드를 보고 작성하는 것이 수월해짐
- 향후 DB 연결하는 코드도 잘 분할해서 작성할 예정
- 인증, 실시간 채팅 등도 고민해볼 것
- Open API에 파라미터를 전달하는 데에 `new URLSearchParams()`를 처음 사용해봄

### Open API

- 로컬 개발 환경에서 새로고침을 할 때마다 Express 앱 서버에 요청을 하고, 앱 서버는 Open API로 요청을 해서 데이터를 계속 받아옴
- 하지만 Open API는 일일 요청 횟수 제한이 있어 최대한 요청을 하지 않고 데이터를 저장해두고 싶었음
- 간단한 로직 추가로 해결
- 신간 도서 목록을 받아올 때, 이전에 요청했던 시간으로부터 10분이 지났고, `cacheData` 변수에 객체(데이터)가 저장되어 있다면, Open API에 요청하지 않고 저장된 `cacheData` 변수의 값을 클라이언트에게 전송
- Open API에 요청해서 받아온 후, 클라이언트에 응답을 보내는 것보다 `cacheData`가 있으면 바로 보내는 것이 더 빠르게 응답을 보낼 수 있었음
- Open API 요청 횟수도 줄이고, 클라이언트의 반응 시간도 줄여서 좋았음
- 필수 쿼리 줬는데, 선택 쿼리를 주지 않아서 에러가 한번 발생함. 선택 쿼리는 필수가 아닌데 왜 이럴까??
- 받아온 JSON의 맨 끝에 세미콜론이 붙어있어서 `JSON.parse()`가 동작하지 않고 에러가 발생함. 나중에 세미콜론이 있다는 것을 발견해서 맨 뒤 한 문자를 제거함

### Next.js

- 처음 사용해봐서 적응하는 데에 시간이 걸렸음
- Next.js는 SSR을 구현하기 때문에, 배포를 했다면 Open API를 CORS에 걸리지 않고 받아올 수 있었을 것 같은데, 여기까지 생각이 미치지 못함
- `'use client'`를 어디에서 쓰고, 어디에서는 쓰지 않아야 할지 아직 익숙하지 않음
- `<body>` 태그만 보였는데, `<head>` 태그는 어디에서 수정할 수 있는지 헤매다가 발견함
- 폰트는 어떻게 적용할 수 있는지 공부함. 구글 폰트 설정 완료
- App Router를 사용해서 라우팅을 설정함. React Router보다 더 편했음
- 동적 URL을 전달받을 때, 변수 이름이 바뀌지 않아 헤맸는데 디렉터리 이름이 URL이기 때문에 `[]` 안의 이름을 변경해야 했음

### Heroku

- 배포할 때 `package.json`의 `scripts`에 `npm start` 스크립트를 작성해야 함. `"start": "node ./index.js"`를 작성해서 빌드 에러 해결
- 포트를 가져와야 함. `const port = 3000`을 `const port = process.env.PORT || 3000`으로 작성해서 503 에러 해결

### Vercel

- Vercel 배포할 때 리포지토리를 선택해서 공개하는 경우 따로 선택을 해줘야 함. 이걸 하지 않아서 깃허브 연결이 되고도 리포지토리를 찾을 수 없었음

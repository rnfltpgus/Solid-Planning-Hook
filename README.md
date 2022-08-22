# 화섬 아파트 지구家 입주민들

안녕하세요. Frontend 개발자 정세현입니다.

<br>

## ⚙️ Local Installation

```
$ npm install
$ npm start
```

<br>

## 🛠 Stack 선정과 이유

- React
  - 개발을 배우면서 제일 익숙한 방식이 React입니다.
  - 컴포넌트 기반으로 개발이 가능하기에 재사용과 유지보수가 뛰어납니다.
    - 이번 과제에서는 컴포넌트 재사용을 느꼈던 부분은 UserInformation.jsx 파일의 경우인 것 같습니다.
- Recoil
  - React는 페이스북에서 만들었습니다. Recoil 또한 페이스북 팀에서 개발하였습니다.
  - 또한 atom만 사용할줄 알아도 전역에서 상태관리를 쉽게할 수 있습니다.
  - Redux보다 좀더 쉽게 사용할 수 있습니다.
- styled-components
  - React는 컴포넌트 기반의 개발이여서, 한 컴포넌트에 모두를 포함하는 패턴인 css-in-js를 사용하기로 결정 후 Styled Component를 선정
  - Styled Component는 개발자가 사용하기 편리하고 처음 렌더링 시 가져오는 style 관련 정보량이 적기에 사용하게 되었습니다.

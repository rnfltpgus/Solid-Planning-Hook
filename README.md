# 🪐 화섬 아파트 지구家 입주민들

## 📝 기능구현 리스트

- ✅ Main 1 : 제공된 Figma UI가 구현되어야 한다.
- 🔥 Main 2 : PC, Tablet, Mobile 등 반응형이 이루어져야 한다.(어느정도 반응형으로 대응됨)
- ✅ Banner : 메너는 상단에 고정되어야 한다.
- ✅ Search 1 : 검색기능이 되어야한다.
- ❌ Search 2 : 검색이 많이된 관련 검색어가 4건 노출되어야 한다.
- ✅ Filter 1 : Filter를 클릭하면 Filter List가 출력되고, 마우스 오버시 hover 효과가 나타나야 한다.
- ✅ Filter 2 : Filter의 항목을 클릭시, 기능이 동작해야 한다.
- ✅ Pagination : 주어진 목데이터를 기준으로 8건식 출력되며, Pagination이 가능해야 한다.

<br>

## ⚙️ 사용방법

```
$ npm install or npm i
$ npm start
```

<br>

## 🛠 스텍 선정과 이유

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

# 🔮 Wecode 2nd 프로젝트
### Team : headbanger <br>
Product Manager: 장인석(B)<br>
Project Manager: 탁호진(B)<br> 
Teammates: 이지은(B), 김준섭(F), 김태원(F), 이수빈(F), 이소진(F)<br>

-------------

## 💡 About CVG(Camping Very Good!)

1. 개발기간: 2023.05.01 ~ 2023.05.12 (총 2주)
2. 프로젝트 목적과 소개
    - 영화 플랫폼을 모델링한 일상에서 벗어나 자연 뿐만아니라 도심 속에서도 캠핑을 즐길 수 있는 기회를 제공하는 캠핑예약 웹사이트 <br/>
    - 사용자들이 다양한 캠핑장 정보를 찾고 쉽게 예약할 수 있으며 자연의 아름다움을 느낄 수 있는 특별한 경험을 제공하는 플랫폼 개발 <br/>
4. End User
    - 일상에서 벗어나 가족들과 함께 시간을 보내고 싶은 직장인 <br/>
    - 추억을 쌓으러 친구들과 함께 여행을 떠나는 대학생 <br/>
    - 여유롭게 자연을 즐기고 싶은 장년층 <br/>
    - 누구나 즐길 수 있는 서비스를 원하는 모든 연령층 <br/>

<br>

## 🪡 Tech Stack

<div display=flex >

### FrontEnd

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

### BackEnd
<div>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logo=TypeORM&logoColor=white">
</div>

### Communication Tools

<div>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=Trello&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
  <img src="https://img.shields.io/badge/figma-FF61F6?style=for-the-badge&logo=figma&logoColor=white">
</div>

--------------


## 로그인 페이지

### <사용자의 편의성 증대를 위한 카카오 소셜 로그인 API 활용>

- 가장 대중적인 카카오 소셜 로그인 REST API를 사용하여 사용자의 편의성을 높힘
- 로그인 과정에서 발생할 수 있는 대기 시간을 적극적으로 활용하기 위해 로딩 마이크로 애니메이션 페이지 추가

---------------


## 리스트 페이지

### <사용자 중심의 상품리스트 페이지 설계>

#### 무한 스크롤
- 사용자 인터페이스의 부드러움을 최대화하기 위해 무한 스크롤 기능 구현 </br>
- offset과 limit 값을 API에 전달하여 특정 구간에 도달하면 자동으로 상품이 로드되어 </br>
  추가적인 클릭이나 페이지 로딩 시간 없이 원활하게 컨텐츠를 탐색할 수 있어 사용자 경험을 향상 시킴 </br>

#### 체크박스 필터
- 사용자가 체크박스 선택시 실시간으로 필터링 결과를 확인할 수 있게 하였고, </br>
  다중 선택 필터링을 가능하게 하여 사용자가 원하는 상품을 쉽게 찾을 수 있도록 구현 </br>
- 로컬 스토리지를 활용하여 사용자의 체크박스 선택 상태를 기억하고, 해당 상태가 변경될 때마다 </br>
  동적으로 로컬 스토리지와 URL의 검색 파라미터 업데이트 </br>

#### 캠프 이름 검색
- 검색 기능을 제공하여 사용자가 원하는 캠프를 빠르게 찾을 수 있도록 구현 </br>
- 사용자가 검색창에 입력하면 해당 검색어를 포함하는 캠프의 리스트를 필터링하고, 선택된 검색어는 URL의 </br>
  검색 파라미터로 추가되어 상품 리스트 페이지가 적절하게 업데이트 되도록 구현</br>

#### 정렬 기능
- 사용자의 선택에 따라 인기도 또는 가격순에 따라 상품을 정렬하는 기능을 제공하여, </br>
  더욱 개인화된 사용자 경험을 제공하도록 구현 </br>









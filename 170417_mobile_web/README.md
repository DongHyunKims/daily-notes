## CRA(Create React App)

- 여러  파일을 읽어들여서 읽고 쓰면서 파일을 합친다.
- 주석을 다 지운다.
- gulp, grunt.... 
- task runner : 여러가지 task를 불러서 실행시킨다.
- 소스코드의 품질 (lint...) , webpack기반에서 할수 있다.
- import, require를 사용한다. 하지만 브라우저 지원이 안되서 transfileing 해야한다. (es6,7 -> es5로 변환) 
- 원본을 수정하고 다시 빌드 한다.
- html에 필요한 javascript,css를 추가하고 삽입도 가능함.
- 빌드 도구를 바꾸는 것이 어렵다. 이미 사용한것이 잘 되어 있기 때문에
- 사실 많이 바꾸지 못하고 방치해 두는 경우도 있지만 건강한 기업은 바꾸려는 노력은 많이한다. 
- 테스트 코드가 있다면 테스트 하기 편하다. 병렬테스트도 한다.
- 의지와 시간이 있다면 자주 업데이트 해줄 수 있다.
- 현실 적인 문제도 많다. 바꾸는 것 보다 실제 적인 운영을 어떻게 할지가 더 고민이다.
- 간단하게 동작 되어야 한다.

- npm script에 bulid script를 만들어 쉽게 실행 시킬 수 있다.
- 간단한 것들은 실행 가능 하다.
~~~javascript
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
~~~

- project할때 npm 빌드를 하던가 webpack을 해보면 된다.
- 환경 설정 하는 것은 원래 어렵다.

#### CRA에서 webpack 수정
- CRA는 webpack설정을 숨겨 놓았다.
- 수정하기 위해서 webpack을 꺼내야 한다.
- `npm run eject` 명령을 사용한다.
- 개발용 : 디버깅 하기 쉽게 해준다., 자동 새로고침 등 디버깅을 위한 코드가 포함, 개발을 쉽게
- 배포용 : 난독화 시킨다(func, 변수명), 디버깅과 관련된 코드를 모두 제거하고 배포한다. 최적화 한다.
- 최적화와 디버깅이 키워드 이다.
- 막판에 배포용을 바꾸기 보다는 주마다 배포용으로 데모를 하는 것이 좋다.
- plugin : loader로 합쳐진 javascript버들에 어떠한 변화나 최적화 작업을 할때 사용한다.
- 필요한 loader를 하나씩 추가 해야 한다.
- react시 webpack 1 설정을 찾아 적용 하면 된다.
- **웹펙 설정을 한번 해보는 것도 좋다.**
- `npm start` 명령어 실행 시 어떻게 실행 되는지 확인해 본다. 어떤 script를 돌리는 지 찾아본다.

## 모바일웹

- 원하는 데로 잘 되지 않는다.
    - 오밀조밀한 UI 보다는 간결하고 시원하게
    - 핵심을 담아야 한다.
    - 불필요한 애니메이션은 지양한다. 터치기반의 빠른 인터렉션 !!
    - 애니메이션은 많이 사용하면 안된다.
    - 최대한 가볍게 만드는 것이 좋다.

- viewport 
- 확대 축소를 막을수도 있다.
- 초기값을 설정 할수 있다.

- animation
- css3 가 정답.
- 예) setTimeout을 재귀적으로 호출한다. 비동기라 콜스택에 쌓이지 않는다.
- gpu acceleration property을 사용하면 더 좋다. 
- 패턴이 있다면 keyframes를 사용 하면 된다.
- 복잡한 animation은 javascript를 활용할 수 있다.
- Touch Event
   - touchevent type
      touchstart ‐> touchmove(touchstart 없다면 동작할 수 없다.) ‐> touchend
- `changedTouches`만 거의 사용한다. 움직이는 것만 감지함

- media query
- CSS코드는 폭과 같은 속성에 의해서 분기처리 가능함.
  - https://www.w3schools.com/css/css_rwd_mediaqueries.asp
- 모바일을 먼저 할수 있고, 웹을 먼저 할수 있다.
- 편견을 갖지 말라!!!

- debugging
- 안드로이드 연결후 크롬을 통해 연결하고 디버깅이 가능하다.
  - https://developers.google.com/web/tools/chrome-devtools/remote-debugging/ 
- 아이폰도 safari에서 지원
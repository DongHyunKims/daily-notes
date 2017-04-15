## React 1-1

- 프레임 워크란 무엇인가?
- 리엑트가 어떻게 만들어 졌을까?
- 여러 시도를 해보는 것이 중요하다.
- 왜 쓰는지 알아야 한다.
- React의 특징
- 브라우저에서 빌드가 안될때 필요한 도구들
- 모델에 들어가게 되면 난이도가 올라간다. 왜 클라이언트 내에서 데이터를 다뤄야 하는가?
- 브라우저는 휘발성이다. 데이터 베이스에는 영원히 보관될 것만 저장한다. -> 아주 큰 변화이다.
- 리엑트는 모델이 핵심이 아니다.

### 1. Framework?
1. library 
  - 미리 만들어 둔것.
  - 개발단계에서 자주 사용되는 기능을 묶어서 제공.
  - 주로 범용적으로 사용 할 수 있는 함수 단위로 제공.
  - 프레임워크와 햇갈리면 안된다.
  - ex) jquery : 대표적인 라이브러리. 다양한 함수들의 집합. underscore, lodash,d3(web GL) ... 

2. Framework
  - 각각 기능들이 서로 연결 되어 있다. 관계가 있다.
  - 틀이 존재 한다. 정해진 틀에 맞춰 줘야한다.
  - 다양한 패턴을 찾아가면 결정 하지 않아도 됨.
  - 숙련되지 않는 개발자들도 평균 수준 유지 가능 (아주 큰 장점) 
  - 원하는 기능을 지원 하지 않을시 수정이 힘들다.
  - 자체적인 프레임 워크을 사용 하는 것이 좋다. 
  - 전면적으로 사용 하지는 않는다.
  - 완전한 틀을 제공해주는 순간 자유도가 높지 않다.
  - app 대부분 개발에 필요한 기능 
    - DOM, EVENT, Template, Ajax, Module
  - 현실에서는 프레임 워크를 안쓰는 경우가 많다. 

#### 2. SPA(Single Page Application.)
- 한페이지에서 페이지 전환 없이 인터렉션이 일어날 수 있는 것.
- ex) 구글 닥스, 페이스북, 트위터, todolist, 모바일 웹앱(web 기반 모바일 애플리케이션) .... 
- 페이지가 넘어가게 되면 싱글 페이지가 아니다.
- 웹의 큰 장점은 공유 할수 있다는 것이다.
- 가짜 url을 만든다. -> 라우팅 한다. 
- 하나에 페이지에서 많은 html이 있기 때문에 템플릿 작업을 잘해야한다.
  - 한페이지에 저장, 템플릿을 나눠 모듈별로 저장
- ajax 필요, DOM 조작이 많이 일어나야 한다.
- 계속 ajax를 통해 호출 해서 속도가 굉장히 느려졌다. 서버에서 렌더링 하는것이 더 빨라 해당 방법을 선택 하였다.

#### 4. Framework for SPA
- backbone, Angular, React.... (todo mvc를 보며 학습) - http://todomvc.com/
- 프레임워크의 단점을 이야기 할수 있는 사람은 깊이 공부 한 것이다.
- 새로운 것을 사용할때는 어떤 것을 써야 할지 고민을 많이 해봐야 한다.
- 프로토 타입을 먼저 만들어 보는 것이 좋다. 성능 검증을 먼저 해봐야 한다.
- 팀원이 비협조적 이면 최악의 상황. 

#### 5. UI  개발 요즘
- DOM 조작은 느리고 불편하고 좋지 않다.
- Component 단위 개발은 유행 이다. -> 재사용과 매칭되어있다. 
- html / css를 모두 묶어서 사용한다.
- UI는 재사용이 어렵다. (웹 사이트가 모두 다르기 때문에) 
- 재사용 위해서는 style등을 통일 시켜야 하는데 google은 디자인을 획일화 시키고 있다.
- Component의 핵심은 인터페이스를 같게 하는 것이다.
- Mobile web에서의 컴포넌트와 궁합.
- react = html + css 로 구성 한 것이다.
- 프론트 앤드 개발자가 모두 할줄 알아야 한다. 혼자 개발 할수 있어야 한다.
- 우리나라는 인터넷이 빠르기 때문에 성능에 대한 이슈가 지나 갔다.

#### 6. React란?
- 거대함을 벗어나 view 작업에 집중하다.
- 프레임워크가 계속 복잡 해 졌다.
- react는 모델을 빼버리고 view에 집중한다.
- DOM 조작을 하지 않아도 된다.
- jsx 문법을 사용, DOM 조작을 알아서 해준다. 
- 현재 트리모양을 분석 해서 DOM을 알아서 찾아준다. 이러한 연산이 있기 때문에 빠르지 않다.
- 최고의 퍼포먼스를 찾는 다면 직접 DOM을 조작 하는 것이 빠르다.
- 성능 차이는 있지만 체감 속도는 다르다.
- virtual DOM을 사용하여 최대한 효율적 만들 수 있다. 
- 똑똑 하게 동작하게 되면 그만큼 느리다고 할수 있다.

#### 7. 몇가지 더 궁합
- React가 es6를 사용 하는 것이다.
- es6를 잘 알아야 한다.
- import / export 를 통한 모듈 의존성을 관리.
- React를 개발하면서 es6 feature을 쓰는 것은 자연 스러움.
- loader 가 기계적으로 빌드 단계에서 읽어들여서 rendering 한다.
- 다양한 bundle을 통해 읽어들일 수 있다. 배포전에 로컬에서 모두 로딩 해야 한다.
- 프레임 워크은 최신의 기술을 많이 사용한다.
- 다양한 프레임워크는  gettingStarted, tutorial을 보는 것이 좋다, 최신의 정보를 얻는 것이 중요하다.

#### 8. 코드 살펴보기
- 배포 전에는 jsx를 babel을 통해 변환해서 배포 해야 한다.



**html**
~~~html
<html> 
  <head>
  </head>
  <body>
    <div id="wrap"></div>
  </body>
</html>
~~~

**React(JSX)**
~~~javascript
class MyBlog extends React.Component {
  //생성자
  constructor(){
    //React.Component 를 상속 받아 쓸수 있도록 해준다.
    super();
    //값이 자꾸 변할때 사용 하는 것. state 키워드를 가지고 모두 수정 한다.
    //이전 할일과 이후 할일을 지정 할수 있는 함수를 제공 한다.
    this.state = {};
  }
 /*
 화면에 그리기위한 함수, setState 함수가 불릴때 마다 render가 불리기 때문에 비효휼 적이다.
 render을 하기 싫으면 조건문을 줘서 해결 할수 있다. 조건문을 주는 함수가 따로 있으니 확인 해보기.
 */
  render(){
    //이 코드를 읽어 실제 DOM으로 바꾸어 준다. 변환기가 바꾸어준다.
    return (
      // 무조건 하나로 감싸줘야 한다. <div> 안에 넣어주는 것이 일반적
      <h2>My blog posts</h2>
    )
  }
}
ReactDOM.render(
  //실제 js 파일에서는 React.createElement(MyBlog, null)로 동작.
  <MyBlog/>,document.querySelector("#wrap")
);
~~~

**본래 js로 바꾼 모습**
~~~javascript
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyBlog = function (_React$Component) {
  _inherits(MyBlog, _React$Component);

  function MyBlog() {
    _classCallCheck(this, MyBlog);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {};
    return _this;
  }

  MyBlog.prototype.render = function render() {
    return React.createElement(
      "h2",
      null,
      "My blog posts"
    );
  };

  return MyBlog;
}(React.Component);

ReactDOM.render(React.createElement(MyBlog, null), document.querySelector("#wrap"));
~~~

**결과**
<img src="../images/react_ex01.png" height="400px"/>



#### 9. webpack(중요하다)
- jsx의 변환은 실제 webpack을 통해 관리하면 편리하다.
- loader : plugin을 읽어서 변환 시켜 주는 것, 불러오는것 (브라우저에서 해석할수 없는 코드를 불러와 포함 시키는 것)
- pulgin : 코드를 최적화 시켜 주는 것
- lint : 정적으로 안좋은 코드를 알려준다. static 분석, ES Lint의 옵션을 사용자에 맞춰서 바꿀수 있다.
- webpack을 사용하면 설정 하기 쉽다.
- 파일 명을 jsx 라고 설정하면 이 파일은 react를 사용한 파일이라고 알수 있다.
- 좋은 코드를 보기 위해서는 "react best practice"를 검색하면 볼수 있다.

#### 10. virtual DOM 작업을 도와주려면
- 특적 부분에 이름을 부여해줘서 해당 컴포넌트를 찾기 쉽게 해준다.
- 전달 시에는 배열을 만들어서 넘겨준다.
- 리엑트는 권장하는 문법이 있으면 사용자에게 알려준다.

#### 11. state (상태값) / event


- event에 따라 state 값을 변경
- `this.setState({'showLog':true, 'selectedNumber':number});`

event 예제
~~~Javascript
class MyBlog extends React.Component {
  constructor() {
    super();
    this.state = {posts : [
      {
        "title": "sunt aut facere repellat",
         "body": "quia et suscipit\nsuscipit"
      },
      {
        "title": "qui est essexxxxx",
        "body": "est rerum tempore vitae\nsequi sint"
      }
    ]};
  }
  
  addCount(number) {
    console.log('log', number);
  }

  render() {
    let data = this.state.posts;
    
    let myHTML = data.map((v,i) => {
      return (<li key={i} onClick={this.addCount.bind(this, i)}>{v.title}</li>)
    });
      
    // return 안에 로직을 많이 넣지는 않는다.
    return (
      <div>
        <h2>My Blog posts :-)</h2>
        <ul>
          {myHTML}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <MyBlog/>, document.querySelector("#wrap")
);
~~~

state 예제
~~~javascript
class MyBlog extends React.Component {
  constructor() {
    super();
    this.state = {posts : [
      {
        "title": "sunt aut facere repellat",
         "body": "quia et suscipit\nsuscipit"
      },
      {
        "title": "qui est essexxxxx",
        "body": "est rerum tempore vitae\nsequi sint"
      }
    ], 
    showLog :false,
    selectedNumber : 0,              
    };
  }
  
  addCount(number) {
    console.log('log', number);
    number++;
    this.setState({'showLog':true, 'selectedNumber':number});
  }

  render() {
    const data = this.state.posts;
    const myHTML = data.map((v,i) => {
      return (<li key={i} onClick={this.addCount.bind(this, i)}>{v.title}</li>)
    });
    let currentNumber;
    const bShow = this.state.showLog;
    if(bShow) currentNumber = this.state.selectedNumber;
      
    return (
      <div>
        <h2>My Blog posts :-)</h2>
        <ul>
          {myHTML}
        </ul>
        {(bShow) ? (<div>{currentNumber} 번째 li가 선택됐어요!</div>) :(<div></div>)}
      </div>
    )
  }
}

ReactDOM.render(
  <MyBlog/>, document.querySelector("#wrap")
);
~~~


#### 라이프 사이클 
- constructor ‐> comonentWillMount ‐> render ‐> comonentDidMount(ajax, 다른 부분을 추가적으로 렌더링)

#### 하위 컴포넌트와 데이터를 연결
- 이벤트 핸들러가 부모에 있다면 자식은 알아서 실행이 가능하다.
- 자식은 부모의 값을 props을 통해 사용할 수있다.
- functional components형태로 구현하는 것이 좋다.
- 하위 컴포넌트에서 하는 일이 렌더링만 한다면 함수로 빼놓고 사용 할 수 있다.
- type checking and defaultProps 참고로 찾아 보기


#### 숙제 
- 19, 24pg, tab ui 만들어보기 -> 컴포넌트 만들기.

## 참고 서적
- effective 자바스크립트
- 영어로 보는 것이 좋다. 영어로 학습 하는 것이 좋다.
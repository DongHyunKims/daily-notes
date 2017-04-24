## historyAPI

- 브라우저는 새로운 http 응답을 받은 웹페이지를 렌더링 할때마다 history를 남긴다.
- SPA 구조는 새로운 페이지 전체를 렌더링 하지 않고 부분적인 component를 다시 렌더링 한다.

#### client routing
- history 정보를 직접 추가 할수 있도록 API를 제공한다.
 - https://developer.mozilla.org/en-US/docs/Web/API/History_API
- history에 url 을 넣어주고 해당 url을 다시 렌더링 하는 것이다.

~~~javascript
history.pushState(stateObj, "page 2", "bar.html");

window.addEventListener("popstate", function(event) {
  var style = document.querySelector(".view").style;
  style.backgroundColor = event.state.color;});
~~~
- ajax는 어떻게 해야 할까? 
- 캐시는 어떻게 할까? history에 저장 되어있는지 확인 하고 아니면 다시 ajx 처리 !! 
- tab ui 에서 history api 적용하기.
 - https://css-tricks.com/examples/State/
 - 예제 : https://gist.github.com/nigayo/e8cfd75555b5fb776ecef63032be35ae
 - 설명 : https://css-tricks.com/using-the-html5-history-api/

#### react routing
- component로 구현 해야 한다.
- popstate를 통해 navigation 변화가 발생하면 event.state값을 받아 다
  시 렌더링 하는 컴포넌트.
- 급변 하고 있다. 하위 지원을 하지 않는다.
- pushState는 변화가 일어난 시점
- popstate를 통해 navigation 변화가 발생하면 event.state값을 받아 다
  시 렌더링 하는 컴포넌트
- 사용자가 원하는 것이 무엇인지 알아야 한다.
- history는 예전에 왜 백엔드 영역이었을까? spa 가 아니었기때문에  
spa으로 변화하면서 점점 client영역으로. ajax를 통해 부분적인 렌더링을 하기 때문에. 

~~~javascript
const BasicExample = () => (
<Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <hr/>
    
    //url이 일치 했을때 해당 component를 렌더링 한다.
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
</Router>
)
~~~

- https://reacttraining.com/react-router/web/guides/quick-start

- Route component
	- Route 컴포넌트는 popstate가 발생할때마다 자신의 path정보와 일치하는 경
우(매칭과정을거쳐)
자신이 가지고 있는 component를(Home, About,Topics) 렌더링
(React.createElement())한다
~~~
const BasicExample = () => (
<Router>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/topics" component={Topics}/>
</Router>
)
~~~

- Link Component
	- pushState에 to로 전달받은 path와 필요한 데이터를(state) 저장하는 역할.
~~~
const BasicExample = () => (
<Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
  </div>
</Router>
)
~~~

- 개발 후에 필요한 부분에 `<Link />`, `<Route />`가 가장 중요하다.
- 인증 쪽 개발도 할 수 있다.
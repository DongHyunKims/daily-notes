## 코드리뷰
- mvc를 만들기가 목적이 아니다.
- controller가 어렵다. 너무 패턴에 묶이지 않았으면 한다.
- 요구사항에 따라서 구현해야 할 패턴이 모두 다를 것이다. 비판 적인 사고를 계속 가져야한다.
- namespace 전역으로 묶어 놓을수 있다. 이름이 길어지지만 로컬에 캐시해 놓고 사용하면 된다. 패키지를 만든다.
~~~
  function LeftView(){};
  var cs = {};
  cs.view.left = function(){

  }
  cs.view.top = function(){

  }
~~~

- object캐시를 사용하는 것이 좋다.
~~~
  function a(){
      var d = aaa.bbb;
      d.ma();
      d.mc();
  }
~~~

- controller에 대한 고민
서로에 대한 의존을 줄이는 것이 좋다.
하나의 컨트롤러안에 뷰가 여러개가 있다면 서로에 대한 의존성이 높을수 있다.
지금 하고 있는것은 뷰이다.
ex) 리엑트는 뷰 프레임워크이다.
뷰를 어떻게 잘 나눌까에 집중 하면 된다.
**컴포넌트 기반의 개발**!!! -> 재사용을 목적으로 만든다.
레고처럼 조립을 해서 사용한다.
ui의 재사용은 한계가 있다. -> 어려운 일이다.
컴포넌트 하나가 완전한 일을 하는 것이 좋다고 생각한다.
하나의 뷰에서 모든 조작이 가능 하도록 한다. 탬플릿을 안에 넣어두고 사용하기도한다.
프론트엔드에서 MVC는 결국 뷰이다.

- 핸들러는 뷰로? 아니면 컨트롤러로?
핸들러가 다른곳에 의존 된다. 그렇다면 유지보수가 어렵다.
이러한 의존성을 줄이려면 콜백으로 넘겨줘야한다.
자기가 받은게 무엇인지 모르지만 무조건 실행되도록
TDD를 실행하면 좋다.
제 3의 공간을 둘 수도 있다. 어떤 일이 일어 났다고 알려주기만 하고 일을 제 3의 공간에 보내준다.
이벤트 중심이다. 사건이 있을때 무언가를 처리할 수 있도록 만든다.
액션을 전달한다 -> 메세지를 전달해 준다.
어떤 일이 발생 했다고만 알려준다.


~~~
  function a(){
    Fire.emmit("before");
    ele.on("click", ()=>{
          result = 'ddddd';
          //약속된 액션이다.
          //oFn["afterClick"](result);
          Fire.emmit("afterClick",result); // dispatcher, fire, Controller
      })
  }
  aaa = {
    bbb : function(){}
  }
  a({"afterBtn" : aaa.bbb})
~~~

- 뉴스 스탠드
~~~
var code = $Class({
    $init : function(){
      this.list
    },
    ...(메소드)
  });
~~~


- 네이버에서는 이벤트 attach를 하나에 몰아 넣는다.

- 배운 것들 리뷰 하기.
프로토 타입, 클로저
지금까지 했던 내용 블로그 정리,
구독, 슬라이딩 만들어보기.

~~~
var dataObjFn = (function() {

   var json = ["aaaa"];

   function dataModelObj() {

   }

   dataModelObj.prototype = {
       getName : function() {
           return json;
       }
   }

   return dataModelObj;

})();

var dd = new dataObjFn();
~~~
위 예제는 객체 생성시 private 하게 접근 하도록 하는 예제이다.

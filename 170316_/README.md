## 170315

### 코드리뷰
- 할때 마다 탬플릿 작업을 계속 하는 것은 무리가 있다.
- html 작업을 하고 **캐시**해서 넘겨주는 부분이 더 많다.
**ex)** 좌우버튼을 눌렀을때 계속 탬플릿 작업을 하지는 않는다. -> 작업한 결과를 저장하면 된다.(배열에 넣는다.
  )
- 성능개선 : 돔 조작과 탬플릿 조작을 최소한 한다.
  tip. 캐시하는 것이 중요 하다. 데이터의 갱신 주기에 따라 임의로 시간을 정하고 일정 시간이 지나면 다시 요청하고 그시간이 지나지 않으면 요청하지 않고 저장 해 놓은 데이터를 사용한다.

- 데이터의 길이 값은 변수로 저장하는 것도 좋다. 계속 사용하기 때문에
- 사람이 알아볼수 있는 코드를 작성하는 것이  1순위이다.
- `==` 와 `===` 를 쓰는 것은 차이가 크다. `===` 을 사용하는 것이 좋다. 타입을 비교 할 때 `==` 은 암묵적인 형변환이 되어서 비교 해지기 때문에 `===` 을 사용하는 것이 좋다.
- 돔이 완성되지 않고 템플릿 코드를 찾으려고 하면 문제가 생긴다. 돔이 완성 되는 것을 알려주는 event `domcontentloaded` 를 사용한다.
- `domcontentloaded` 와 `load`의 차이.
  - DOMContentLoaded 이벤트는 스타일 시트, 이미지등의 로드가 완료 될 때까지 기다릴 필요없이 DOM tree 완전히 로드 후 발생한다.
  - document.addEventListener("DOMContentLoaded",ajax);
  - 해당 이벤트는 맨 마지막에 사용하는 것이 좋다.
  - init 함수를 만들어 해당 이벤트에 콜백 함수로 넣어준다.
- 라이브러리 제작시 chaining을 하면 좋다.
- pure dom API는 굉장히 빠르다. 성능에 민감한 서비스에서는 좋지만 복잡한 dom트리를 만들 때에는 innerHTML을 사용하는 것이 좋다.

- documenet를 지역 변수화 시켜 사용 한다. 지역 변수화 시켜 사용하면 계속 접근해서 사용하는 것이 아니기 때문에 좀더 빠를 수 있다.
~~~
  (function(doc){
  console.log(doc.body);
  var div = doc.querySelector("div");
  })(document)
~~~

- bind를 통해서 이벤트 콜백 함수에 인자값을 넘겨서 사용한다. 인자를 바인딩 시킨 것이다. 콜백함수에 인자를 넘겨 주기 위해 사용한다.
`arrowLeft.addEventListener("click", moveLR.bind(null, jsonObj, "L" ,currrentIdx));`
~~~
  arrowLeft.addEventListener("click",function(){
    moveLR.bind(jsonObj, "L" ,currrentIdx);
  })
~~~
  - 첫번째 인자값은 **context**를 정하는 것이다.
  - **CSS 공부 하는 것이 중요하다.**




### scope
1.
- 전역 변수는 어디에서든 접근이 가능하다.
- 함수안의 변수는 전역에서는 접근 할수 없다.
~~~
  var name = 'play ground';
  function home(){
	var homeName = 'my house';
	debugger
	console.log(name);
	debugger
	console.log(homeName);
  }
  home();
~~~

2. 충첩 함수
- scope는 안에서 밖으로 탐색한다.
- scope chain이라고 한다.
~~~
  function home(){
	var homeName = "home";
	function printName(){
		var nickName = 'crong house';
	}
	printName();
	consol.log(name);
	consol.log(homeName);
	consol.log(nickName);
  }
~~~
3. 함수단위의 scope
- blockscope가 아니기 때문에 block밖에서도 유효하다.
- 각종 분산된 변수 값을 위에 선언 해준다. : hoisting
- 값이 할당 되기 전이기 때문에 첫번째 console 에서는 i는 undefined가 제공된다.
~~~
  function home(){
	var homeName = 'my house';
  console.log(i);
  console.log(j);  
	for(var i =0; i< 1000;i++){
	}
	console.log(i);
  }
~~~

4. let
- 블럭 단위 scope을 가진다.
- 같은 블럭 안에서는 재 선언이 불가능 하다. (var와의 차이점)
- let 의 블럭 영역 안에서 var를 통해 변수를 다시 선언 하면 선언이 되는 것이 아쉬운점
~~~
  var name = 'play ground';
  function home() {

    var homeName = "my house";
    for(let i = 0; i< 1000; i++){}
    console.log(i);
  }
~~~

5. const
- 값을 **재 할당** 할 수 없다.
- 상수값이라고 할 수 있다.
- 다양한 버그를 방지 할 수 있다.
~~~
  function home(){
    const homeName = 'my house';
     homeName = 'your house';

  }
  home();
~~~

6. const는 재 할당은 되지 않지만 배열과 객체의 값을 수정 할 수는 있다.
- 학습시에 const를 사용 해볼 수 있다.
- 본래의 값을 오염 시키지 않고 복사 해서 사용해야 한다.

~~~
  function home(){
  const list = ['j','a','h'];
  list.push('t');
  return list;
  }

  home();
~~~

~~~
  const list = ['j','a','h'];
  list2 = [].concat(list,"tiger");
  list == list2;
~~~

7. 결론
- 잠재적인 오류를 줄이기 위한 장치들이 점점 나오고 있다.




## closure
1. 자식은 부모의 변수를 계속 참조가 된다. 원하는 값이 나오지 않는다.
- 외부 영역의 변수는 공유 하고 있기 때문에 에러가 나는 것이다.
- 해결을 위해서 외부 function을 만들거나 let을 사용한다. let은 클로저 처럼 동작 하지만 클로저는 아니다.
- let 과 클로저 검색 하기.
- scope의 한계를 클로저 scope로 해결 하였다.
- 각각의 클로저에 값이 저장 되어있다.
- let을 사용하면 block scope에 각각 복사되어 저장되 있는 것 같다.
- debugger을 사용하여 해결 해야한다.
- 자바스크립트의 scope 종류 - local, block, closure, global
- local, block, closure, global 순서로 탐색이 된다.
- **이미 존재 하지 않는 부모의 값을 자식 함수에서 사용 할 때 closure scope 제공된다. 부모가 선언한 변수를 자식에서도 사용할수 있는 것을 의미한다.**
- scope는 변수가 선언시에 결정된다.
- 커링 : http://www.haruair.com/blog/2993

~~~
  (function(){
    let list = document.querySelectorAll('li');
    let show = document.querySelector('.show');
    console.log(list);

    for(var i = 0; i < list.length; i++){
        (function(j){
          list[i].addEventListener('click',function(){
          debugger
          show.innerText = j + 1 + '번째 과일이 선택 되었습니다.'
        });
      })(i);
    }
  })();
~~~
~~~
  (function(){
    let list = document.querySelectorAll('li');
    let show = document.querySelector('.show');
    console.log(list);

    for(let i = 0; i < list.length; i++){
      list[i].addEventListener('click',function(){
      debugger
      show.innerText = i + 1 + '번째 과일이 선택 되었습니다.'
      });
    }
    })();
~~~
~~~
  function sum(a,b){
    return a+b;
  }

  function divide(a,b){
    return a/b;
  }

  function calculate(method, prev){
    return function(next){
      debugger;
      return method(prev,next);
    }
  }

  var currySum = calculate(sum,100);
  var curryDivision =  calculate(divide,100);

  console.log(currySum(20));
  console.log(curryDivision(20));
~~~

## prototype
1. javascript 리터럴 객체
- 자바스크립트의 제일 기본 적, 퓨어한 객체
~~~
  var healthObj = {
  name : "달리기",
  lastTime : "PM10:12",
  showHealth : function(){
    debugger
    console.log("오늘은 " + this.lastTime + " 까지 " + this.name + " 운동을 하셨네요");
    }
  }
  healthObj.showHealth();
~~~

2. 생성자
- new를 사용하면 object를 가리킨다.
- 생성자는 빈 오브젝트를 만든다.
- new를 만나면 return this를 한다.
- new 키워드로 생성된 객체는 instance라고 한다.
- 새로운 객체를 만든다.

~~~
  function Health(name , lastTime){
    debugger;
    this.name = name;
    this.lastTime = lastTime
  }
~~~

3. prototype 기반 객체
- 일반 적으로 new를 사용하면 똑같은 함수가 계속 생겨 메모리가 효율적이지 않다.
- 프로토 타입에 넣어놓으면 **모든 인스턴스에서 함수를 공유** 할수 있어 메모리 활용에 효율적이다.
- prototype에 있는 메소드 들도 모두 this로 접근이 가능하다.
- 클래스 한 세트라고 할수 있다.
- 프로토 타입의 this는 모두 하나의 this를 사용한다.
- 자바스크립트의 객체를 효율적으로 사용하는 방법.
- prototype 사용의 가장 큰 이유는 메모리 효율성이다.
- 보통 변수, 배열을 넣진 안는다. 많은 인스턴스들이 한번에 공유 할수 있기 떄문에.
- __proto__ 에서 `__` 는 내부에 숨겨져있다는 뜻이다.
- 모든 인스턴스들은 하나의 프로토 타입을 공유 한다.
- 프로토 타입 프로퍼티는 Function 객체에만 들어가 있다.
- 객체를 통해 모듈화를 진행 할 수 있다.
- class를 통해 여러가지 템플릿을 만들어 진행 할 수 있다. (view, model)등 모두 가능함.


~~~
  var healthObj2 = {  
  showHealth : function(){  
    debugger
    console.log("오늘은 " + this.lastTime + " 까지 " + this.name + " 운동을 하셨네요");
  }
  }
~~~
~~~
  function Health2(name, lastTime){
    this.name = name;
    this.lastTime = lastTime;
  }
  Health2.prototype = healthObj2;

  var foo = new Health2('jinniy',5000);
  foo.showHealth();
~~~

4. new 키워드 없이도 객체 생성 가능하다. Obect.create, setPropertyOf

## 과제
1. todolist  Obect.create, setPropertyOf로 바꾸기.
2. 클로저 정리해서 git hub에 올리기.

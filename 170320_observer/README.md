## 코드리뷰
1. Jeewhan Ryu
  - mtv : 장고에 있는 디자인 패턴.
  - 현재 구조로 계속 개발하게 되면 view, controller부분이 너무 크게 되는 것은 아닐까에 대한 고민!!
  - https://github.com/Eclatant/BlueLevel/blob/master/Lecture/170316_NaverNewsStand_MVC/170316.js

2. 휘겸 김
  - ul 밑 li를 중 어떤 것을 선택 했는지 알수 있다.
  `dataObj.currentIndex = Array.prototype.indexOf.call(this.parentNode.children, this);`

  - https://github.com/breakstorm/codesquad-blue/tree/master/week1-class/naverui_Obj

3. 똘맛님

  - https://github.com/ddolmat/Blue/blob/dev/naveruic_mvc/main.js

4. 임호경
  - 모델 : 응용프로그램에 데이터를 담는 객체
  - 옵저버 패턴 이란? 준비 되어있는 행동을 하게 하는 행동!!, 확인 해보기!!
  - _사용 이유 : 해당 컨텍스트 에서 쓰는 this는 _를 사용 하여 작성한다.
  - 옵저버 패턴은 리덕스의 action type 과 reducer와 같은 역할 일까? 옵저버 패턴을 사용 하면 결합도가 낮아진다. 누가 어떤 이벤트를 가져 가는지 모른다.
  - **옵저버 패턴 꼭 찾아 보기!!**

## 뷰와 모델의 역할
  - view 자신의 변화에 집중 view와 model의 접근의 자제
  - model : 데이터의 getter , setter 역할로 끝
  - 연결관계를 느슨하게하는 것이 목표이다.
  - controller : 뷰와 모델의 변화에 따라 해야 할 일 등록 , 뷰와 모델에 의해 생겨 난것. "어떤 상황이 일어나면 이것"
  - dispatcher : 변화가 발생시 미리 가지고 있는 정보를 토대로 필요한 일을 실행 시킴. 사건을 발생 시켜 주는 것!
  (register/ emit)
  - message로 콜백을 부른다.
  - 영향을 미치는 모듯것을 바꾸어 주어야 한다. -> 메세지만 전달해주면 코어가 필요한 것들을 실행해 주는 것을 의미한다.
  예를들어 페이스북인 경우 글을 작성하면 나와 연결된 친구들에게 모두 전달해 주어야 하는가?
  중앙 통제소에서 변화에대한 행동을 잘 mapping 해주면 되지 않을까?
  - 전체적인 구조보다 유저의 입장에서 사용해둔다.
  - 먼저 함수의 이름이나 구조를 구현하고 몸체를 구현해 나가는 것도 좋다. api를 만든다고 생각한다.
  - 각각이 해야 할일을 미리등록하고 어떤일이 있다면 해당 메세지에 맞는 일을 실행시킨다.
  - dispatcher를 항상 불러서 실행한다.
  - 콜백함수를 기억하고 있다가 실행 시키면 된다.
  - controller에서는 모델과 뷰가 섞여 있다.
  - 모듈 패턴은 각자 이해해 보기
  - addEventListener와 디스패쳐는 같다고 볼수 있다.
  - 옵저버 패턴은 콜백함수의 원리이다.
  - tip
  http://boxersb.github.io/javascript/2010/04/01/observer-pattern-of-javascript/

  ## 옵저버 패턴
  - 옵저버 패턴은 1:N 관계성을 가지는 객체들이 있고, 한 객체의 상태가 변하면 연결된 다른 객ㅌ체에 그 상황을 알려야 하는 상황이 있다.

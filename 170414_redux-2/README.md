## REDUX -2

### 1. connect

- store의 값들을 접근하기 위해서 getState메서드를 사용하지 않고, UI component에서 Props 속성으로 접근할 수 있다.

- - 다시말해, UI Component안에서 subscribe()를 해서 store에 구독을 요청하고, getState()메서드의 값을 이용해서 다시 렌더링을 하도록 하는 코드를 Component안에서 구현해야 할 것이다. 하지만 모델의 변화를 탐지해야 하는 컴포넌트들에서 매번 그렇게 작업하는 것은 어렵고 지저분한 코드를 만들게 된다.

- connect 메서드를 통해서 이 작업을 쉽게 할 수 있다. 다시말해 connect 메서드는 store관련 역할을 주로 한다. 실제로 connect는 store값을 쉽게 얻은 후 컴포넌트에 전달해주는 역할과, dispatch 작업을 해주는 역할을 담고 있다.

- store값을 쉽게 구독해서 값을 받아서 하위 컴포넌트에 전달할 수 있게, mapStateToProps라는 함수를 정의하면 되고, store.dispatch 메서드를 하위컴포넌트밖에서 정의해서 사용할 수 있도록 mapDispatchToProps 함수를 사용한다.

- 뷰는 store를 몰라도 된다. 모든것을 props로 전달 받을수 있기 때문에

~~~javascript
const {connect} = ReactRedux;

//mapStateToProps 메서드는 props에 state(store에 저장된 값)를 매핑한다.
const mapStateToProps = (state) => {
  return {
    data: state
  };
}

//connect 메서드의 첫번째 인자로 mapStateToProps 를 추가.
//이제 Todo앱에서는 store를 props로 쉽게 전달받아 사용할 수 있다.
const TodoContainer = connect(
  mapStateToProps
)(Todo);

//render부분에서는 Todo가 아닌 TodoContainer를 렌더링하게 설정.
const TodoApp = () => {
  return (
    <div>
      <Header />
      <TodoContainer />
    </div>
  )
}
~~~
- mapStateToProps 메서드는 props에 상태값(store에 저장된 값)을 매핑한다라고 이해하면 쉽다.
- `TodoContainer`는 connect 메소드에 `mapStateToProps`, `mapDispatchToProps`를 인자로 넘겨 주면 어떠한 함수를 반환하고 그 함수를 View Component를 인자로 받아 실행 시키면 store와 연결되 새로운 view component객체가 반환된다. 
- store의 값을 쓰거나 , dispatch를 사용할때 사용한다. 
- `dispatch`는 default로 알아서 전달해 준다.
- 위에서 mapping한 props를 

### 2. Provider

- store를 하위 컴포넌트에 계속 전달을 해야하는데 최상위에 `<Provider>`를 사용해서 전달하면  하위 컴포넌트에 자동으로 전달할 수 있다.

~~~javascript
// 기존 방법
const TodoApp = ({store}) => {
  return (
    <div>
      <Header store={store} />
      <TodoContainer store={store} />
    </div>
  )
}

//provider
const { createStore } = Redux;
const store = createStore(todoReducer);

/* ROOT Component TodoApp */
const TodoApp = () => {
  return (
    <div>
      <Header />
      <TodoContainer />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
   <TodoApp />,
  </Provider>
 document.querySelector("#wrap")
);
~~~









참고

- 미들웨어 / 비동기 / 라우터 찾아보기!!
- SPA은 페이지당 하나의 프로젝트를 따로 만들어 관리한다. 성격이 다르다면 프로젝트를 따로 만드는 것 이다.
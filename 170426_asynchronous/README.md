## 170426 asynchronous

- 비동기는 에러처리는 안에서 해야 한다.
- 의존된 상태로 있을수 밖에 없다.
- 2~3단계 까지는 그냥 사용 해도 된다.
- 비동기를 동기처럼 보이게 하자라는 전략!!(fake!!!) 
- 가독성이 문제 이다. 
- synchronous‐looking code patterns
  - promise ( ES2015 ) : generator, async/await 모두 promise 기반이다.
  - generator ( ES2015 ) : 비동기 처리가 좋다, 함수가 return 되기 전에 밖에서 조작할 수 있다. yield를 통해 조작이 가능하다. 비동기도 가능하다, 함수의 동작을 멈추가 할수 있다.
  - async/await ( ES2017 )
- https://github.com/nigayo/javascript-async/blob/master/src/callbackhell.js

### promise

**예제1**
~~~javascript
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
	console.log("1");
	debugger
  setTimeout(function(){
	console.log("2");
	debugger
    resolve("Success!"); // Yay! Everything went well!
  }, 3000);
	console.log("3");
	debugger
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
console.log("4");  
debugger
console.log("Yay! " + successMessage);
});
console.log("5");  
debugger

/*
결과
1
3
5
2
4
*/
~~~

위 예제의 결과를 먼저 예상해 보는 것이 좋다. 비동기 로직은  `new Promise` 생성시 실행하며 비동기 콜백 함수를 `then`을 통해 분리 할 수 있다. `then` 안의 콜백을 나중에 실행하는 것이다. `then`은 `resolve`가 실행 되고 나서 실행된다.


- https://github.com/nigayo/javascript-async/blob/master/src/promise.js#L15


### fetch API

**예제2**
~~~javascript
fetch('http://some-site.com/cors-enabled/some.json', {mode: 'cors'})  
  .then(function(response) {  
    return response.text();  
  })  
  .then(function(text) {  
    console.log('Request successful', text);  
  })  
  .catch(function(error) {  
    log('Request failed', error)  
  });
~~~
ajax와 promise를 합친 개념이라 볼수 있다.


### async / await
~~~javascript
var data = await simpleFetch("../data/first.json"); 
var url2 = "../data/img/" + data.user.name + ".json"; 
var data2 = await simpleFetch(url2);
var aImage = data2.images
~~~
완전 동기 처럼 보이지만 모두 비동기 처리이다. promise로 구현 해야한다.


### 과제
- resolve, then이 있는 promise 함수를 구현해보자.
  - setTimeOut 사용
- simple fetch 함수 만들기.
- Project의 비동기코드를 promise 사용해서 구현하기.


### 참조
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developers.google.com/web/updates/2015/03/introduction‐to‐fetch
- https://github.com/nigayo/javascript-async
## Closure

1. **클로저의 정의**<br>
"외부 함수에서 선언 한 지역변수를 내부 함수의 영역에서 사용할 때 생기는 scope 이다."

2. **클로저의 특징**
  - 외부함수가 종료된 상태에서도 외부함수의 지역변수의 life cycle이 내부함수에서 유지된다.

3. **클로저 문제점**
~~~
  var arr = []

  for(var i = 0; i < 5; i++){
    arr[i] = function(){
      return i;
    }
  }

  for(var index in arr) {
    console.log(arr[index]());
  }
~~~
 - 위 예제에서 기대한 결과 값은 `0,1,2,3,4`가 `for in`문에 의해 출력 되는 것이지만 결과는 `5,5,5,5,5`가 출력된다. 그 이유는 **외부변수를 그대로 참조** 하기 때문이다. 첫 번째 for문을 모두 실행 하고 나면 클로저 scope의 i는 for이 종료된 후 i 값인 5가 할당되어 있기 때문에 기대한 결과가 제공 되지 않는다.

4. **문제 해결**
  - 해결방법1<br>
  외부 변수를 그대로 참조하는 함수를 임의의 즉시 실행 외부 함수로 감싼 후 i 변수의 값을 인자로 받아 closure scope에 저장후 외부 함수의 값을 내부함수에서 사용 하므로써 오류를 해결 할 수 있다.
~~~
  var arr = []

  for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
      return function(){
        return id;
      }
    }(i);
  }

  for(var index in arr) {
    console.log(arr[index]());
  }
~~~


  - 해결방법2<br>
  let을 사용하여 해결한다.
~~~
  var arr = []

  for(let i = 0; i < 5; i++){
    arr[i] = function(){
      return i;
    }
  }

  for(var index in arr) {
    console.log(arr[index]());
  }
~~~

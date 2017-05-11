## 170508 Test

1. code test
   자바스크립트 코드가 잘 동작하는지 테스트를 한다.
2. unit test 
- 가장 작은 단위. 함수가 최소 단위.
- 작은 함수 단위의 테스트.
- 함수는 완벽하지만 테스트가 안되는 것이 있다. (복잡하거나, 다른 클래스에 의존성이 강하다.)
- 테스트 가능한 코드가 아주 훌륭한 코드이다.
- 잘게 쪼갠 함수를 테스트 한다.
3. 테스트 종류
- unit test :
- Integration test : 단위기능이 합쳐진 테스트
- System test : 전체 시스템에 대한 동작 테스트
- Acceptance Test : 고객이  ok 할수 있는지 판단하기 위한 테스트. 인수 테스트.
  http://www.seguetech.com/the-four-levels-of-software-testing/

4. Unit test
   service.js라는 파일을 만들었을때, 그 안에 구현한 함수를 프로그램을 통해 실핼하고, 그 결과가 맞는지 예상한다.


~~~javascript
function print(arg) {
	return 'result' + arg;
}
print("ok");
print("no!");


assert.equal(true, false);
~~~


5. Mocha, chai

~~~
mkdir mytest
npm init
npm install mocha --save-dev npm install chai --save-dev cd ..
mkdir test
vi main.test.html
~~~
html 필요. test 결과를 봐야 하기 때문에 

~~~javascript
var assert = chai.assert;
  describe('equal', function() {
 	 it('should not equal when true compare to false', function
  		assert.equal(true, false);
  });
})
~~~

given ‐> when ‐> then 순서대로 테스트 하는 것이 편리하다.
개발자가 모든 것을 테스트 결과를 알아야 한다. (기대하는 결과)


~~~javascript
function checkType(value) { var type = null;
}
	switch (typeof value) { 
		case 'string' :
		type = 'string'; break; 
		default:
		type = 'monster'; break;
}
return type;
}

//test code
describe('type check', function() {
it('should return string when the value is string'
  var str = "dummy string";
  var result = checkType(str); 
  assert.equal(result, 'string');
  })
})
~~~


6. 비동기 테스트  해보기.
   done을 잘 사용 해야 한다.

7. 회귀 테스트.
   변경이 되었을때 이전 코드가 잘 돌아가는 지 테스트.
   빠르게 변경을 반영할때 좋다.

8. TDD (Test Driven Development)

9. 귀찮은 브라우저 테스팅 해결
   chrome headless

10. performance test
- timeline, audits

11. TDD
Test Driven Development.
주어진 요구 사항에 맞춰 테스트 코드를 구현 하면서, 테스트코드가 성공할때까지 코드를 완성해 나가는 설계 방식.

(테스트 주도 방식)

- 테스트 코드에 의해서 원본 코드가 다듬어 지는 것
- 실패부터 시작.
- 계속해서 테스트코드를 늘려나간다.

  1. 테스트코드 작성.
  2. 실패하는지 확인.
  3. 코드를 수정.
  4. 모든 테스트가 성공하는 지 확인.
  5. 중복 제거.
- 테스트코드가 있어야 안정적으로 간다. 경험을 꼭 해봐야 한다.
- 긴 기간 동안 습관이 필요.


12. 여러 상황에서 잘 되는 곳에서 사용하기위해 test는 필수 이다. 프레임워크, 라이브러리 등에는 필수이다.

13. Test coverage : Test Coverage는 개발자가 작성한 테스트 코드가 대상 소스 코드에 대해 테스트하는 코드를 작성했는지 그 커버하는 정도를 백분률과 코드 라인을 통해 알려주는 것을 말하며, Test Coverage를 분석하고 그 결과를 리포팅하는 것에 대해 설명한다.

14. 내가 작성한 코드의 Test Coverage가 얼마 인가? 이것이 중요하다.
- 리스크를 줄일수 있는 장점이 있다.
- 테스트는 빌드 후에하는 것은 의미가 없다. 빌드 뿐만 아니라 계속 해야한다.
- 퀄리티를 보장하는 것은 굉장히 중요하다. 품질을 올리는 활동.



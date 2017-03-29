## 170329

#### JQuery

- write less, do more
- 작은 코드로 많은것을 사용 할수 있다.
- 예전에는 브라우저 마다 다른 개발 환경 이었다. 호환성이 없어서 호환성을 높이는 노력을 하였다.

#### 특징
- 돔조작
- style handling 이 쉽다.
- ploy fill -> 지원되지 않는 것을 직접 구현한다.
   차후에 지원이 된다면 ploy fill 코드는 없앤다.
    JQuery는 나중에 걷어 내지 못한다.
    브라우저 지원 범위를 잘 알아야 한다.
    CDN 버전을 잘 찾아 봐야 한다.
    "javascript feature detaction" 으로 검색
- 효과와 애니메이션이 쉽다. (drop down), 애니메이션은 CSS를 사용하는 것이 좋다.
- ajax
- utility - each....
- plugin -  달력, 페이징등 다양한 플러그인이 많다. 튜닝 하기가 어렵다. 느리다. 

#### get -> act
- $('div').hide(); get -> $('div') / act-> (hide())
- chaining

#### 최근동향
- 호환성 이슈가 줄고, ES표준이 좋아지고
- JQuery 장점이 점점 줄어드는 중
- JQuery를 써서 모든 것을 하는 것은 아니다.


#### method chainning
- 굉장히 편리하다.
- 메소드 체이닝을 할때는 일관성이 있어야 한다.
~~~javascript
var obj = {
     append : function(name) {
     this.name += name;
     return this;
     },
     removeSpecial : function() {
     this.name = this.name.replace(/[^a-z]/ig, "");
     return this;
     },
     getName : function() {
     return this.name;
     }
}
var code = Object.create(obj);
code.name = "^^crong$$";
var cleanName = code.append("))))))").removeSpecial().getName();
console.log(cleanName);
~~~

#### 이슈
- 브라우저 호환성이슈는 많다.
- 지원 범위에 따라 기능을 추가하거나 제거 할수 있다. 되는 곳만 기능을 사용하고 아니면 포기하는 것이 좋다. 
   모든 사용자가 화려한 기능을 원하는 것은 아니다.
- http://api.jquery.com/jquery.ajax/

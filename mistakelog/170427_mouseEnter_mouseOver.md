## 170427 Mistake Log

### 고민
1. mouseOver 와 mouseEnter의 차이

mouseover 이벤트는 이벤트 버블링이 적용되는 이벤트이기 때문에 내부의 div 태그 안에 들어가도 이벤트를 또 다시 발생시킨다. mouseout도 마찬가지이다.

반면에, mouseenter 이벤트는  element 객체의 내부에 있는지 외부에 있는지만 따지기 때문에 이벤트가 한 번만 발생시킨다. mouseleave도 마찬가지이다.

html
~~~
<div class="outer">
    <div class="inner"></div>
</div>
~~~

css
~~~
body {
    width: 500px;
    margin: 30px auto;
}
.outer {
    width: 200px;
    height: 200px;
    background: Orange;
    padding: 50px;
    margin: 10px;
}

.inner {
    width: 100%;
    height: 100%;
    background: Pink;
}
~~~

javascript
~~~
$('.outer')
    .mouseover(function(){
        $('body').append('<p>마우스오버가 발생했습니다.</p>')
    })
    .mouseenter(function(){
        $('body').append('<p>마우스엔터,마우스엔터</p>')
})
~~~


### 참조
- http://webclub.tistory.com/456
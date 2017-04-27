## 170427 Mistake Log

### 고민

1. mouseOver 와 mouseEnter의 차이

mouseover 이벤트는 이벤트 버블링이 적용되는 이벤트이기 때문에 내부의 div 태그 안에 들어가도 이벤트를 또 다시 발생시킨다. mouseout도 마찬가지이다.

반면에, mouseenter 이벤트는  element 객체의 내부에 있는지 외부에 있는지만 따지기 때문에 이벤트가 한 번만 발생시킨다. mouseleave도 마찬가지이다.

**html**
~~~html
<div class="outer">
    <div class="inner"></div>
</div>
~~~

**css**
~~~css
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
~~~javascript
$('.outer')
    .mouseover(function(){
        $('body').append('<p>마우스오버가 발생했습니다.</p>')
    })
    .mouseenter(function(){
        $('body').append('<p>마우스엔터,마우스엔터</p>')
})
~~~

2. trasition

- 프로젝트를 하면서 원하는 trasition animation은 밑에서 위로 올리는 메뉴 bar 였다.

**css**
~~~Css
.playListSectionMenu{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: #d0d0d0;
    transition: height 0.5s;
    text-align: right;
}
~~~
위의 css와 같이 `position: absolute;`과 `bottom: 0;`으로 설정해 주어야한다. 그리고 만약 `position: absolute;` 사용 할때 부모 element에 `position: relative;`가 설정 되어있지 않으면 전체 화면의 절대 위치를 잡기 때문에 꼭 `position: relative;`을 해주어야 한다.

**react**
~~~javascript
render(){
  ...
  let sectionStyle = null;
  let menuStyle = null;
  if(checkIdxList.length >= 1 ){
        sectionStyle = {
              height: "87%",
         };
         menuStyle = {
              height: "13%",
          };
  }

  return (
          <div className="playListSectionArea" >
               <div className="playListSection" style={sectionStyle}>
                  {playListSection}
                </div>

                <div className="playListSectionMenu" style={menuStyle}>
                  <button className="button selectBtn">전체선택</button>
                  <button className="button deleteBtn">삭제</button>
                </div>
            </div>
        );
}
~~~
위 예제와 같이 `playListSectionArea`의 첫번째 자식의 height을 100%에서 87%로 줄이고 메뉴바가 제공 될 공간 13%를 재 할당 해준다.


### 참조
- http://webclub.tistory.com/456
- https://robots.thoughtbot.com/transitions-and-transforms
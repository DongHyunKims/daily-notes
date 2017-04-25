## 170425 Mistake Log

### 실수
1. CSS 세로정렬

html
~~~html
<div id="floater"></div>
<div id="content">
  Content Here    
</div>
~~~

css
~~~Css
#floater {
  float: left; 
  height: 50%; 
  margin-bottom: -120px;
}
#content  {
  clear: both; 
  height: 240px; 
  position: relative;
}
~~~

이 예제는 내용 요소 위에 floater div를 두는 방법이다. `height: 50%;`, `margin-bottom: - content높이의절반;` 설정한다. content엔 clear 속성을 줘서 float된 div 밑으로 오게 하면 content가 가운데 위치한다.

2. CSS 가로정렬
   `margin-left`을 `%`로 입히면 된다.


### 참조
- https://mytory.net/archives/9727
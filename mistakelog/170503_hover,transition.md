1. 외부 element hover시 내부 element 에 transition 적용하기

**HTML**
~~~Html
<li onClick={onClick.bind(null,_id)} >
       <div className="albumThum">
            <img src={coverImgUrl} className="albumImg"/>
        </div>
        <div className="albumItemCont" >
            <div className="albumTitle">{title}</div>
            <div className="albumTotDuration"> {totalDuration} </div>
            <div className="albumMenu" >
                 <img src="./images/default/menu.png" />
            </div>
  		</div>
</li>
~~~

**CSS**
~~~css
.albumList li .albumItemCont {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15%;
    background-color: black;
    opacity: 0.7;
    -webkit-transition: height 0.5s; /* For Safari 3.1 to 6.0 */
    transition: height 0.5s;
}

.albumList li .albumItemCont div {
    color: white;
}


.albumList li .albumItemCont div:nth-child(1) {
    width: 100%;
    font-size: 1.1em;
    line-height: 2.7;
    text-align: center;
}


.albumList li .albumItemCont div:nth-child(1) {
    width: 100%;
    height: 30%;
    font-size: 1.1em;
    line-height: 2.7;
    text-align: center;
}

.albumList li .albumItemCont div:nth-child(2) {
    width: 100%;
    height: 40%;
    font-size: 1.1em;
    background-color: #2590ff;
    text-align: center;
    visibility: hidden;
}
.albumList li .albumItemCont div:nth-child(3) {
    width: 100%;
    height: 30%;
    background-color: firebrick;
    visibility: hidden;
}

.albumList li .albumItemCont div:nth-child(3)  img{
    width: 20%;
    height: 50%;
}

.albumList li:hover  > .albumItemCont  {
    height: 100%;
    opacity: 0.8;

}

.albumList li:hover > .albumItemCont > div:nth-child(2)  {
    visibility: visible;
}


.albumList li:hover > .albumItemCont > div:nth-child(3){
    visibility: visible;
}
~~~


2. 자식 div에는 opacity 해제하는 방법.

**HTML**
~~~html
<div id="parent">
	<div id="child">
	</div>
</div>
~~~

**CSS**
~~~css
#parent{
    background: rgba(0, 0, 0, 0.7);
}

#child{
  color: white;
}
~~~

`background-color`를 적용하고 `opacity` 속성을 적용 했는데 자식 element까지 opacity가 적용되는 문제를 위의 방법으로 해결하였다.
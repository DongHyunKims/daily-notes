## 170321

## Git
- 나만의 노트를 작성해서 만들어 놓으면 좋다.
- 의도적인 til을 한는 것이 좋다.
 1. 아주긴 시간을 목표로 잡는다.
 2. 안하는 날도 있다.
 3. **못하는 진도를 누적하지 않는다.**
 4. 미션을 주고 달성 하도록 노력한다.

- 작업 디렉토리 : 사용자가 작업을 하는 공간, eidter로 작업한다.
- git init 을 하면 로컬 저장소가 생긴다.
- Git의 가장 중요한 저장 단위 : commit <- sha-1 고유의 아이디
- 원격 저장소의 내용을 로컬에 가져오는 내용
- pull = fetch + merge
- git commit은 부모가 많을 수 있다.
- check out, git은 참조 변수이다.
- branch 관리를 잘 해야한다.


## CSS
- ruleset : 예전에 사용했던 것을 다시 쓰고 싶다.
- 전체 파일을 다 읽은 후 입혀질 dom을 계산 하여 입혀준다.
- 일종의 scope가 있다.
- 프리프로세서 : less, saas, 프리프로세서가 표준에 추가될 가능성이 많이 없다.
- 레이아웃 배치를 잘해야 한다.
- `outline: 1px solid gray;` 모든 태그의 아웃 라인을 잡아준다.
- css reset 을 사용/css의 기본 속성을 없앤다.

~~~
/*
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }

~~~

- css 순서
1. 구조를 잡는다.
2. 스타일을 입힌다.
3. 컨텐츠를 넣는다.
4. 간격을 조정한다.

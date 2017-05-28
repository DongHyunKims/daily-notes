### 170517 코드리뷰



1. undefined 비교는 if(tpyeof aaa === "undefined") 로 한다. 변수 이름은 undefined 로 작성 할수도 있다.

2. 반복 되는 것은 map을 통해 rendering 해도 된다.

3. object cache 사용.
~~~
responseData[0]를 object로 cache 한다.
let response = responseData[0];
~~~

4. 백엔드에서 promise 적용.
~~~
router.post('/', upload.single('file'), function(req,res){
    const data = req.body,
          id = data.id,
          password = data.password,
          email = data.email,
          filePath = req.file ? req.file.path.replace(/public/,"..") : undefined;

    const checkIdQuery = connection.query('select * from user where id=?', id, function(err,rows) {
        if(err) {throw new Error("error while checking id")}

        if(rows.length) {
            res.send("id in use")
        }else {
            const checkEmailQuery = connection.query('select * from user where email=?', email, function(err,rows) {
                if(err) {throw new Error("error while checking email")}

                if(rows.length) {
                    res.send("email in use")
                }else{
                    const sql = {'id': id, 'password': password, 'email': email, 'img' : filePath};
                    const saveQuery = connection.query('insert into user set ?', sql, function(err,rows){
                        if(err) {throw new Error("error while saving")}
                        else{res.send("signup success")}
                    })
                }
            })
        }
    })
});

~~~

5. 중복 제거 필요.
~~~
    if(confirm){
        responseData ={ 
            msg : CONFIRM_MESSAGE,
            data : {pw1:pw1, pw2:pw2}
        };
        res.json(responseData);
    }else{
        responseData ={ 
            msg : ERR_MESSAGE,
            data : {pw1:pw1, pw2:pw2}
        };
        // 같은 내용이므로 분기문 마지막에 제공.
        res.json(responseData);
        
    }
~~~



6. 파라메터가 길면 객체를 사용 하면 된다.
~~~
    runAjaxData : function(reqListener, method, url, data, contentType){

        let xhr = new XMLHttpRequest();
        //reqListener 제일 마지막에 실행된다.

        xhr.open(method, url);
        //xhr.setRequestHeader("Content-Type","application/json");
        if(contentType !== undefined){
            xhr.setRequestHeader("Content-Type",contentType);
        }

        xhr.send(data);
        xhr.addEventListener("load", reqListener);
    },
~~~


- 공통
1. 응용 기술을 좀더 줄이기. 했던 것에 대해서 좁고 깊게 학습하라. 기능을 줄이는 것도 방법. 예를들어 react를 쓰면 깊이있는 부분을 공부하면서 개발하라.
  - http://d2.naver.com/helloworld/9297403
2. 추가 개발요건은 도전적인 항목을 정해서 해결해보기. 문제 해결 과정을 경험.
3. 기본적인 자료구조 공부하기.
  - set, map, stack, queue 등
4. 자신이 개발한 코드와 라이브러리(도구)에 대해서 이유가 분명있어 설명할 수 있어야 함.
5. 그 프레임워크가 권장하는 최적화(shouldComponentUpdate를 사용한다던가등)를 찾아보고 이를 적용해보자.
6. **테스트코드 구현경험 이 더 중요 >> 라이브러리 사용**

- 참고 :
1. **팀으로 개발한 경험을 정리해두기.**
2. **어떻게 피드백을 주었는가? 어떻게 형상관리(소스관리)를 했는가? 어떻게 일을 나눴는가?**
3. single page application 에서의 인증은, jwt라는 방식을 더 많이 사용.
  - passport방식은 서버에서 세션정보를 저장하는 방식인데, jwt는 서버에서 별도 세션정보를 저장하지 않음. (백엔드 관리이슈 줄어듬), 서버에서 한번만 인증하고 프론트엔드에 저장후 사용 할 수 있다.
  - https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
4. animation 처리.
  - 단순한 animaition => css3 로 가능한지 확인(transition과 transform으로 해결)
  - 반복적인 패턴의 지속적인 애니메이션 => keyframe 으로 처리되는지 확인.
  - 약간 js컨트롤이 필요한 애니메이션, setInterval 이 정기적으로 처리.
  - setInterval은 동기적인 다른 작업에 밀려서 원하는 타이밍이 아닌 밀려서 실행이 될 수 있고, 아예 실행을 건너 뛸 수도 있음.
  - **setTimeout을 재귀적으로 사용하면 건너뛰지는 않음. 왜 그럴까?**
  - requestAnimationframe을 사용하면 건너뛰지 않고 틈틈히 최적의 타이밍에 콜백이 실행됨.setInterval을 개선한것이라 봐야 함. 



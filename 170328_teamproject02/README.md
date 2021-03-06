## 170328

#### SlamDunk로 보는 Scrum
- 개발자 들이 어떻게 소통해야하는지.
- 여러가지 애자일 툴 : zira, ....

#### 명확한 goal을 세워라
- 서비스를 런칭 하는것.
- 어떻게 목표를 이룰지 룰을 설정 하는 것이 방법론이다.
- 어떤 사람이 들어와도 다같이 잘해보는 것이 중요하다.
- 어떻게 goal을 이룰 껀지 전략을 세워야 한다.

#### 제품 백로그
- 아주 큰 단위, 얼마나 걸릴지 세우는 것이  제품(product) 백로그이다.
- api를 테스트 해본다.
- 백로그를 아이템화 시키는 과정

#### sprint 백로그
- 우선순위에 따라 product 백로그에서 가져와 단기간에 처리 할수 있는 일부터 작성하는 것

#### 일분배 하기
- 서로에 대한 의존성이 적어야 한다.
- 역할 분담이 굉장히 잘 이루어 져야한다.
- 한 기간안에서는 하나의 일에만 집중해서 그 작업만 완성 하면 된다.
- 일에 대한 추정이 굉장히 어렵다. -> planning poker을 통해 일에 대한 추정을 한다.
- 작업에 대한 의존성이 있다면 페어 프로그래밍을 하고 있다.

#### planning poker (검색)
1. 기획자가 기능 명세서를 꺼내 놓는다.
2. 해당 기능을 가지고 있는 팀에서 포커를 가지고 있다. 
- 팀원들 끼리 각각 작업 리스트를 보며 예상 작업 시간을 정해야 한다.
- 현재 시간 안에 할수 없는 일은 이번 프로젝트에서 제외한다.

#### Daily Scrum
- 매일매일 회고한다.
- 자신의 상태를 팀원과 공유한다.
- 보통 상황판 앞에서 진행한다.
- **오늘의 목표, 어제 까지의 진행 상황, 어려웠던점, 해결 방법을 팀원들과 공유한다.**
- 다른 사람과 공유하여 확인한다.
- 전체 프로젝트가 어떻게 진행되는 지 dash 보드와 그래프를 통해 한번에 볼수 있어야 한다.
- 스크럼은 빨리 하기위해 보통 서서 한다.
 - 무조건 15분 내에 끝내야 한다.
 - 정해진 시간에, 같은장소에서, 모두 참석, 백로그를 업데이트
 - 잡담은 지양한다.
 - 오후나 아침에 정해진 시간에 한다.
- 모든 활동에 대한 피드백 을 주는 것이 목표
- 생산성이 떨어지는 이유에 대한 해결책을 찾는다.

#### Stroy planning
- 작은 목표부터 단계 별로 진행한다.
1. planning a / b
 - actor, behavior, goal -> 기능 목록을 작성하는데 스토리로 작성한다. 주어, 동사(행위), 목적어(기대하는바) 를 무조건 작성해야한다. -> 이 작업에 대한 **명확한 완료조건(AC)** 작성
 - 스토리 마다 완료 조건이 있어야 한다.
 - 스토리를 쓰면 이 자체가 테스트 단위가 된다.
 - 테스트 케이스 작성시 ac와 매칭 되어야 한다.
- 어디까지 되었는지 매일 확인

#### Review / Demo
- 기획한 사람과 같이 봐야 한다.
- 보통 2주 단위로 데모를 한다.
- 실전해서 되는 지 해본다 (서비스를 배포 해본다.)
- sprint review / retrospective
 - 지금까지 작업이 제대로 되었는지 어떤 부분이 모자랐는지 확인하는 review를한다.
 - 보통 일정보다 늦게 끝난다.
 - 지속적인 sprint를 통해 개선 해 나간다.
 - 잘한점 :  계속 해야 하는 것, 잘못한점 : 비난하지말고 개선할점 --> 탓하지 말자, 장애가 되는 점 : 나를 방해하는 요소를 찾아서 어떻게 처리할것인지 회의한다.
- 팀원 모두 같이 진행한다.
- 팀원이 모두 커뮤니케션이 잘 되고 있는지 
- burn out 되면 안된다. -> sprint는 단거리 이다. 2주동안 할수 있는 만큼만 추정해서 한다.
- 다 끝나면 다른 sprint를 시작한다. 계속해서 만든 서비스를 리펙토링 해나가야 한다.
- 팀원들과 같이 적당히 잘해야 한다.

#### 요약 

1. 백로그 작성
2. 추정치 산출 (우선순위, 가장 중요한 기능) - 할수 있는 일을 산출 하는것이 중요하다/ 너무 욕심 부리지 않는 것이 중요
3. 매일 매일 스크럼 해보기 / 커밋 푸시를 꼭 일이 끝나기 전에 해본다. -> 다양한 도구를 통해 스크럼을 한다.
4. 할일(스토리 플래닝)을 작성하고 이 내용을 커밋 메시지를 남긴다.
5. 팀 리뷰도 있고 전체 리뷰도 있다.
6. 배포 (외부에서도 사용 할수 있는지!!!)
- 애자일은 어떤 특정 방법이 맞다고 할수 없다. 각 팀마다 좋은 방법이 있으면 서로 공유를 하는 것이 중요하다.
- 하루에 할수 있는 분량을 최대한 작게 잡고 진행한다.
## 170330

#### Java 기초

- 자바는 main 함수를 통해 실행된다.
- 자바는 컴파일 언어이다.
- 파일이름과 클래스 이름은 같아야 한다.
- 자바는 c언어로 부터 나왔다.
- 자바에서는 **참조**만 담는다.


#### 접근 지정자
- public : 어디서든 접근이 가능하다.
- default : 기본적으로 default 접근 제한자가 되어 다른 패키지와의 클래스 선언과 생성자/메소드/필드의 호출이 불가능해집니다. 물론 동일 패키지안에서는 모든게 허용
- protected :  상속 받은 class 끼리 접근 가능
- private : 해당 클래스 안에서만 사용가능하다.

> <img src="http://cfile25.uf.tistory.com/image/1703D6444F6025203AF330"/>

#### 메모리
- int 40 억,  -20 ~ +20억 

#### primitive data type
- byte, short, int, long, float, double
- boolean
- char

#### String
- 클래스 이지만 primitive 와 유사
- **immutable** : 굉장히 중요한 속성

#### 기본값 
- 초기화를 하지 않았을때의 값

> boolean : false
> char : '\u0000' 
> byte : 0
> short : 0
> int : 0 
> long : 0L 
> float : 0.0f 
> double : 0.0d 또는 0.0 
> 참조형 변수 : null 

#### 리터럴
- 리터럴은 변하지 않는 값 그자체를 의미
- 상수(const)는 변하지 않는 변수를 의미하며(메모리 위치) 
- 리터럴은 변수의 값이 변하지 않는 데이터(메모리 위치안의 값)를 의미한다.
- 리터럴은 메모리의 코드 영역에 모두 저장된다.

#### String 의 immutable 속성

~~~java
public class Main {
    public static void main(String[] args) {
       // str는 instance
       String str = "hello";
       // str는 참조 이다
       str = str + " world!!!";
    }
}	
~~~

- 참조가 끊어지면 GC가 남아있는 메모리에 남아있지만 아무도 참조하지 않는 값을 정리한다.
> <img src="https://i.stack.imgur.com/lS2tQ.jpg"/>
-  StringBuffer를 통해 메모리 문제를 해결 가능하다. immutable 하지 않기 때문에
   String 보다 빠르다.
-  java의  힙/스택 구조
> <img src="http://2.bp.blogspot.com/-t1ymdohMHs4/UkFIQ-80nnI/AAAAAAAAAGA/o4mAk-blhps/s1600/%EC%BA%A1%EC%B2%98.PNG" />

#### function 
- 자바는 코드와 메소드로 되어있다.
- `return` 은 함수의 종료를 의미한다.

#### 클래스와 오브젝트

- 자바 클래스 구조
~~~java
public class Car {
    //instance 변수 -> 만들어진 obj 또는 instance가 각각 가지고 있는 변수
    private String color;
    private int speed;
    private String name;

    // class 변수 -> 클래스가 모두 공유하는 변수
    public static int numberWheel = 4;

    //메소드
    public void accel(int speed){
        this.speed += speed;
    }
	//생성자
    public Car() {
    
 	}
 	//getter / setter
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
~~~
- 자바 인스턴스 생성과 class 변수 공유 사용

~~~java
public static void main(String[] args) {
	Car toyota = new Car();
	toyota.setSpeed(333);
	Car.numberWheel = 5;
}
~~~
- 자바의 클래스는 보통 데이터베이스와 매칭시에 만든다.
- 남의 패키지 안에 있는 클래스를 사용할때는 import를 해주어야 한다.

#### 추상 클래스
- 사람은 모두 걷지만 어떻게 걷는지는 하위클래스에서 정의한다.
- 하나 이상의 추상 메소드가 있다면 추상클래스에서는 instance를 생성 할수 없다.

#### overriding / overloading 
- 오버로딩(Overloading) : 같은 이름의 메소드를 여러 개 가지면서 매개변수의 유형과 개수(시그니처)가 다르도록 하는 기술
- 오버라이딩(Overriding) : 상위 클래스가 가지고 있는 메소드를 하위 클래스가 재정의 해서 사용한다.

> <img src="http://www.programcreek.com/wp-content/uploads/2009/02/overloading-vs-overriding.png" />

#### 인터페이스 (~able)
- 다중 구현이 된다.
- 하나의 spec이라 할수 있다. spec 배포시 사용한다.
- 몸통이 없이 메소드로만 구현 되어있다.
- 인터페이스는 굉장히 특별한 클래스이다.
> <img src="http://lh6.ggpht.com/-JtMfdScFFG8/UfHfZc-TfCI/AAAAAAAAEX8/Ju-WVeXKiIQ/java%252520interface%252520class_thumb%25255B2%25255D.png?imgmax=800" />
- ex) Comparable -> 비교 하는 메소드를 구현할 메소드가 선어만 되어있있다, comparable을 구현하면 sorting도 가능하다.

#### 배열
- 꼭 `new` 연산자를 사용해서 만들어야 한다.
- 배열도 객체이다
- 객체는 배열을 사용하지 않는다. 
~~~java
  // 기본 배열
  int[] arr = new int[10];
  // 2차원 배열
  int[][] arr1 = new int[5][10];
  // 많이 하는 실수
  Car[] c = new Car[3];
  // 아직 new로 instance가 만들어 지지 않고 참조만 가지고 있기 때문에 null point exception이 생긴다.
  // 이부분을 해결 하기 위해 c[0] = new Car(); 을 통해 객체를 만들어주면 에러가 해결된다. 
  c[0].name = "subway";
~~~

#### 리스트 / 해쉬맵
- 리스트 : 자바에서 가장 많이 사용하는 자료구조 형태, List는 추상클래스 이므로 인스턴스 화가 되지 않는다.
~~~java
// ArrayList 생성
List<Car> carList = new ArrayList<Car>();
Car c = new Car();
c.setName("yes");
carList.add(c);
// 참조값을 복사하여 메모리에 저장하기 때문에 같다.
Car x = carList.get(0);
// x == c  true!! 
~~~
- 해쉬맵 : key와 value로 이루어진 자료구조 형태
~~~Java
HashMap<String, Integer> a = new HashMap<String, Integer>();
a.put("one", 1);
a.put("two", 2);
a.put("three", 3);
a.put("four", 4);
~~~

#### 제네릭
- 제네릭은 들어가는 객체가 어떤 타입인지 나중에 알려준다. 인스턴스를 생성 할때 어떤 객체를 넣을지 정해진다. 
- 아무 클래스나 컬렉션에 넣어서 사용할수 있도록 만들어준다.
> <img src="https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/516/2136.png" />

- `List<Car> carList = new ArrayList<Car>();` 인스턴스화를 할때 안에 들어갈 형태를  아무거나 담을 수 있게 해준다.
- 제네릭을 만들수 있어야 한다.


#### 메모리 구조(검색)
1. cpu clock : 컴퓨터가 일을 처리하는 단위
- 3GHZ -> 1초에 3G 번의 명령어를 수행 할 수 있다.
- 전기적 신호를 계속 준다.
2. C -> compile -> oject + link -> excutable -> 프로그램
- 프로그램은 디스크(hdd)에 있다가 실행 시키면 메모리로 올라간다.
- 메모리에 올라가면 '프로세스'라고 부른다.
3. PC(program count) : 명령어리 어디까지 처리했는지 표시되는 영역, 지금 실행하고 있는 메모리 번지가 저장된다.
4. 레지스터 : cpu 값을 읽어서 직접 계산 하지 않고 레지스터를 통해 계산 해서 메모리에 올린다.
5. 캐시 : 메모리와 레지스터 사이에 캐시가 있다.
6. 일반적이 컴퓨터 구조 (mips)
> <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pipeline_MIPS.png" />

#### 프로그램과 프로세스
1. 프로그램 : 프로그램이란 어떤 작업을 위해 실행할수 있는 파일	

2. 프로세스 : 실행중인 프로그램 ,4G의 공간을 가지고 있다., 모든 프로세스는 4G 자기 혼자 쓴다고 생각한다.
- 32비트 머신 = 4byte = word : 명령어를 처리할수 있는 단위
- 주소도 2^32 까지만 사용가능
- swaping : 메모리에 일부를 하드에 내려서 실행시킨다. 굉장히 느리다.
- 가상 메모리 : 여러개의 프로세스가 동시에 실행 될 수 있다. 4G라고 하더라고 한번에 다 쓰는 것이 아닌 것이 않기 때문에 멀티 프로세싱이 가능하다.
- 실행되고 있는 프로세스들은 다 같은 곳에 메모리 주소를 가지지만 그것은 가상 메모리의 주소이며 실제 메모리주소는 전혀 다르다.

3. 메모리 구조 
- code: 개발자가 작성한 코드가 기계어로 바뀌어 코드 영역에 들어간다.
- data: c언어 : 전역 변수, java : static 변수
- stack : 지역변수, call stack, 함수호출이 끝나면 stack에서 사라진다.
- heap : 동적할당 영역, GC는 heap 영역만 잘 정리 해준다. 모든 객체, 구조체 등이 모두heap에 저장된다.
> <img src="http://cfile4.uf.tistory.com/image/1210FF364FC69CA5261F3B" />

4. memory leak
- 메모리 누수(memory leak) 현상은 컴퓨터 프로그램이 필요하지 않은 메모리를 계속 점유하고 있는 현상이다. 할당된 메모리를 사용한 다음 반환하지 않는 것이 누적되면 메모리가 낭비된다. 일부 서적에서 메모리 손실이라는 용어로 뜻을 옮기기도 하지만 leak라는 표현은 단순히 잃는 것 이상의 개념이므로 누수라는 표현이 더 정확하다.



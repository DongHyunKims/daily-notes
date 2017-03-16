// 1. javascript 리터럴
var healthObj = {
  name : "달리기",
  lastTime : "PM10:12",
  showHealth : function(){
    debugger
    console.log("오늘은 " + this.lastTime + " 까지 " + this.name + " 운동을 하셨네요");
  }
}
healthObj.showHealth();

//2. new

function Health(name , lastTime){
  debugger;
  this.name = name;
  this.lastTime = lastTime
}


//3.
var healthObj2 = {
  showHealth : function(){
    console.log("오늘은 " + this.lastTime + " 까지 " + this.name + " 운동을 하셨네요");
  }
}

function Health2(name, lastTime){
  this.name = name;
  this.lastTime = lastTime;
}
Health2.prototype = healthObj2;
Health2.prototype.getName = function(){return this.name;}

var foo = new Health2('jinniy',5000);
var foo1 = new Health2('jinniy1',4000);
var foo2 = new Health2('jinniy2',5000);
var foo3 = new Health2('jinniy3',6000);
foo.showHealth();
console.log(foo.getName());
console.log(foo1.getName());
console.log(foo2.getName());
console.log(foo3.getName());

//4 prototype이 정말 같은 것인가?

if(foo.__proto__ === foo2.__proto__) console.log("ddd");

if(foo.__proto__ === Health2.prototype) console.log("ddd");


var foo8 = Object.create(healthObj2);
foo8.name = "달리기";
foo8.lastTime = "23:10";

console.log(foo8);

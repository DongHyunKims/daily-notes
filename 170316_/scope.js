var name = 'play ground';
function home() {
  var homeName = "my house";
  for(var i = 0; i< 1000; i++){}
}


var name = 'play ground';
function home() {
  var i;
  var homeName = "my house";
  for(i = 0; i< 1000; i++){}
}


//let
var name = 'play ground';
function home() {

  var homeName = "my house";
  for(let i = 0; i< 1000; i++){}
  console.log(i);
}

//const
function home(){
  const homeName = 'my house';
   homeName = 'your house';

}
home();


function home(){
  const list = ['j','a','h'];
  list.push('t');
  return list;
}

home();

const list = ['j','a','h'];
list2 = [].concat(list,"tiger");
list == list2;

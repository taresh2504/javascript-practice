function fun(){
    alert("working")
}

function r(){
    document.body.style.backgroundColor='red'
}

function b(){
    document.body.style.backgroundColor='blue'
}

function y(){
    document.body.style.backgroundColor='yellow'
}

function o(){
    document.body.style.backgroundColor='orange'
}

function color(cl){
    document.body.style.backgroundColor=cl
}

function fun1(){
    document.getElementById('head1').textContent='changed by js'
}

// H.W
var i = 0
function add(){
    var a =  document.getElementById('zero').innerText=++i
}

function sub(){
    if (i>0){
   var a = document.getElementById('zero').innerText=--i
    }
    else{
        alert("not less than 0")
    }
}

function change(){
  document.getElementById('btn').textContent = "get lost"
  document.getElementById('btn').style.backgroundColor='red'
}

function change1(){
  document.getElementById('btn').textContent = "tap here"
  document.getElementById('btn').style.backgroundColor='green'
}

function mob(){
  var a =  document.getElementById('mob')
  a.setAttribute=('mobile.jpeg','height : 200px')
}

function lap(){
  var b =  document.getElementById('lap')
  b.setAttribute=('laptop.png','height : 200px')
}

function tab(){
  var c =  document.getElementById('tab')
  c.setAttribute=('tablet.jpeg','height : 200px')
}





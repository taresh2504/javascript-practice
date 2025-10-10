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
  document.getElementById('text').textContent = "get lost"
  document.getElementById('text').style.backgroundColor='red'
}

function change1(){
  document.getElementById('text').textContent = "tap here"
  document.getElementById('text').style.backgroundColor='green'
}

function fun1(){
    document.getElementById('image').src='mobile.jpeg'
  // a.setAttribute('src','mobile.jpeg')
}

function fun2(){
    document.getElementById('image').src='laptop.png'
  // a.setAttribute=('src','laptop.png')
}

function fun3(){
   document.getElementById('image').src='tablet.jpeg'
  // a.setAttribute=('src','tablet.jpeg')
}

// array :- stores multiple type of data 

// dom me saare element node list hote h








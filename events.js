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
var i = 1
function add(){
    var a =  document.getElementById('zero').innerText=i++
    // a.innerHTML=i++
}

function sub(){
   var a = document.getElementById('zero').innerText=i--
//    a.innerHTML=--i
}


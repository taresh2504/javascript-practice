// let h = document.getElementsByTagName('h2')
// h[0].style.color='red'
// console.log(h[0])

// document.getElementById('a').style.color='yellow'
// document.getElementById('b').style.color='green'
// document.getElementById('c').style.color='blue'
// document.getElementById('d').style.color='aqua'
// document.getElementById('e').style.color='purple'

let a = document.getElementsByClassName('x')
a[0].style.color='red'

let b = document.getElementsByClassName('x')
b[1].style.color='blue'

let c = document.getElementsByClassName('x')
b[2].style.color='green'

// query selector : directly edit kar sakte h only for single element 
// <h1 class='amit'> /// </h1>
// let h = document.querySelector('amit') 
// h.style.color='red'
// querySelectorAll('class,id,tag'): saare elements ko target krta hai.ye bhi node list return krta hai array ke form me.

// let h = document.querySelector('image')
function fun1(){
    let h = document.querySelector('.image')
    h.setAttribute('src','tiger.jpg')
}

function fun2(){
    let h = document.querySelector('.image')
    h.setAttribute('src','tablet.jpeg')
}

function fun3(){
    let h = document.querySelector('.image')
    h.setAttribute('src','mobile.jpeg')
}


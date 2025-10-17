// Setinterval(function,timer) 

// setInterval(()=>{document.write('Hi....')},3000)

let a = 0
let h1 = document.querySelector('#num')
let st
function fun(){
    st = setInterval(()=>{
        h1.innerHTML = ++a
    },1000)
}

function stop(){
    clearInterval(st)
}

function rest(){
    a=0
    h1.innerHTML=a
    clearInterval(st)
}

// settimeout
// setTimeout(()=>{
//     alert('working...')
// },3000)

setTimeout(()=>{
    document.querySelector('form').style.display='block'
},5000)

function demo(){
   setTimeout(()=>{
    document.querySelector('#img').style.display='block'
},3000)
}

// create button and after clicking on button it will alert a message that 1st time call,2nd time call

let h = 0
function num1(){
    setInterval(()=>{
       
    },3000)
}

// tg = b, fb= blue, wh = gr, sn = ye, ins = red

function t1(){
    let a = document.getElementById('tg')
    a.style.color='blue'
    let b = document.getElementById('cto')
    b.innerHTML='telegram is in blue color'
}

function f1(){
    let a = document.getElementById('fb')
    a.style.color='blue'
    let b = document.getElementById('cto')
    b.innerHTML='facebook is in blue color'
}



function w1(){
    let a = document.getElementById('wp')
    a.style.color='green'
    let b = document.getElementById('cto')
    b.innerHTML='whatsapp is in green color'
}

function s1(){
    let a = document.getElementById('sn')
    a.style.color='yellow'
    let b = document.getElementById('cto')
    b.innerHTML='telegram is in blue color'
}

function i1(){
    let a = document.getElementById('ig')
    a.style.color='red'
    a.innerHTML='instagram is in red color'
}




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


document.querySelector('#btn').addEventListener('click',function(){
    alert('working...')
})

document.querySelector('#btn2').addEventListener('mouseenter',function(){
    console.log('mouseenter is working')
})

document.querySelector('#btn3').addEventListener('contextmenu',function(){
    document.write('contextmenu is working')
})

document.querySelector('#btn4').addEventListener('doubleclick',function(){
    document.write('doubleclick is working')
})

var a = 0
document.querySelector('#add').addEventListener('click',function(){
    document.querySelector('#ctr').innerHTML=++a
})

document.querySelector('#sub').addEventListener('click',function(){
    if (a>0){
        document.querySelector('#ctr').innerHTML=--a
    } 
})

document.querySelector('#rst').addEventListener('click',function(){
    document.querySelector('#ctr').innerHTML= a = 0
})

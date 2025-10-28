
function fun(){
    var num1 = parseInt(document.querySelector('#num1').value)
    var num2 = parseInt(document.querySelector('#num2').value) 

    document.querySelector('#result').innerHTML = num1+num2
    return false

}

function fun2(){
    var p = document.querySelector('#p').value
    var q = document.querySelector('#q').value
    var r = document.querySelector('#r').value
    var s = document.querySelector('#s').value
    var t = document.querySelector('#t').value

    document.querySelector('#a').innerHTML=p
    document.querySelector('#b').innerHTML=q
    document.querySelector('#c').innerHTML=r
    document.querySelector('#d').innerHTML=s
    document.querySelector('#e').innerHTML=t
    return false
}

    

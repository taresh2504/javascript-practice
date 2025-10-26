function fun(){
let wrapper = document.querySelector('#container')
wrapper.classList.add('wrapper')
}

function remov(){
    let container = document.querySelector('#container')
    container.classList.remove('wrapper')
}

function both(){
}

function ch(){
    document.body.classList.toggle('color')
    let cn = document.querySelector('#dom')
    cn.classList.toggle('color')
    if (cn==1){
    let cn = document.getElementById('dom').textContent='light'
    }
    else{
    document.getElementById('dom').textContent='dark'
    }
}

function num(){
    var a = document.querySelector('#practice')
    a.classList.toggle('flavour')
}



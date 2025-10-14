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
    let cn = document.querySelector('#container')
    cn.classList.toggle('wrapper')
    if (cn==true){
       document.getElementById('dom').textContent='dark'
    }
    else{
       document.getElementById('dom')
    }
}




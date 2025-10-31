function validate(){
    let name = document.querySelector('#name').value
    let address = document.querySelector('#address').value
    let age = document.querySelector('#age').value
    let city = document.querySelector('#city').value
    let email = document.querySelector('#email').value

    if(name == ''){
        document.querySelector('#error').innerHTML='please fill your name'
        document.querySelector('#name').focus()
        return false
    }

    if(address == ''){
        alert('please fill your address')
        document.querySelector('#address').focus()
        return false
    }

    if(age == ''){
        alert('please fill your age')
        document.querySelector('#age').focus()
        return false
    }

    else if(age == ''){
        alert('please enter age in numbers')
        document.querySelector('#age').focus()
        return false
    }

    if(city == ''){
        alert('please fill your city')
        document.querySelector('#city').focus()
        return false
    }

    if(email == ''){
        alert('please fill your email')
        document.querySelector('#email').focus()
        return false
    }
}

let age2 = document.querySelector('#eage').value
let contact = document.querySelector('#ectn').value
let mail = document.querySelector('#mail').value
let pass = document.querySelector('#pass').value
let cpass = document.querySelector('#cpass').value


function fun2(){
    if (age2.length < 0 || age2.length > 3){
        alert('please fill your age')
        document.querySelector('#age2').focus()
        return false
    }
    
    // if (isNaN(age2) ){
    //     alert('please enter age in numbers')
    //     document.querySelector('#age2').focus
    // }

    if(contact <10 || contact >10){
        alert('enter your correct contact detail')
        document.querySelector('#ectn').focus()
        return false
    }

    if (mail = ''){
        alert('please enter mail')
        document.querySelector('#mail').focus()
        return false
    }

    else if( !(mail.includes('@gmail.com'))){
        alert('please enter @gmail.com in email')
        document.querySelector('#mail').focus()
        return false
    }

    if (pass == ''){
        alert('enter password')
        document.querySelector('#pass').focus()
        return false
    }

    else if( !(pass.match(/[~``!@#$%^&*()]/))){
        alert('please enter special charcater')
        document.querySelector('#pass').focus()
        return false
    }

    else if( !(pass.match(/[1234567890]/))){
        alert('please enter one number')
        document.querySelector('#pass').focus()
        return false
    }
    
}
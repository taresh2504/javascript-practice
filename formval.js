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
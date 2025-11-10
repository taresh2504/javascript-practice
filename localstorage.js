// local storage user ka data store krta h browser p. max storage capacity 3 to 7 mb. key value k format m data store hota h , or string m dta store hota

// 4 functions 
// set Item() -> data ko save krega
// get Item() -> data ko access karega
// remove Item() -> at a time one element ko remove karega
// clear() -> sab kuch delete kar dega

localStorage.setItem("username","taresh")
localStorage.setItem("userage",20)
localStorage.setItem("usercity","bhopal")
localStorage.setItem("userstate","M.P")
localStorage.setItem("usercountry","India")

// getItem()

let name = localStorage.getItem("username")
console.log(name);

// remove item ()

localStorage.removeItem("userage")

// clear()

localStorage.clear()

let person = {
    name : 'raj', age : 55, city : 'bhopal'
}

localStorage.setItem('userdata',JSON.stringify(person))

let access = localStorage.getItem('userdata')
console.log(access)

let x = JSON.parse(localStorage.getItem("userdata"))
console.log(x.name)


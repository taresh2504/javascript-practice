// Data types
// primitive = Number,string,boolean,null,undefined
// non primitive = Array,object,functions

// function = it is a block of code and set of instructions , mainly use for code reusability and syntax of function

// // function identifier (){
// ////code
// }

// identifier ()

// 1. function declaration
// 2. function definition
// 3. function calling

// function sum()
// {
//     let n1 = 10
//     let n2 = 20
//     console.log(n1+n2)
// }

// sum()

// wap to find area of rectangle using function input from user

// function area()
// {
//     var l= parseInt(prompt('enter length'))
//     var b= parseInt(prompt('enter breath'))
//     console.log(l*b)
// }

// area()

// wap to 

// function num()
// {
//     let a = parseInt(prompt("enter number"))
//     if (a<=20 && a>=11){
//         while(a<1){
//             console.log(a)
//             a--
//         }
//     }
//     else{
//         while(10<=a){
//             console.log(a)
//             a--
//         }
//     }
// }

// let n = parseInt(prompt("enter no. between"))
// if(n>=11 && n<=20)
// {
//     for(let a =20; a>=1; a--){
//         console.log(a)
//     }
// }
// else (n>=1 && n<=10)
// {
//     for (let i = 10; i>=n; i--){
//         console.log(i)
//     }
// }

// 1. pre defined (inbuild)
// 2. user defined :- 
// 1. no argument & no return
// 2. with arg & no return
// 3. with arg & return
// 4. no arg & return

// function demo(a) :- parameter/formal
// {
//     ///
// }

// demo (8) argument/Actual 

// ex 2 :- with argument and no return
// function demo(){
//     console.log()
// }
// demo (10)

// wap to take input from the user andf check no is even or odd function type 2

// var a = parseInt(prompt("enter value"))
// function num()
// {
//     if (a%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// num ()

// wap to print a reverse table of any number using function type 2

// var i = parseInt(prompt("enteer valu"))
// function tab(c)
// {
//     for(var b = 10; b>=1;b--){
//         console.log(b*i)
//     }
// }

// tab (b)

// function type 3 :- with argument with return type 

// function demo(name){
//     return name
// }

// let a = demo("raj")
//  console.log(a)

// // or 

// console.log(demo("raj"))

// wap to take user input in integer if it is 1 to 5 then check even or odd if even then return sum of 1 to 15 or it is odd then directly print in console

// let n = parseInt(prompt("enter num"))

// function Add (n){
//     var sum =0
//     if (n>=1 && n<=5)
//         {
//             if(n%2==0){
//                 for(let a = 1; a<=15; a++)
//             {
//                 sum = sum+a
//                 alert(sum)
//                 return sum
//             }
//             }
//             else
//             {
//                 console.log("asdfghjk"+n)
//             }
           
//         }
        
// }

// console.log("dfghjk"+Add(n))

// function type 4 :- no argument with return

// function demo(){
//     let a = 9
//     return a+a
// }

// console.log(demo())

// wap to take input from user and find area of triangle using function type 4

function triangle(){
    let h = parseInt(prompt("enter h"))
    let b = parseInt(prompt("enter b"))
    return 0.5*h*b
}

console.log(triangle())

// two types of function 
// function with name is called "named" function
// function without name is called "anonymous" function

// Arrow function introduced in 2015 it have no name with shorter syntax. it consist of many syntax. curly braces k andar multiple lines likh sakte hai sirf but parenthesis me nhi. single line function k liye use hota h. ecma ne 2015 ne add kiya tha ES6 version me 
// ()=>{return } 
// ()=>( )
//  ()=> 
//   =>
//  =>()
//  =>{return}    

// callback function :- function ke andar function ko callback function kehte h 
// syntax
// function fun(function){ 
//     //
// } baaki puri body ko high order function kehte hai





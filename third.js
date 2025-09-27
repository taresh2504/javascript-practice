// wap to check no is +ve or -ve

// let a = parseInt(prompt("enter the num"))

// if (a>=1)
// {
//     console.log("+ve num")
// }
// else{
//     console.log("-ve")
// }

// wap take two integer no from the user and find the greatest no.

// var num1 = parseInt(prompt('enter num1'))
// var num2 = parseInt(prompt('enter num2'))

// if (num1>num2)
// {
//     console.log('num1 is big')
// }   
// else
// {
//     console.log('num2 is big')
// } 

// check even odd

// let num3 = parseInt(prompt('enter num1'))
// // let num4 = parseInt(prompt('enter num2'))

// if (num3%2==0)
// {
//     console.log('num1 is even')
// }   
// else
// {
//     console.log('num1 is odd')
// } 

// wap to take 3 inputs from user and check second input is even or odd if 2nd number is even then print multiplication of three inputs and if odd then add all inputs

// var num1 = parseInt(prompt('enter num1'))
// var num2 = parseInt(prompt('enter num2'))
// var num3 = parseInt(prompt('enter num3'))

// if (num2%2==0)
// {
//     console.log(num1*num2*num3)
// }
// else
// {
//     console.log(num1+num2+num3)
// }

// ladder if else
    // if(condition){
     //
// }

// else if(condition){
//     //
// }

// else{
//     //
// }

// wap to check +,-,0

// let num3 = parseInt(prompt('enter num3'))

// if (num3%2==0)
// {
//     console.log('num1 is even')
// }   
// else if (num3%2==1)
// {
//     console.log('num1 is odd')
// } 
// else
// {
//     console.log('neutral')
// }    

// take 2 input which is greater,less or equal

// var num1 = parseInt(prompt('enter num1'))
// var num2 = parseInt(prompt('enter num2'))

// if (num1>num2)
// {
//     console.log('num1 is greater')
// }
// else if (num1<num2)
// {
//     console.log('num2 is greater')
// }
// else
// {
//     console.log('both equal')
// }

// h.w = user input of 5 subject and find average and grades 

// var num1 = parseInt(prompt('enter num1'))
// var num2 = parseInt(prompt('enter num2'))
// var num3 = parseInt(prompt('enter num3'))
// var num4 = parseInt(prompt('enter num4'))
// var num5 = parseInt(prompt('enter num5'))

// let a = (num1+num2+num3+num4+num5)/5

// if (a>80)
// {
//     console.log('A grade',a)
// }
// else if (a>60 && a<=80)
// {
//     console.log('B grade',a)
// }
// else if (a>33 && a<=60)
// {
//     console.log('C grade',a)
// }
// else
// {
//     console.log('Fail',a)
// }

// nested if 
// syntax 
// if (condition){
//     //
//     if(condition){
//         //
//     }
//     else{
//         //
//     }
// }
// else{
//     //
// }

// let age = parseInt(prompt("enter your age "))

// if(age>=18){
//     let b = parseInt(prompt("press 1 for indian"))
//     if(b==1){
//         alert("eligible for voting")
//     }
//     else{
//         alert("not eligible for voting")
//     }
// }
// else{
//     alert("u are underage")
// }

// let a = parseInt(prompt("enter number"))

// if (a>0){
//     if(a%2==0){
//     console.log(a*a)
//     }
//     else{
//         console.log(3.14*a*a)
//     }
// }
// else{
//     if (a==-3){
//         console.log(a)
//     }
//     else{
//         console.log(a)
//     }
// }

// 6 types of Loops in javascript 
// do while 
// while 
// for 
// for in 
// for Of
// for each :- work as a function and loop both

// do while synatx
// do {
//     ///
// }while (condition)

// // while synatx
// while (condition)
//     {
//         ///
//         } 

// let a = 1
// do{
//     document.write("Tv ")
//     a++
// }while(a<11)

// wap to print didgit 1 to 15

// let a = 1
// do{
//     document.write(a )
//     a++
// }while(a<16)

// let a = 10
// do{
//     document.write(a )
//     a--
// }while(a>=1)    

// wap to take int input 

// var a = parseInt(prompt('enter number'))

// do{
//     var a = parseInt(prompt("enter value"))
// }while(a!=0)

// var =global
// let,const = local     

// while loop

// wap to print a table of any no

// let num = parseInt(prompt("enter number"))
// let a = 1

// while(a<=10){
//     console.log(num*a)
//     a++
// }

// wap to print sum of all no between 15 to 1

// let a =15
// let sum = 0
// while(a>=1){
//     sum = sum + a
//     a--
// }
// console.log(sum)

// For loop syntax
// for(init;condition;in/dc){
//     //code
// }
// init or condition k baad block of code execute hota h uske baad in/dc hota h

// wap to print sum of all odd no between 1 to 15

// sum=0
// for(let a = 1; a<=15; a++){
//     if (a%2==0)
//     {
//         sum = sum + a
//     }
// }
// console.log(sum)

// js ko hamesa closing body tag ke upar lagana hai

// document.write("<h1>this is <br> js&nbsp&nbsp&nbsp class</h1>")

// nested for loop synatax

// for(){
//     for(){
//         ///
//     }
// }


// for(let a=1;a<6;a++){
//     document.write("*")
// }

// for(let a=1; a<=3; a++){
//     for(let b=1;b<6;b++){
//         document.write("*")
//     }
//     document.write('<br>')
// }

// for(let a=1;a<=5;a++){
//     for(let b=1;b-a;b++){
//         document.write('*')
//     }
//     document.write("<br>")
// }

// for(let r=1;r<=5;r++){
//     for(let c=1;c<=5;c++){
//         if(r==1||r==5||c==1||c==5){
//             document.write('*')
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }

// Star pattern printing
// let n = 5
// for(let r=1;r<n;r++){
//     for (let c=1;c<n;c++) {
//         if (r==c||r+c==6){
//             document.write("*")
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write('<br>')
// }

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
// 2. user defined :- 1. no argument & no return
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

var i = parseInt(prompt("enteer valu"))
function tab(c)
{
    for(var b = 10; b>=1;b--){
        console.log(b*i)
    }
}

tab (b)
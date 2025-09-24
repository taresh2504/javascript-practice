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
sum=0
for(let a = 1; a<=15; a++){
    if (a%2==0)
    {
        sum = sum + a
    }
}
console.log(sum)


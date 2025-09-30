// Loops

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
//     //block of code
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

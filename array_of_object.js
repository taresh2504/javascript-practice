// let student = [
//     {
//         name : 'Taresh',
//         age : 20,
//         contact : 1234
//     },
//     {
//         name : 'Priyesh',
//         age : 23,
//         contact : 567
//     },
//     {
//         name : 'Smrirti',
//         age : 18,
//         contact : 124
//     },
//     {
//         name : 'Tanish',
//         age : 22,
//         contact : 789
//     },
//     {
//         name : 'Krish',
//         age : 18,
//         contact : 9876
//     },
// ]

// console.log(student)

// map ek high order fn hota h jo ki hame result ek new array me dega aur sirf array pe chalta hai object pe nhi 

// suntax of map fn
// let ar = [{},{},{}]
// ar.map(()=>{
//    return 
//      })

let ar = [{name: 'abc',
           age: 17
},
{name: 'xyz',
    age: 20
}]

// let res = ar.map((e)=>{
//     return e.age + " " +e.name
// })

// console.log(res)

// filter fn :- 

// let srb = ar.filter((i)=>{
//     return i.age >=18
// })

// console.log(srb)

// destructuring of array

let [name,city,country,state] = ['tanmay','bpl','india','m.p']
console.log(name)

// spred operator = ... merge krne ka kaam krta hai 

let ar1 = [1,2,3]
let ar2 = [4,5,6,...ar1]

console.log(ar2) 

// destructuring of object

let {nam,cit,co,st} = {name:'tanmay', city :'bpl', co: 'india', st:'m.p'}
console.log(name)


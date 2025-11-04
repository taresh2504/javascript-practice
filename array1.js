// let ar = ['Taresh','20','bhopal','india']

// for (let vl of ar){
//     console.log(vl);
// }

// // create a array in which no. between 25 to 1 usme se jeetne even no. aa rhe uska square print krna h

// let num = [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

// // for off loop syntax
// for (let even of num){
//     if (even%2==0){
//         console.log(even*even)
//     }
// }

// // for in loop syntax
// for(let k in num){
//     console.log(k);
// }

// array functions

// let lg = ['c++','java','python']
// console.log(lg);

// // push() : add elements at last of array
// lg.push('js','react')
// console.log(lg);

// // pop() : remove element at last of array
// lg.pop()
// console.log(lg);

// // unshift() : add elements at first of array
// lg.unshift('c','assembly')
// console.log(lg);

// // shift() : remove elements at first of array
// lg.shift()
// console.log(lg);

let lg = ['c++','java','python','c','css']

// slice in array (start index, end index)
let valu = lg.slice(1,3)
console.log(valu)

//  splice(index value, no of elements,value add) :- remove krne k liye use hota h

// for deletion
// lg.splice(1,2)
// console.log(lg)

lg.splice(3,0,'Django')
console.log(lg)
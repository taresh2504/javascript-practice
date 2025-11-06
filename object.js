// object ek datatype h for storing multiple type of data. but isme key value ke pair m hoti h.unordered.{} se denote hoga

// let emp = {
//     name:'Shivam',
//     age:'90',
//     place:'bhopal',
//     add : function(){
//         return 2+3
//     },
//     emp_salary : [10000,20000,21000,28000,28500,5000],
//     emp_account : {
//         bank_name : 'SBI',
//         acc_no : 1234567890
//     }
// }
// console.log(emp.add())
// console.log(emp.emp_salary[3]) // bracket notation
// console.log(emp.emp_account.acc_no)

// console.log(emp.name)
// emp.email = 'a@gmail.com'
// console.log(emp)

// emp.age = 12
// console.log(emp)

// // student detail naam ka object banaoge or useh print krna

// let student_detail = {
//     name : 'Taresh Tandey',
//     age : 20,
//     city : 'bhopal',
//     course : 'B.tech',
//     language : 'js',
//     domain : 'FSD',
//     address : 'h no. 42, bhoj valley',
//     email : 'taresh25202@gmail.com',
//     country : 'India',
//     state : 'M.P'
// }

// console.log(student_detail) //.notation

// let ob = {
//     name : 'Tv',
//     "full name" : 'Television',
//     age : 29
// }

// console.log(ob['full name']) // bracket notation

let student = {
    stname : prompt('enter name :' ),
    stage : parseInt(prompt('enter age : ')),
    stcontact : (prompt('enter contact no. : '))
}

console.log(student)

// for in loop object ki keys findout krne ka kaam krta hai 
// bracket notation ki help se ham object ka index value find out kar sakte hai

// for(let k in student){
//     console.log(k)
// }

for(let k in student){
    console.log(student[k])
}

// let ky = Object.keys(student)
// console.log(ky)

let vl = Object.values(student)
console.log(vl)


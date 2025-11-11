// fetch(url,{method})
// api me agar kuch bhi krna ho to fetch function ka use hota h 

// Promise :- ek object h jiske 3 types hote hai
// Reject, : catch ( fun )
// Pending, 
// Fullfill : then ( fun )

// synchronus :- isme agar ten line of code h to saare code line by line execute honge phir chaahe kitna bhi time le

// Asynchronus :- isme agar ten line of code h to jo sabse kam time lega use pehle run karega aur phir baaki baad waale

// async function access(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let res = await data.json()
//     console.log(res)
// }

// access()

async function access(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let res = await data.json()
    let result = res.map((e)=>`
    <tr>
       <td> ${e.userID} </td>
       <td> ${e.id} </td>
       <td> ${e.title} </td>
    </tr>
    `).join("")

    document.querySelector('#showdata').innerHTML = result

}    




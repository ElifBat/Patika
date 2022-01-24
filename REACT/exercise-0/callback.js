import fetch from "node-fetch"
import axios from "axios"
//-----------------------------------------------------------------
//setTimeout(() => {console.log("5 sn sonra çalışır")}, 5000)
//setInterval(() => {console.log("3 sn'de bir çalışır")}, 3000)
//-----------------------------------------------------------------

// async function getData() {
//     const {data} = await axios('https://jsonplaceholder.typicode.com/users/1')
//     //const {post1} = await axios('https://jsonplaceholder.typicode.com/posts/1')
//     console.log("data ", data);
//     //console.log(post1);
// }
// getData();

//-----------------------------------------------------------------

//Belli bir saırayla gelmiyor.
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(json => {console.log(`USER CAME: `), console.log(json);});

//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => {console.log(`POST1 CAME: `), console.log(json);});

//   fetch('https://jsonplaceholder.typicode.com/posts/2')
//   .then(response => response.json())
//   .then(json => {console.log(`POST2 CAME: `), console.log(json);});

//   fetch('https://jsonplaceholder.typicode.com/posts/3')
//   .then(response => response.json())
//   .then(json => {console.log(`POST3 CAME: `), console.log(json);});

//-----------------------------------------------------------------

//sıralı gelmesi böyle sağlanabilir:
// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(json => {
//         console.log(`USER CAME: `), console.log(json);

//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then(response => response.json())
//             .then(json => {
//                 console.log(`POST1 CAME: `), console.log(json);

//                 fetch('https://jsonplaceholder.typicode.com/posts/2')
//                     .then(response => response.json())
//                     .then(json => { console.log(`POST2 CAME: `), console.log(json); });
//             });
//     });

//-----------------------------------------------------------------

//burada bir şey çalışmıyor. Sebebini bulamadık.
// async function getData() {
//     const user = await (
//         await fetch('https://jsonplaceholder.typicode.com/users/1')
//     ).json();
//     const post1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     ).json();
//     const post2 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/2')
//     ).json();
//     const post3 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/3')
//     ).json();

//     console.log(post1);
//     console.log(post2);
//     console.log(post3);
// }

// getData();

//-----------------------------------------------------------------

//TEMPLATE LITERALS KABUL ETMİYOR.
// (async() => {
//     const user = await (
//         await fetch('https://jsonplaceholder.typicode.com/users/1')
//     ).json();
//     const post1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     ).json();
//     const post2 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/2')
//     ).json();
//     const post3 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/3')
//     ).json();

//     console.log("USER: " , user);
//     console.log("POST1: " , post1);
//     console.log("POST2: " , post2);
//     console.log("POST3: " , post3);
// })();
//-----------------------------------------------------------------


//PROMISES- FETCH KULLANMADIK.
// (async () => {
//     const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/1')
//     const { data: post1 } = await axios('https://jsonplaceholder.typicode.com/posts/1')
//     const { data: post2 } = await axios('https://jsonplaceholder.typicode.com/posts/2')

//     console.log("USER: ", user);
//     console.log("POST1: ", post1);
//     console.log("POST2: ", post2);
// })();
//-----------------------------------------------------------------

//RESOLVE/REJECT
// const getData = () => {
// return new Promise ((resolve, reject) => {
//     console.log("deneme");
//     resolve;
// })
// }

// getData()
// .then(() => console.log("It's done"))
// .catch((e) => console.log(e))

//-----------------------------------------------------------------
// const getData = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number == 1) {
//             resolve({ text: "selam" })
//         }
//         reject("problem oluştu")
//     })
// }

// getData(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))
//-----------------------------------------------------------------

// (async () => {
//     await getUsers()
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));

//     await getPost()
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e))
// })();
//-----------------------------------------------------------------

//  (async() => {
//      const users = await getUsers();
//      const post = await getPost();

//      console.log(users);
//      console.log(post);
//  }
//  )();
//-----------------------------------------------------------------

// Promise.all([getUser, getPost])
// .then(console.log("Resole: ", resolve))
// .catch(console.log("Reject: ", reject))

//-----------------------------------------------------------------


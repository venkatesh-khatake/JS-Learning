// fetch("https://official-joke-api.appspot.com/random_joke")
//   .then(res => res.json())
//   .then(joke => {
//     console.log("Setup:", joke.setup);
//     console.log("Punchline:", joke.punchline);
//   })
//   .catch(err => console.log("Failed to fetch:", err));
// ==============================================================
// fetch('https://fakestoreapi.com/products/1')
// .then((response) =>{
//   return response.json();
// })
// .then((data) =>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log("Error :", error);
// })

// ==========================================

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(users =>{
//   users.forEach(user =>{
//     console.log(`${user.name} from ${user.address.city}`);
//   });
// })
// .catch(err => console.log("Error fetching users :", err))

// =====================================================

// async - await : 

// async function getData(){
//   try{
//     console.log("fetching data from the server...");
//     const response = await fetch("https://official-joke-api.appspot.com/random_joke");
//     const data = await response.json();
//     console.log("Joke : ", data.setup, "-",data.punchline);
//   }
//   catch(error){
//     console.log("Error fetching joke : ", error);
//   }
// }

// getData();

// =============================================

async function getUsers(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.forEach(user =>{
      console.log(`User Name : ${user.name} -- City : ${user.email}`)
    })
  }catch(error){
    console.log("Error Occured : ",error)
  }
}
getUsers();
let fetchDataFromApi = async () =>{
    let api = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await api.json();
    console.log(data [0].title);
}

fetchDataFromApi();
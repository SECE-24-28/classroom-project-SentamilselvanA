let api = 'https://api.restful-api.dev/objects/1';
let api2 = 'https://jsonplaceholder.typicode.com/todos'
let data = fetch(api2).then((data)=>
{
    console.log(data);
})
console.log(data)
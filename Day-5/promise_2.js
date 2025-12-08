let api = 'https://api.restful-api.dev/objects/1';
let api2 = 'https://jsonplaceholder.typicode.com/users'
let data = fetch(api2).then((data)=>
{
    return data.json()
}).then(user=>
{
    console.log(user)
}
)
console.log(data)
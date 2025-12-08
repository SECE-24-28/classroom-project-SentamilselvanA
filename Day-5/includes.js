let employes=[
    {ena:"arun",mob:111},
    {ena:"bavan",mob:121},
    {ena:"arjun",mob:112},
    {ena:"aram",mob:133},
    {ena:"arul",mob:322},
    {end:"arvind",mob:567}
]
let newemp=employes.filter((emp)=>
{
    // return emp.mob.toString().includes("u");
    return emp.ena.includes("u");
})
console.log(newemp)
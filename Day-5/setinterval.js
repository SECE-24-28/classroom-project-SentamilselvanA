setInterval(()=>
{
console.log("prosses 1");
    setInterval(()=>
        {
        console.log("porsses 2")
        setTimeout(()=>
        {
            console.log("prosses 3")
        },2000)
    },2000)

},1000)
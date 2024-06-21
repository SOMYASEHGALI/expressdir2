const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
// app.use((req,res)=>{
//     console.log("request received");
//     //res.send("this is a basic response")
//     let code="<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
//})
//if search /fruit then also same result come
//for same path only one request send
app.get("/",(req,res)=>{
    res.send("u contacted root");
})
app.get("/apple",(req,res)=>{
    res.send("u contacted apple path")
})
app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send(`hello,i am ${username}`);
});
app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`search results for query:${q}`);
})
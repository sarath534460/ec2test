const exp=require("express")

let app=exp()

app.use(exp.json())

app.get("/",(req,res)=>{
    res.send("jk")
})


app.listen(3000,()=>{
    console.log("server is running 3000")
})
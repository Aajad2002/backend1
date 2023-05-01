const express=require('express');

const app =express();

const connection=require("./server/server")

const auth=require("./middlewares/auth")

const userRouter=require("./routes/User.Router")

const noteRouter=require("./routes/Notes.Route")

const cors=require('cors')
app.use(cors())
app.use(express.json())

app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.setHeader("Content-type","text/html")
    res.send(`<h1>Practice</h1>`)
})
app.use(auth)
app.use("/notes",noteRouter)
app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected with database")
    } catch (error) {
        console.log("unable to connect with database")
    }
    console.log("server is listening on port 8080")
})
import express from 'express'

const app: express.Express = express()
const port = process.env.PORT || 3000

app.get("/", (req:express.Request, res:express.Response)=>{
    res.send("hello");
})

app.listen(port, ()=>{
    console.log('Listen on port ' + port)
})

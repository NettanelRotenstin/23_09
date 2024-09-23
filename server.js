import express from 'express'
const app = express()
const port = 7771


app.listen(port, () => {
    console.log(`server started on port : ${port} visit http://localhost:${port} `);
})




//get all
app.get("/amn", (req, res) => {
    res.status(200)
    res.send("Welcom to my Ammunition Center")
})

//get one

app.get(`/amn/:id`,(req,res) =>{

})

//get summary

app.get(`/amn/summary`,(req,res) =>{

})


//create
app.post(`/amn`,(req,res) =>{

})

//update
app.patch(`/amn/:id`,(req,res) =>{

})


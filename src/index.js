const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const templatesPath = path.join(__dirname, '../templates')
const collection = require('./mongodb')

// using json module in express
app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatesPath)
app.use(express.urlencoded({extended:false}))

// app.use()

app.get('/',(req,res)=>{
    res.render('login')
})


app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post("/login", async (req,res)=>{
    try {
        const check = await collection.findOne({
            name:req.body.name
        })
        if(check.password === req.body.password){
            res.render('home')
        }else{
            res.send('Wrong Password')
        }
    } catch{
        res.send("Wrong Details")
    }

})


app.post("/signup", async (req,res)=>{
    const data = {
        name:req.body.name,
        password:req.body.password
    }
await collection.insertMany([data])
res.render("home")

})


app.listen(3000,()=>{
    console.log('Port has been connected')
})

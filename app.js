const express=require('express')

 const userController=require('./controllers/userController')

 var methodOverride = require('method-override')

const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())



app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    console.log("method",method)
    return method
  }
}))

app.use('/user',userController)
app.set('view engine','ejs')

app.use(express.static('public'))

module.exports=app
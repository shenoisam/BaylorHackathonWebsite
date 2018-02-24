//Included libraries
var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')


//Create instance of express app
var app = express()


//Want to serve js and html in ejs (embedded javascript)
app.set('view engine','ejs')

//Want to send css and images, and other static files
app.use(express.static('views'))

//View engine
app.set('views',__dirname+'/views');



//Give server access to user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(logger('dev'))

//Page turner nav bar responses
app.get('/',function(request,response){
  response.render('index.ejs')
})
app.get('/',function(request,response){
  response.render('index.ejs')
})
app.post('/prompts',function(request,response){
  response.render('prompts.ejs')
})
app.post('/organizations',function(request,response){
  response.render('organizations.ejs')
})
app.post('/home',function(request,response){
  response.render('index.ejs')
})




var port =  8888

//Listens in on a specific port so that can run
app.listen(port,function(){
 console.log("App is running on port"+port)
  })

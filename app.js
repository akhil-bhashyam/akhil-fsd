const exp=require('express')
const m1=require('mongoose')
const url='mongodb://localhost/CBIT'
const app=exp()
m1.connect(url, {useNewUrlParser:true}   )

const con=m1.connection

con.on('open', function(){

    console.log("hello")
}  )
app.use(exp.json())

const r1=require('./route/route')
app.use('/demo',r1)

app.listen(9000, ()=>{

    console.log("server connected")

})






const express = require('express');
const app=express();
const puerto= process.env.PORT || 3000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(express.static(__dirname +"/public"));
app.get('/',(req,res)=>{
    res.render("index",{titulo:"el titulo"})
})

app.listen(puerto,()=>{
    console.log("escuchanding",puerto)
})

app.use((req,res,next)=>{
    res.render("404.ejs",{titulo:"404"})
})
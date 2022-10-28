const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config();

app.set('view engine','ejs');
const dbURi = process.env.DATA
mongoose.connect(dbURi, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>app.listen(4000))
.catch((err)=>console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.redirect("/blogs");
});
//routes
app.use(blogRoutes);

app.use((req,res)=>{
    res.render('error');
});


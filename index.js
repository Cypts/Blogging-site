import express from "express"

const app= express();
const port= 3000;

app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/new_blog",(req,res)=>{
    res.render("new_blog.ejs");
})
app.get("/view_other",(req,res)=>{
    res.render("view_others.ejs");
})
app.listen(port,()=>{
    console.log("listening");
})
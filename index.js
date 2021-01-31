
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

// Thiet lap thu muc nhan request cua client
app.use(express.static("public"));
app.set("view engine","ejs");

// Thiet lap thu muc nhan views
app.set("views","./views");
app.listen(8080,function (err) {
if(err){
console.log(err);
}else{
console.log("Running in port 8080");
}
}); // Port = 8000

var mang =[["Alien messege 0125","Nice to meet you"],["Alien messege 6523","Why are you running?"]];
// Xu ly khi truy cap
app.get("/",function(req,res){
res.render("home");
});

app.get("/getNotes",function (req,res) 
{
    res.send(mang);
  });


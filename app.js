const express = require("express");
const app = express();
var faker = require("faker");
var fakeName = faker.name.findName();

app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

//routes
// app.get("/", function(req, res){
//     res.send("It works!");
// });

app.get("/design", function(req, res){
   res.render("design.ejs", {"fakeName":fakeName});  
});

app.get("/maintenance", function(req, res){
   res.render("maintenance.ejs", {"fakeName":fakeName}); 
});

app.get("/planning", function(req, res){
   res.render("planning.ejs", {"fakeName":fakeName}); 
});

app.get("/", function(req, res){
   res.render("index.ejs", {"fakeName":fakeName}); 
});

// starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
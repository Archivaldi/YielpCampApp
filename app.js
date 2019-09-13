const app = require("express")();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");
});


app.listen(3000, function(){
    console.log("Server running");
});
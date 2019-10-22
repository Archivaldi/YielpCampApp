const express = require("express")
const app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://s.abcnews.com/images/Travel/gty_camping_kb_140711_16x9_992.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.vox-cdn.com/thumbor/FMUIaXcnBaKK9YqdP8qtxUog150=/0x0:4741x3161/1200x800/filters:focal(1992x1202:2750x1960)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg"},
    {name: "Granite Hill", image: "https://www.visitmt.com/binaries/content/gallery/MTOT/responsive/tiles-p/p1/places-to-stay/0013mt_tentrgb_rm_web.jpg"}
];

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req,res){
    res.render("newCamp")
})

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name: name, image: image});
    res.redirect("/campgrounds");
})

app.listen(3000, function(){
    console.log("Server 3000 running");
});
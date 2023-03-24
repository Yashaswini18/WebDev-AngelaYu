const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

console.log(date) //outputs hello

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

//let item = "";
let items = ["Books", "Food"];
let workItems = [];


app.get("/", function(req,res){  
    let day = date.getDay();
    res.render("list", { listTitle: day, newListItems: items }); //any new marker for ejs should be mentioned in render
})

app.post("/", function(req, res){

    let item = req.body.newItem;

    if ( req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    }else {
        items.push(item)
        res.redirect("/");
    }

})

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.post("/work", function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.get("/about", function(req,res){
    res.render("about")
})

app.listen(3000, function(){
    console.log("server started on port 3000")
})

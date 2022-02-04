
var url = require("http")
var ls = ""
url.get(process.argv[2],function(response){
    response.setEncoding("utf-8")

    response.on("error",function(err){
        console.log(console.error)})
    response.on("data",function(data){
        ls+=data})
    response.on("end",function(end){
        console.log(ls.length)  
        console.log(ls) 
        })   
})
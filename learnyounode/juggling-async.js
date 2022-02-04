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

//store the urls as array then iterate use the get method on each url
var url = require("http")
var list = []
var ls = ""
function getData(){
    for(let i = 0; i<3; i++){
        url.get(process.argv[2+i],function(response){
            response.setEncoding("utf-8")
            response.on("error",function(err){
                console.log(console.error)})
            response.on("data",function(data){
                list.push(data)})
            response.on("end",function(end){
                //console.log(ls.length)  
               // console.log(ls) 
                })   
        }) 
    }
    console.log(list[i])

}
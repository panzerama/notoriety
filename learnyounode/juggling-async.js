'use strict'
const http = require('http')
const bl = require('bl')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

let data1, data2, data3

http.get(url1, (response)=>{
    response.pipe(bl((err, data) => {
        if (err){return console.err(err)}
        data1 = data.toString()
        countDisplay()
    }))
})
http.get(url2, (response)=>{
    response.pipe(bl((err, data) => {
        if (err){return console.err(err)}
        data2 = data.toString()
        countDisplay()
    }))
})
http.get(url3, (response)=>{
    response.pipe(bl((err, data) => {
        if (err){return console.err(err)}
        data3 = data.toString()
        countDisplay()
    }))
})

function countDisplay(){
    if (data1 && data2 && data3){
        console.log(data1)
        console.log(data2)
        console.log(data3)
    }
}
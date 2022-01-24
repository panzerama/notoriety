'use strict'
const http = require('http')
const {BufferListStream} = require('bl')

http.get(process.argv[2], (response) => {
    response.pipe(BufferListStream((err, data) => {
        if (err){return console.err(err)}
        console.log(data.length)
        console.log(data.toString())
    }))
})


node -> mostly asynchronous -> accomplished with callback functions

asynchronous things -> talk to networks or hard drives

synchronous things -> access things in memory or do work on CPU

I/O is really slow! (so reading a file is asynchronous)

`==` -> comparing 2 variables, ignores data type

`===` -> comparing 2 variables, checks data type

Modules solution

Given:

```js
// make-it-modular.js
'use strict'
const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
    return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
    console.log(file)
    })
})

// mymodule.js
'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
    if (err) {
        return callback(err)
    }

    list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
    })
}
```

-> compare to mine

Is JS a functional language? OOP? Both? Neither? 

What is some context to help answer or even just understand this question?

HTTP Client solution:

```js
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)
```
'use strict'
const fs = require('fs')

function asyncFunction() {
   fs.readFile(process.argv[2], (err, fileContents) => {
      if (err) {console.log(err)}
      const str = fileContents.toString()
      const lines = str.split('\n')
      console.log(lines.length - 1)
   })
}

asyncFunction()
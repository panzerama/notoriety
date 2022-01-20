'use strict'

const fs = require('fs')
const buf = fs.readFileSync(process.argv[2])
const str = buf.toString()
const lines = str.split('\n')

console.log(lines.length - 1)

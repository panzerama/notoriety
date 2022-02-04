const fs = require("fs")
const  input = fs.readFileSync(process.argv[2])  
const lines = input.toString().split('\n').length - 1  
console.log(lines)
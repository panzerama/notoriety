const fs = require('fs')
const filePath = process.argv[2]

try {
    const data = fs.readFileSync(filePath, 'utf8').toString()
    console.log(data.split("\n").length - 1)
} catch (err) {
    console.error(err)
}
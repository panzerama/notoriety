let count = process.argv.length - 2
let sum = 0
for (let i = 0; i < count; i++) {
    sum += parseInt(process.argv[i + 2])
}
console.log(sum)

var count = 0

for(var i = 2; i < process.argv.length; i++ ){
    count += Number(process.argv[i])
}
console.log(count)

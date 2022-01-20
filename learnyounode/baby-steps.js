let numbers = process.argv
let sum = 0
for (let i = 2; i < numbers.length; i++){
   sum += Number(numbers[i])
}
console.log(sum)

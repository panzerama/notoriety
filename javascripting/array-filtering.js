const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const filtered = numbers.filter(function evenNumbers(numbers){
const filtered = numbers.filter(function(numberAny){
return (numberAny % 2 == 0)
})

console.log(filtered);

// output is [ 2, 4, 6, 8, 10 ]

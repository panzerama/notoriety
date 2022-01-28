
let array = process.argv;
let sum = 0;

for(let i = 2; i < array.length; i++){
sum += parseInt(array[i]);
}
console.log(sum);


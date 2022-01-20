let finalValue = 0;
for(let i = 2; i < process.argv.length; i++){
    finalValue += +process.argv[i];
}

console.log(finalValue);
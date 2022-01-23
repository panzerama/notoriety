var index = 2;
sum = 0;
while(process.argv[index]){
    sum = sum+ +process.argv[index];
    index++;
}
console.log(sum); 
var pets = ['cat', 'dogs', 'rat'];
for(let i = 0; i < pets.length; i++){
    pets[i] = pets[i] +'s';
    i++;
}
console.log(pets);
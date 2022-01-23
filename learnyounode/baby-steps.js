// Jeremy Ward AD320
// Learn you node solution
// Problem: 2 Baby Steps

var total = 0;
for (let i = 0; i < process.argv.length; i++) {
    if (i > 1) {
        total += Number(process.argv[i]);
    }
}
console.log(total);
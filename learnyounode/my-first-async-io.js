

/*const fs = require('fs'); // imported library
const file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data){
    if(err){
        return err
        }
    console.log(data);

}
*/


const fs = require('fs'); // imported library
let file = process.argv[2];

let x = fs.readFile(file, "utf8", function(err, data){
      if(err){
        return err
        }
        console.log(x.split("\n").length-1);
} );
const a = 1; 
const b = 2; 
const c = 3;  
       
     (function firstFunction () {  
       const b = 5; const c = 6;  
       
       (function secondFunction () {  
         const b = 8;
  
console.log(`a: ${a}, b: ${b}, c: ${c}`);       
         
(function thirdFunction () {  
           const a = 7; const c = 9;  
       
           (function fourthFunction () {  
             const a = 1; const c = 8;  
           })()  
         })()  
       })()  
     })()  
   
//console.log(`a: ${a}, b: ${b}, c: ${c}`);

//Use your knowledge of the variables' scope and place the following code  
//  inside one of the functions in scope.js so the output 
//a: 1, 
//b: 8, 
//c: 6

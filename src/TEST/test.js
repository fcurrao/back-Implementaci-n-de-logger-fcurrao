

//TEST 1 // VERIFICA SI SE PUEDE DESARROLLAR EN ESTE AMBIENTE :

process.env.USER="DEVELOPMENT"; 

(process.env.USER==="DEVELOPMENT") ? 
console.log("TEST 1: SUPERADO , El ambiente es Developer", true) 
:
console.log("TEST 1: RECHAZADO ! WARNING! ,  EL AMBIENTE NO ES DEVELOPER ! WARNING!  ", false);



//TEST 2 // OTRO
// console.log("TEST 2: RECHAZADO , se    ", true);
// console.log("TEST 2: SUPERADO , se    ", false);



//TEST 3 // OTRO
// console.log("TEST 3: RECHAZADO , se  ", true);
// console.log("TEST 3: SUPERADO , se  ", false);


//TEST 4 // OTRO
// console.log("TEST 4: RECHAZADO , se  correctamente", true);
// console.log("TEST 4: SUPERADO , se  correctamente", false);
 
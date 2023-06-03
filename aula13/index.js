let umaString = "Um texto";
console.log(umaString[4]); // e
console.log(umaString.indexOf('texto')); // 3
console.log(umaString.lastIndexOf('m', 3)); // 1

console.log(umaString.replace('Um', 'Outro')); // Outro texto

console.log(umaString.length); // 8

console.log(umaString.slice(3, 8)); // texto

console.log(umaString.split(' ')); // [ 'Um', 'texto' ]

console.log(umaString.toUpperCase()); // UM TEXTO

console.log(umaString.toLowerCase()); // um texto


let outraString = " Outro texto";
console.log(umaString.concat(outraString)); // Um texto Outro texto



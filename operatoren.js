// komplexe operationen
const a = 5;
const b = 8;
const div = 3;
const rest = ((a * b)/div)-3;
//console.log(rest);
// string konkatenieren:
 let str_1 = 'Alle lieben';
 let str_2 = 'Miracles';
 const res_str = str_1 +str_2;
 //console.log(res_str);
 //AUFg:
 let y = 10;
 let z = 2;
 let x = y/z;
 console.log(x); 
 y =20
 z=10
 x = (y/z)*4;
 console.log(x);
 var str_name = 'Emel';
 //console.log('Hallo' +' '+str_name + '?');
 let first = 'Joda';
 let sec = 'delacal';
 //console.log(first +' '+ sec +' \n how are u');
 console.log(`${first} ${sec} is a hero`); // Accent Grave, at the ^-Key, on shifted top
 
let temp_str = `${first} ${sec}`; // Accent Grave, at the ^-Key, on shifted top
first = 'Jaime';
console.log(temp_str);
function testing(strings,x = 2,y = 3){
    console.log(x,y);
    return x + y;
}

let out = testing`what are you saying ${x} that shit is ${y}`;
console.log(out);
let a = [];
a = [1,3,4,'5'];
console.log(a.length);
console.log(a[0]);
console.log(a[a.length-2]);
a.push(9,9);
console.log(a.length);
// Aufgaben
//erstelle array 1...10
function makeArray(){
    let a = [];

    for(i = 1; i <=100; i++){
        a.push(i);
    }    
    return a;
}
let b = makeArray();
// console.log(b);
// b.unshift(0);
// // b.splice(5,5);
// b.push(11);
console.log(b);
// if(b.includes(7)){
//     let index = b.indexOf(7);
//     console.log(`7 at index ${index}`);
// }
// if(b.includes(8.5)){
//     let index = b.indexOf(8.5);
//     console.log(`7 at index ${index}`);
// }
// let arr = [1,2,3,4,5,4,3,2];
 for (number of b){
     //console.log(number);
 }
//b.forEach((item,index)=>{console.log(`${item} is at position ${index}`)})
// Komplexe Datastructs

let k = new Set([1,2,3]);


k.add(8);
k.add(8);
console.log(k.has(8));
// Maps:
let klassen = new Map();
let list_1=['jaime','felix','tim'];
let list_2=['dillon','aruna','till'];
let list_3=['diggi','small','tupac'];
klassen.set(['1A',list_1]);
klassen.set(['2B',list_2]);
klassen.set(['3C',list_3]);
console.log(klassen);
for(let ids in list_1){
    console.log(`${list_1[ids]}`);
    // for (let kinder in klassen.get(klass)){
    //     console.log(`${kinder} geht`);
    // }
}
// Set of Programmlangjs:
var arr = ['PHP','Python','C','JS','HTML','CSS','C#'];
var p = new Set();
for (const l of arr) {
    p.add(l);
}
console.log(p);
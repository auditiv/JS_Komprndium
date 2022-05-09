// funktion soll Begrüssung in abh. 
//des Namen Parametern ausgeben
function hello(name = 'JAime'){
    console.log(`hi ${name} `);
}
hello('jaime');
hello('jorge');
hello('toncha');
// Addition
function add(a = 0, b = 0){
    return a + b;
}
//Substraktion
function sub(a = 0, b = 0){
    return a - b;
}

//Multiplikation
function mult(a = 0, b = 0){
    return a * b;
}
//Division
function div(a = 0, b = 0){
    return a * b;
}
// console.log(add(8,9));
// console.log(sub(19,4));
// console.log(mult(2,5));
// console.log(div(3));
// callback Funktionen:
function callback(){
    console.log('timeout');
}
// setTimeout(callback,3000);
// setTimeout((a = 9,b= 9)=>{console.log(a+b)},3000);

function sum_back(a,b,callback){
    sum = a + b;
    callback(a,b,sum);
}
function print(a,b,sum){
    console.log(`a:${a} b:${b} sum:${sum}`); 
}
sum_back(12,3,print);
sum_back(14,15,(a,b,sum)=>{console.log(`a:${a} b:${b} sum:${sum}`)});
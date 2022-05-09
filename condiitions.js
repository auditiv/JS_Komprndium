function div_neg(a,b){
    //function gibt in colole aus ob ergebnis 
    //der divisin pos/neg ist
let div = a/b;
if (div<0){//is negativ
    console.log('negativ');
}else{
    console.log('positiv');
}
}
(div_neg(6,9));
(div_neg(6,-9));
//function gitb aus ob Zhale 1...10 /2 oder /5 teilbar sind
function div_bar(value){
    let bool_2 = '';
    let bool_5 = '';


    if(value%5 === 0){
        bool_5 = 'durch5';
    }
    if(value%2 === 0){
        bool_2 = 'durch2';
    }
    switch(bool_2+bool_5){
        case 'durch2durch5':
            console.log(`Wert:${value} ist durch 2 und 5 teilbar `);
        break;

        case 'durch2':
            console.log(`Wert:${value} ist durch 2 und nicht durch 5 teilbar`);
        break;
        
        case 'durch5':
            console.log(`Wert:${value} ist nicht durch 2 aber durch 5 teilbar`);
        break;
        case '':
            console.log(`Wert:${value} ist weder durch 2 noch durch 5 teilbar`);
        break;


    }
}
div_bar(1);
div_bar(2);
div_bar(3);
div_bar(4);
div_bar(5);
div_bar(6);
div_bar(7);
div_bar(8);
div_bar(9);
div_bar(10);
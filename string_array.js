var test = ['a','b','c'];
var arrOfarr = [test,test,test];
//print letter after letter from string
function printer(start,string){
    var i = start;
    var len = string.length;
    while(i<len){
        console.log(string[i]);
        setTimeout(()=>{console.log('timeout!!!')},3000);
        i++;
        if(i>=len){
            i = 0;
            break;
        }

    }


}
for (const arr of arrOfarr) {
   
    
}
printer(3,'howareu');
// let i = 0;
// while(i<2){
//     setTimeout(()=>{console.log('hi')},2000);
//     i++;
// };
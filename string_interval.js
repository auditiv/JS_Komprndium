// WORKING WITH INTERVALLS
// > x
// 'abcdefghijklmnopqrstuvwxyz'
// > x.substring(2,7)
// 'cdefg'

var x;
var test = "abcdefghijklmnopqrstuvwxyz";

var count = 10;
var counterIncrement=-1;
var counter = setInterval(timer, 500); 

function timer() {
  count = count+counterIncrement;
  if (count == 0 || count == 20 ) {
        counterIncrement = -counterIncrement;
    }
  console.log(test.substring(count,6+count));
}
timer()
// t = 10;
// while(t > 0) {
//     t = timer();
// }
//printer(0,'howareu');
// let i = 0;
// while(i<2){
//     setTimeout(()=>{console.log('hi')},2000);
//     i++;
// };
//clearInterval(counter);
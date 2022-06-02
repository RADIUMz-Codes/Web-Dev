var num = 123;
var str1 = String(num);//implicit 
var str2 = num + '';// explicit
console.log(typeof str1, typeof str2);

var bool1 = Boolean(2);// explicit
if(2){}// implicit
if(!!2){}//implicit
if(2 || 'hello');//implicit
// If we convert any user defined data types to boolean its value becomes true


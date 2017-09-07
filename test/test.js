var a = ["a"];
var b = ["b"];
var c = a;
a = b;
console.log(c); 
console.log(a);


var o1 = {"1": "lol"};
var o2 = {"2": "lol"};

var o3 = Object.assign(o1,o2);
console.log(o1);
console.log(o3);

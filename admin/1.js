// let a =3;
// let b= new Number(3)
// let c = new String(3)
// let d=b
// console.log(a == b);
// console.log(a === b);
// console.log(a == c);
// console.log(+b === d++);

var a= 10;
var b =foo() //40
var c =a + b

setTimeout(function () {
  console.log(b);
},0)

console.log(c); //50

new Promise((resolve , reject)=>{
  reject (a+b)
  resolve(c+a)
  console.log('promise.log');
}).then(function (result) {
  c=result
  console.log('resolve');
}).catch(function (error) {
  b=error
  console.log('reject');
})

console.log(a + b + c);

function foo() {
  let b = 30
  return a+b
}
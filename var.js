function fun() {
    console.log(x);
    var x = 10;

}
// console.log(x);

{
    var y = 9;
    console.log(y);
}

if (true) {
    var z = 10;

}
if (false) {
    var a = 20;
}
console.log(a);
fun();
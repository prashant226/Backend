//function has an argument to another function()//
function fun() {
    console.log("fun called");
}

function gun(fn) {
    console.log("inside gun");
    fn();
    console.log("leaving gun");

}
gun(function() {
    console.log("new function passed");
});

gun(fun);
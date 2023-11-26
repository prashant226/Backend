var counter = 1;

function printCounter() {
    console.clear()
    console.log(counter);
    counter = counter + 1;
}

setInterval(printCounter, 1000)



var counter1 = 0;
for (var i = 0; i < 10000; i++) {
    counter1 = counter1 + 1;

}
console.log(counter1);
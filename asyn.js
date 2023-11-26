// let fileContent = readFile("a.txt", function(contents) {
//     console.log(contents);
// });
// console.log("hi there");

function printToScreen() {
    console.log("hello world");
}
setTimeout(printToScreen, 5 * 1000);



var counter = 0;
for (var i = 0; i < 1000; i++) {
    counter = counter + 1;
}
console.log(counter);
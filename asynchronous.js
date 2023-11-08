const fs = require('fs');

function sum(n) {
    let sum = 0;
    for (var i = 0; i < n; i++) {
        sum += i;
    }
    console.log(sum);
}

function FileisRead(err, contents) {
    if (err) {
        console.log("error");
    }
    sum(contents);
}

fs.readFile("chocolate.txt", 'utf8', FileisRead) //passing FileisRead as a callback//

sum(100);
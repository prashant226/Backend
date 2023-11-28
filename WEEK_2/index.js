// const fs = require("fs");
// /** fs is the external libray which reads from file*/
// const express = require("express");

// function callbackfn(err, data) {
//     console.log(data);
// }
// fs.readFile("a.txt", "utf-8", callbackfn);
// var express = require("express");

// var app = express();

function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i < counter; i++) {
        sum = sum + i;
    }
    return sum;
}



/**express code in beginning  */
const express = require('express')
const app = express()
const port = 3000;

function handleFirstRequest(req, res) {
    var calculatedSum = calculateSum(100);
    console.log(calculatedSum);
    var answer = "the sum is   " + calculatedSum;
    res.send(answer);
}
app.get('/', handleFirstRequest)


function started() {
    console.log(`example app listening on port ${port}`);
}

app.listen(port, started)
    /**express code in the end */
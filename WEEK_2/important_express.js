// const fs = require("fs");
// /** fs is the external libray which reads from file*/
// const express = require("express");

// function callbackfn(err, data) {
//     console.log(data);
// }
// fs.readFile("a.txt", "utf-8", callbackfn);
// var express = require("express");

// var app = express();
const express = require('express')
const app = express()
const port = 3000;


function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

app.use(middleWare); //a way to register a middleware

function middleWare(req, res, next) {
    console.log("from inside middleware " + req.headers.counter);
    res.send("error is present");
}



/**express code in beginning  */


/**req-->request
 * res-->response
 */

function handleFirstRequest(req, res) {
    // var counter = req.query.counter;
    console.log(req.headers);
    var counter = req.headers.counter;
    var calculatedSum = calculateSum(counter);
    // console.log(calculatedSum);
    var answer = "the sum is   " + calculatedSum;
    res.send(answer);
}


function CreateUser(req, res) {
    res.send("hello world!");
}
// app.get('/handleSum', handleFirstRequest)
/**app.get('/:username', handleFirstRequest)
 * here user_name acts a wildcard which means you can send anything in the route
 */
app.post('/handleSum', handleFirstRequest)
    /**handleSum is the ROUTE */


function started() {
    console.log(`example app listening on port ${port}`);
}

app.listen(port, started)
    /**express code in the end */
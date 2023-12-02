// var sendObj = {
//     method: "POST"
// };
function logResponse(jsonBody) {
    console.log(jsonBody);
}

function callback(result) {
    result.json().then(logResponse)
}


fetch("https://localhost:3000/handleSum", sendObj).then(callback)

/** once the task is then call .then()  */
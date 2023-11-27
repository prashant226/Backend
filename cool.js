const fs = required('fs');

function callback(err, data) {
    console.log(data);
}

fs.readFile('a.txt', 'utf-8', callback);
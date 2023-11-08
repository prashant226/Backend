function complex(n) {
    let sum = 0;
    for (var i = 0; i < n; i++) {
        sum += i;

    }
    return sum;
}

var startTime = new Date().getTime();
const a = complex(10000000 / 2);
// const b = complex(1000000 / 2);
console.log(a);

var endTime = new Date().getTime();
console.log((endTime - startTime) / 10000)


// asynchronous nature

var d = readFromAFile() //blocker
complex(a);
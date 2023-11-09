console.log(1 + "1")
console.log("1" - 10); // -9
console.log(1 - "hello"); //NaN
console.log(10 - { "a": 10, valueOf() { return 8; } })
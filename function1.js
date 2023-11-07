function sumAll(startindex, endingindex) {
    var sum = 0;
    for (
        var i = startindex; i <= endingindex; i++) {
        sum += i;

    }
    return sum
}
var sum = sumAll(1, 20);
console.log(sum);
function sum(index1, index2) {
    return index1 + index2;

}

function mul(index1, index2) {
    return index1 * index2;
}
var ans = mul(1, 2)
console.log(ans);

function divide(index1, index2) {
    return index1 / index2;
}

function doarithmetic(firstEl, sedcondEl, whatToDo) {
    if (whatToDo === 'sum') {
        var answer = sum(firstEl, sedcondEl)
        return answer;
    }
    if (whatToDo === 'mul') {
        var answer1 = mul(firstEl, sedcondEl)
        return answer;
    }
}

var answer = doarithmetic(1, 2, 'sum');
console.log(answer)
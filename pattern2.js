function starryPattern(n) {
    var answer1 = "";
    for (var i = 0; i < n; i++) {
        answer1 = answer1 + '**';
    }
    console.log(answer1);

}

function star(n) {
    for (var i = 0; i <= n; i++) {
        starryPattern(i);
    }
}
var answer1 = star(10);
console.log(answer1);








// var ans = starryPattern(5)
// console.log(ans);

//   *
//  **
// ***
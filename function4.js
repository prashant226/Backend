/// Hollow Str Fucntion///
function star(n) {
    var str = "";
    str += "*";
    for (var i = 0; i < n - 2; i++) {
        str = str + " ";
    }
    str = str + "*";
    console.log(str);

}


function printSingleRow(n) {
    var str = "";
    for (var i = 0; i < n; i++) {
        str = str + "*";

    }
    console.log(str);

}

function printWholeStuff(n) {
    printSingleRow(n);
    for (var i = 0; i < n - 2; i++) {
        star(n);
    }
    printSingleRow(n);
}

printWholeStuff(5);

// const ans = ;
// console.log(ans);
// const ans1 = star(5);
// console.log(ans1);
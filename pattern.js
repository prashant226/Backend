function createPattern(numberOfRows) {
    for (var i = 0; i < numberOfRows; i++) {
        var stringToPrint = "";
        for (var j = 0; j < i + 1; j++) {
            stringToPrint = stringToPrint + "*"
        }
        console.log(stringToPrint)
    }
}

createPattern(10);
// 1 , *
//2 ,  * **
//3 ,  * ** ***
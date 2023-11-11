var teacher = "prashant";

function fun() {
    var teacher = "pulkit";
    teachingassisstant = "vibhav";
    console.log(teacher);
    console.log(teachingassisstant)
}


console.log(teacher);
console.log(teachingassisstant)
fun();

/**
 * fun wil be in a global scope because it is niether inside a block or a function.
 * the moment we go in a function we maintain a new scope as well that is function scope.
 * in fun() teacher will get scope of function fun().
 */

/**
 * here for the variable teachingassisstant it does not have any let ,var, and const so teachingassissant will get global scope.[AUTO-GLOBALS PHENOMENON AND IT ALWAYS HAPPENS IN EXECUTION PHASE]
 */
var teacher = "prashant";

function fun() {
    console.log(subject)
    var teacher = "pulkit";
    var subject = "javascript";

    console.log(teachingassisstant) /**before making auto-global so we are getting an error */

    teachingassisstant = "vibhav";
    console.log(teacher);
}

fun();
console.log(teacher);
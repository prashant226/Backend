var teacher = 'sanket';

function fun() {
    var teacher = 'pulkit';
    teachingassistant = 'vibhav'; //elgible autoglobal
    console.log(teacher, teachingassistant);
}

function gun() {
    console.log(subject);
    var subject = 'hindi';
    console.log(teacher);
}
console.log(teacher);
fun();
gun();
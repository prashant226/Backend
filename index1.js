// array of objects
var users = [{
    name: 'harkirat',
    age: 21,
}, {
    name: 'smarth',
    age: 21,
}, {
    name: 'vas',
    age: 21,
}];
// console.log(users);
// console.log(users[0]);


for (var i = 0; i < users.length; i++) {
    console.log(users[i].name + "'s age is " + users[i].age);
}
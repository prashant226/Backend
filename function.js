function printAllUsers(users) {
    for (var i = 0; i < users.length; i++) {
        console.log(users[i].name + "'s age is " + users[i].age);
    }
}





////////
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

printAllUsers(users);

// printing if 20 time : we can use Functions
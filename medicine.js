/**PROMISES */

// function medicineGet() {
// var ans = new Promise(function(resolve) {
//         setTimeout(resolve, 1000);
//     })
// console.log("medicine 1 received");
//     var ans = "harkirat";
//     return ans;
// }

// var medicine = medicineGet();
// console.log(medicine);

// function a() {
//     console.log("hi");
// }
// var harkirat = {
//     name: a,
// }
// a();

// medicineGet().then(function() {
//     console.log("medicine 1 received");
// })


var user1 = {
    name: "harkirat",
    age: 21,
    LegalAgeToDrive: function() {
        if (user1.age < 21) {
            return false;
        } else {
            return true;
        }
    }
}
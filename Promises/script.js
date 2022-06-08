
var userLoggedIn = false;

// wrapping promise in a function for clarity
function checkUserLoggedIn() {
    var promise = new Promise(function (resolve, reject) {
        // Wait for 1 sec
        setTimeout(() => {
            // Promise resolved 
            if (userLoggedIn) {
                resolve("User logged in");
            } else {
                reject("Failed to login");
            }
        }, 1000);
    });
    return promise;
}
setTimeout(() => { userLoggedIn = !userLoggedIn; }, 500);

checkUserLoggedIn().then((successMessage) => {
    console.log(successMessage);
}).catch((failureMessage) => {
    console.log(failureMessage);
});
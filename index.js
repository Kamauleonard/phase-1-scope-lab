// Solution 1
var customerName;

customerName = 'bob';

// Solution 2
function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}
// Solution 3
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Solution 4
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Solution 5
const leastFavoriteCustomer = 'bob'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Alex';
}
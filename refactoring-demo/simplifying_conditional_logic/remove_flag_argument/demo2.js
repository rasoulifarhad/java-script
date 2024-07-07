// A flag argument is a function argument that the caller uses to 
// indicate which logic the called function should execute.
function bookConcert(aCustomer, isPremium) {
    if(isPremium) {

    } else {

    }
}

function premiumBookConcert(aCustomer) {

}

function regularBookConcert(aCustomer) {

}

const aCustomer = {};
bookConcert(aCustomer, true);
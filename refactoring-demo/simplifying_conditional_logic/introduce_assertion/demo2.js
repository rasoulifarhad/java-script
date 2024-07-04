class Customer {

    constructor(_discountRate) {
        this.discountRate = _discountRate;
    }

    applyDiscount(aNumber) {
        if(!this.discountRate) {
            return aNumber;
        } else {
            return aNumber - (this.discountRate * aNumber);
        }
    }
}
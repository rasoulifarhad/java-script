class Customer {

    constructor(_discountRate) {
        this.discountRate = _discountRate;
    }

    applyDiscount(aNumber) {
        if(!this.discountRate) {
            return aNumber;
        } else {
            assert(this.discountRate >= 0);
            return aNumber - (this.discountRate * aNumber);
        }
    }
}
class Customer {

    constructor(_discountRate) {
        this.discountRate = _discountRate;
    }

    applyDiscount(aNumber) {
        return (this.discountRate)
            ? aNumber - (this.discountRate * aNumber)
            : aNumber;
    }
}
class ChargeCalculator {
    constructor(customer, usage, provider) {
    }

    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculator().charge(customer, usage, provider);
}


monthCharge = charge(customer, usage, provider);


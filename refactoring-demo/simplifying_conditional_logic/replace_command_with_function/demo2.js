class ChargeCalculator {
    constructor(customer, usage, provider) {
        this._usage = usage;
        this._provider = provider;
    }

    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculator().charge(customer, usage, provider);
}


monthCharge = charge(customer, usage, provider);


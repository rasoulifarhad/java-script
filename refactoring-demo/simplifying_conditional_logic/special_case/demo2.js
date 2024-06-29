class Site{
    get customer() {
        return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {

    get name() {

    }

    get billingPlan() {

    }

    set billingPlan(arg) {

    }

    get paymentHistory() {

    }

    get isUnknown() { 
        return false;
    }
}

class UnknownCustomer {
    get isUnknown() { 
        return true;
    }

    get name() {
        return "occupant";
    }

    get billingPlan() {
        return registry.billingPlans.basic;
    }
}

function isUnknown(arg) {
    if( !((arg instanceof Customer) || (arg instanceof UnknownCustomer)) ) {
        throw new Error(`investigate bad value: <${arg}>`);
    }
    return arg.isUnknown;
}

function client1() {
    const aCustomer = site.customer;
    let customerName = aCustomer.name;
}

function client2() {
    const plan = aCustomer.billingPlan;
}

function client3() {
    if (!isUnknown(aCustomer)) {
        aCustomer.billingPlan = newPlan;
    }
}


function client4(){
    const weeksDelinquent = (isUnknown(aCustomer)) ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
class Site{
    get customer() {
        return this._customer;
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

function client1() {
    const aCustomer = site.customer;
    let customerName;
    if(aCustomer === "unknown") {
        customerName = "occupant";
    } else {
        customerName = aCustomer.name;
    }
}

function client2() {
    const plan = (aCustomer === "unknown") ? 
        registry.billingPlans.basic :
        aCustomer.billingPlan;
}

function client3() {
    if (aCustomer != "unknown") {
        aCustomer.billingPlan = newPlan;
    }
}


function client4(){
    const weeksDelinquent = (aCustomer === "unknown") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
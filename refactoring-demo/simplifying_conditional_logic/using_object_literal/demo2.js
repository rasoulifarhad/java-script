class Site {

    constructor(customer) {
        this._customer = customer;
    }

    get customer() {
        return (this._customer === "unknown") ? createUnknownCustomer() : this._customer ;
    }
}

class Customer {

    constructor(name){
        this.name = name;
        this.billingPlan = new BillingPlan();
        this.paymentHistory = new PaymentHistory();
    }

    get name() {
        return this.name;
    }

    get billingPlan() {
        return this.billingPlan;;
    }

    set billingPlan(arg) {
        this.billingPlan = arg;
    }

    get paymentHistory() {
        return this.paymentHistory;
    }

    get isUnknown() {
        return false;
    }
}

class PaymentHistory {
    get weeksDelinquentInLastYear() {
        return 10;
    }
}

class BillingPlan {

}

function createUnknownCustomer() {
    return {
        isUnknown: true,
    };
}

function isUnknown(arg)  {
    return arg === "unknown";
}

function client1() {
    const site = new Site(new Customer("boy"));
    const aCustomer = site.customer;


    let customerName;
    if(isUnknown(aCustomer)) {
        customerName = "occupant";
    } else {
        customerName = aCustomer.name;
    }
}

function client2() {
    const site = new Site(new Customer("boy"));
    const aCustomer = site.customer;


    const plan = (isUnknown(aCustomer)) ?
                registry.billingPlans.basic
                : aCustomer.billingPlan;
}

function client3() {
    const site = new Site(new Customer("boy"));
    const aCustomer = site.customer;


    const weeksDelinquent = (isUnknown(aCustomer)) ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
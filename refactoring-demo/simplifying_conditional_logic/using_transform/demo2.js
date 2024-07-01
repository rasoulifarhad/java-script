class Site {

    constructor(customer) {
        this._customer = customer;
    }

    get customer() {
        return this._customer;
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
}

class PaymentHistory {
    get weeksDelinquentInLastYear() {
        return 10;
    }
}

class BillingPlan {

}

record = {
    name: "Acme Boston",
    location: "Malden MA",
    // more site details
    customer: {
        name: "Acme Industries",
        billingPlan: "plan­451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7
            //more
        },
        // more
    }
}

unknownRecord =  {
    name: "Warehouse Unit 15",
    location: "Malden MA",
    // more site details
    customer: "unknown",
}


function enrichSite(inputSite) {
    const result =  _.cloneDeep(inputSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "occupant",
    };

    if(isUnknown(result.customer)) {
        result.customer = unknownCustomer;
    } else {
        result.customer.isUnknown = false;
    }
    return result;
}

function isUnknown(aCustomer) {
    return (aCustomer === "unknown") ? true : aCustomer.isUnknown;
}

function client1(params) {
    const rawSite = acquireSiteData();
    const site = enrichSite(rawSite);
    const aCustomer = site.customer;


    let customerName = aCustomer.name;
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

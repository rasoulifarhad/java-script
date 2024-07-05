class PaymentProcessor {

    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount) {
        this.paymentMethod.processPayment(amount);
    }
}

class PaymentMethod {

    constructor() {
        if(this.constructor.name === 'PaymentMethod') {
            throw new Error('PaymentMethod class is abstract and cannot be instantiated. Please use one of its subclasses.');
        }
    }

    processPayment(amount) {

    }
}


class CreditCardPayment extends PaymentMethod {

    constructor(cardData) {
        super();
        this.cardData = cardData;
    }

    processPayment(amount) {

    }
}

class EWalletPayment extends PaymentMethod {

    constructor(data) {
        super();
        this.data = data;
    }

    processPayment(amount) {

    }
}

const cardData = {};
const creditCardProcessor = new PaymentProcessor(new CreditCardPayment(cardData));


class Coder {

    constructor(fullName, language, hobby, education, workplace, position) {
        this.fullName = fullName;
        this.language = language;
        this.hobby = hobby;
        this.education = education;
        this.workplace = workplace;
        this.position = position;
    }
}

const filterByProp = (array, propName, value) => 
    array.filter(element => element[propName] === value);



var coders = [];
coders.push(new Coder("foo", "java", "coding", "bachelor", "google","developer"));
console.log(filterByProp(coders, "fullName", "foo"));

class ManageSalaries {

    constructor() {
        this.salaryRates = [
            {id: 1, role: 'developer', rate: 100},
            {id: 2, role: 'architect', rate: 200},
            {id: 3, role: 'manager', rate: 300},
        ];
    }

    calculateSalaries(empId, hoursWorked) {
        let salaryRate = this.salaryRates.find(s => s.id === empId);
        return hoursWorked * salaryRate;
    }

    addSalaryRate(id, role, rate) {
        this.salaryRates.push({id: id, role: role, rate: rate});
    }

}

const manageSalaries = new ManageSalaries();
manageSalaries.addSalaryRate(4, 's_developer', 250);
console.log('Salary: ', manageSalaries.calculateSalaries(4, 100));
class PaymentProcessor {

    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount) {
        this.paymentMethod.processPayment(amount);
    }
}

class PaymentMethod {
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
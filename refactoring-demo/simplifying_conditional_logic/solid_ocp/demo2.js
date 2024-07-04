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
        this.cardData = cardData;
    }

    processPayment(amount) {

    }
}

class EWalletPayment extends PaymentMethod {

    constructor(data) {
        this.data = data;
    }

    processPayment(amount) {

    }
}

const cardData = {

};
const creditCardProcessor = new PaymentProcessor(new CreditCardPayment(cardData));
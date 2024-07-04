class PaymentProcessor {
    processCreditCardPayment(cardDetail, amount) {
        // Credit card payment logic
    }
}

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

class CoderFilter {

    filterByName(coders, fullName) {
        return coders.filter(coder => coder.fullName === fullName)
    }

    filterBySize(coders, language) {
        return coders.filter(coder => coder.language === language);
    }

    filterByHobby(coders, hobby) {
        return coders.filter(coder => coder.hobby === hobby);
    }
}

var coders = [];
coders.push(new Coder("foo", "java", "coding", "bachelor", "google","developer"));
var coderFilter = new CoderFilter();
console.log(coderFilter.filterByName(coders, "foo"));
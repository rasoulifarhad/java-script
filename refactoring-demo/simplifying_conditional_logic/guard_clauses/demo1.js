function payAmount(employee) {
    let result;
    if(employee.isSeperated) {
        result = {amount:0, reasonCode:"SEP"};
    } else {
        if(employee.isRetired) {
            result = {amount: 0, reasonCode: "RET"};
        } else {
            // logic to compute amount
            lorem.ipsum(dolor.sitAmet);
            consectetur(adipiscing).elit();
            sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }
    return result;
}
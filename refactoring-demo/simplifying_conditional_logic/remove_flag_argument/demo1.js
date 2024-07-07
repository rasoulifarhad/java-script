// A flag argument is a function argument that the caller uses to 
// indicate which logic the called function should execute.
function bookConcert(aCustomer, isPremium) {
    if(isPremium) {

    } else {

    }
}

const aCustomer = {};
bookConcert(aCustomer, true);


function deliveryDate(anOrder, isRush) {
    if (isRush) {
        let deliveryTime;
        if (["MA", "CT"].includes(anOrder.deliveryState)) {
            deliveryTime = 1;
        } else if (["NY", "NH"].includes(anOrder.deliveryState)) {
            deliveryTime = 2;
        } else {
            deliveryTime = 3;
        }
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    } else {
        let deliveryTime;
        if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) {
            deliveryTime = 2;
        } else if (["ME", "NH"] .includes(anOrder.deliveryState)) {
            deliveryTime = 3;
        } else {
            deliveryTime = 4;
        }
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }    
}

const anOeder = {};
const aShipment = {};
aShipment.deliveryDate = deliveryDate(anOrder, true);
aShipment.deliveryDate = deliveryDate(anOrder, false);
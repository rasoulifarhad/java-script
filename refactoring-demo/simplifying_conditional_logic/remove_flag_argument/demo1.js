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
        anOrder.placedOn.setDate(anOrder.placedOn.getDate() + (1 + deliveryTime));
    } else {
        let deliveryTime;
        if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) {
            deliveryTime = 2;
        } else if (["ME", "NH"] .includes(anOrder.deliveryState)) {
            deliveryTime = 3;
        } else {
            deliveryTime = 4;
        }
        anOrder.placedOn.setDate(anOrder.placedOn.getDate() + (2 + deliveryTime));
    }  
    return anOrder.placedOn;
  
}

const anOrder = {
    deliveryState: "NY",
    placedOn: new Date(),
};
const aShipment = {};
aShipment.deliveryDate = deliveryDate(anOrder, true);
console.log(aShipment.deliveryDate.toISOString());
aShipment.deliveryDate = deliveryDate(anOrder, false);
console.log(aShipment.deliveryDate.toISOString());
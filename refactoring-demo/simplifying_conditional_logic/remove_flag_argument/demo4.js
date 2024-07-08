function deliveryDateHelperOnly(anOrder, isRush) {
    let result;
    let deliveryTime;
    if (anOrder.deliveryState === "MA" || anOrder.deliveryState === "CT") {
        deliveryTime = isRush? 1 : 2;
    } else if (anOrder.deliveryState === "NY" || anOrder.deliveryState === "NH") {
        deliveryTime = 2;
        if (anOrder.deliveryState === "NH" && !isRush) {
            deliveryTime = 3;
        }
    } else if (isRush) {
        deliveryTime = 3;
    } else if (anOrder.deliveryState === "ME") {
        deliveryTime = 3;
    } else {
        deliveryTime = 4;
    }
    anOrder.placedOn.setDate(anOrder.placedOn.getDate() + (2 + deliveryTime));
    result = anOrder.placedOn;
    if (isRush) { 
        result.setDate(result.getDate() - 1);
    }
    return result;
}

function rushDeliveryDate(anOrder) {
    return deliveryDateHelperOnly(anOrder, true);
}

function regularDeliveryDate(anOrder) {
    return deliveryDateHelperOnly(anOrder, false);
}

const anOrder = {
    deliveryState: "NY",
    placedOn: new Date(),
};
const aShipment = {};
aShipment.deliveryDate = rushDeliveryDate(anOrder);
console.log(aShipment.deliveryDate.toISOString());
aShipment.deliveryDate = regularDeliveryDate(anOrder);
console.log(aShipment.deliveryDate.toISOString());
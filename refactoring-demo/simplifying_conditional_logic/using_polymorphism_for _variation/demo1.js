function raiting(voyage, history) {
    const vpf = voyagePrifitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = capitalHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) {
        return "A";
    }
    return "B";
}

function voyageRisk(voyage) {
    let result = 1;
    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length  - 8;
    if (["china", "east­indies"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
}

function capitalHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) result += 4;
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === "china" && hasChina(history)) result -= 2;
    return Math.max(result, 0);
}

function hasChina(history) {
    return history.some(v => "china" === v.zone);
}

function voyagePrifitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === "china") result += 1;
    if (voyage.zone === "east­indies") result += 1;
    if (voyage.zone === "china" && hasChina(history)) {
        result += 3;
        if (history.length > 10) result += 1;
        if (voyage.length > 12) result += 1;
        if (voyage.length > 18) result  -= 1;
    }
    else {
        if (history.length > 8) result += 1;
        if (voyage.length > 14) result  -= 1;
    }
    return result;        
}


function main() {
    const voyage = {zone: "west-indies", length: 10};
    const history = [
        {zone: "east-indies", profit: 5},
        {zone: "west-indies", profit: 15},
        {zone: "china", profit: -2},
        {zone: "west-africa", profit: 7},
    ];
    const myRating = rating(voyage, history);
}
function someLogic (arg) {
    if(arg < 5) return "low";
    else if(age < 15) return "medium";
    else return "HIGH";
}


function logicWithPicker(arg) {
    const range = [
        [5, "low"],
        [15, "medium"],
        [infinity, "high"]
    ];
    return pickFromRange(range, arg);
}

function pickFromRange(range, value) {
    const matchIndex = range.findIndex((r) => value < r[0]);
    return range[matchIndex][1];
}
function alertForMiscreant(people) {
    if(findMiscreant(people) !== "") {
        setOffAlarms();
    }
}

function findMiscreant(people) {
    for(const p of people) {
        if(p === "Don") {
            return "Don";            
        }
        if(p === "John") {
            return "John";            
        }
    }
    return "";
}

const found = findMiscreant(people);
alertForMiscreant(people);
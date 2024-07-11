function random(seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
        return (s = (s * a) % m) / m;
    };
}

let rng = random(12345);
console.log(rng());
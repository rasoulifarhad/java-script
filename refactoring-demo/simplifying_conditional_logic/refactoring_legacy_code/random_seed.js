function random(seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
        return (s = (s * a) % m) / m;
    };
}
for (let index = 0; index < 10; index++) {
    let s = 12345;
    let rng = random( s * index);  
    console.log(" Seed: " + (s * index));
    console.log((Math.floor(rng() * 6)) + 1);
    console.log((Math.floor(rng() * 6)) + 1);
    console.log((Math.floor(rng() * 6)) + 1);
    console.log((Math.floor(rng() * 6)) + 1);
}



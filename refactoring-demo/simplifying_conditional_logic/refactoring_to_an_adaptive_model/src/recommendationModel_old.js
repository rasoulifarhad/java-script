let model;
model =  [
    {
        condition: (spec) => spec.atNight,
        result: "whispering death"
    },
    {
        condition: (spec) => spec.seasons && spec.seasons.includes("winter"),
        result: "beefy"
    }
];

const getModel = () => {
    return model;
}

module.exports = {getModel}

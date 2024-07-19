const fs =  require('fs');

let model;

const  loadJson = ( ) => {
    model = JSON.parse(fs.readFileSync('recommendationModel.json', {encoding: 'utf8'}));
}

// loadJson caled at some point during application initialization. 
// this module can have a default export function, which suits its usage after initialization.

const getModel = () => {
    return model;
}

module.exports = {loadJson, getModel}


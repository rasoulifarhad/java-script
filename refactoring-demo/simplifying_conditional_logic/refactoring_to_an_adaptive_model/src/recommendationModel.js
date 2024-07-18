import fs from 'fs';

let model;

export function loadJson() {
    model = JSON.parse(fs.readFileSync('recommendationModel.json', {encoding: 'utf8'}));
}

// loadJson caled at some point during application initialization. 
// this module can have a default export function, which suits its usage after initialization.
export default function getModel() {
    return model;
}
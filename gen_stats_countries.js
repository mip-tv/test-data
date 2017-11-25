'use strict';

const gen = require('./genesis');

let dummyData = {};

let sum = 0;
let parts = [];
let shares = [];
let color = [];
let labels = ["Land A","Land B","Land C","Land D","Land E","Land F","Land G","Land H","Land I","Land J","Land K","Land L","Land M","Land N","Land O","Land P","Land Q","Land R","Land S","Land T"];

for(let i = 0; i<20; i++) {
    parts[i] = Math.floor(Math.random()*100);
    sum += parts[i];
}
for(let i = 0; i<20; i++) {
    shares[i] = parts[i]/sum;
    color.push(gen.color());
}

dummyData.data = shares;
dummyData.color = color;
dummyData.labels = labels;

console.log(JSON.stringify(dummyData));

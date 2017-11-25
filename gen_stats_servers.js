'use strict';

const gen = require('./genesis');

let dummyData = {};

dummyData.dataPoints = [];
for(let i = 0; i < 60; i++) {
    dummyData.dataPoints.push({timestamp: gen.time(), serversVisited: gen.counter()});
}

console.log(JSON.stringify(dummyData));

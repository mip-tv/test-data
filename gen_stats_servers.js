'use strict';

const gen = require('./genesis');

let dummyData = {};

dummyData.dataPoints = [];

let lastCount = 0;
let lastTimestamp = 1511612600;

for(let i = 0; i < 60; i++) {
    dummyData.dataPoints.push({timestamp: lastTimestamp, serversVisited: lastCount});
    lastTimestamp += Math.floor(Math.random()*3000);
    lastCount += Math.floor(Math.random()*400);
}

console.log(JSON.stringify(dummyData));

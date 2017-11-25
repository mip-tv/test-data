'use strict';

const gen = require('./genesis');

let dummyData = {};

dummyData.day = "2017-11-25";
dummyData.entries = [];
for(let i = 0; i < 50; i++) {
    dummyData.entries.push({ip: gen.ip(), timestamp: gen.time(), uri: gen.uri()});
}

console.log(JSON.stringify(dummyData));

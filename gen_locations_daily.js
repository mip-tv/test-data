'use strict';

const gen = require('./genesis');

let dummyData = {};

dummyData.day = "2017-11-25";
dummyData.locations = [];
for(let i = 0; i < 100; i++) {
    dummyData.locations.push({lat: gen.lat(), long: gen.long()});
}

console.log(JSON.stringify(dummyData));

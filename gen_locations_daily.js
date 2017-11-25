'use strict';

let dummyData = {};

dummyData.day = "2017-11-25";
dummyData.locations = [];
for(let i = 0; i < 100; i++) {
    let lat = Math.floor((Math.random()*180-90)*1000000)/1000000;
    let long = Math.floor((Math.random()*360-180)*1000000)/1000000;
    dummyData.locations.push({lat: lat, long: long});
}

console.log(JSON.stringify(dummyData));

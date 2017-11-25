'use strict';

const gen = require('./genesis');

let dummyData = {};

dummyData.dataPoints = [];

let lastCount = 0;
let lastTimestamp = 1401612600;

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date ;
  return time;
}

for(let i = 0; i < 60; i++) {
    dummyData.dataPoints.push({date: timeConverter(lastTimestamp), serversVisited: lastCount});
    lastTimestamp += 3600*24;
    lastCount += Math.floor(Math.random()*5000);
}

console.log(JSON.stringify(dummyData));

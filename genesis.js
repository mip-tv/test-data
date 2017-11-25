'use strict';

module.exports = {
    long: () => {
        return Math.floor((Math.random()*360-180)*1000000)/1000000;
    },
    lat: () => {
        return Math.floor((Math.random()*180-90)*1000000)/1000000;
    },
    uri: () => {
        return "image:https://mate-ist-toll.org/"+(Math.floor(Math.random()*(3483948394-1000000))+1000000).toString();
    },
    ip: () => {
        return (Math.floor(Math.random()*(254-2))+2).toString()
                +"."+(Math.floor(Math.random()*(254-2))+2).toString()
                +"."+(Math.floor(Math.random()*(254-2))+2).toString()
                +"."+(Math.floor(Math.random()*(254-2))+2).toString();
    },
    time: () => {
        return Date.now() - Math.floor(Math.random()*437431344);
    },
    counter: () => {
        return Math.floor(Math.random()*(10000-500))+500;
    },
    color: () => {
        let r = Math.floor(Math.random()*255).toString(16);
        let g = Math.floor(Math.random()*255).toString(16);
        let b = Math.floor(Math.random()*255).toString(16);
        return "#".concat(r,g,b);
    }
};

'use strict';

module.exports = {
    long: () => {
        return Math.floor((Math.random()*360-180)*1000000)/1000000;
    },
    lat: () => {
        return Math.floor((Math.random()*180-90)*1000000)/1000000;
    }
};

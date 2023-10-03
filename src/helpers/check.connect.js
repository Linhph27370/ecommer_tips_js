'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

//count Connect
const countConnect = () =>{
    const numConnection = mongoose.connections.length
    console.log(`Number of conections:: ${numConnection}`);
}

// check over load

const checkOverLoad = () =>{
    setInterval( () =>{
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        //Exxample maximim number of connections based one number osf cores
        const maxConnections = numCores * 5;
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024 } MB`);
        console.log(`Active connection: ${numConnection}`);
        if(numConnection > maxConnections){
            console.log(`Connection overload detected `)
        }
    },_SECONDS)
}
module.exports = {
    countConnect,
    checkOverLoad
}
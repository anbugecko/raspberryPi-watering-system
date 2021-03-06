// will only use ES6..
"use strict";

// can we resolve module 'onoff'?
try {
    console.log(require.resolve('onoff'));
} catch (e) {
    console.error('onoff is not found');
    process.exit(e);
}

try {
    console.log(require.resolve('mqtt'));
} catch (e) {
    console.error('mqtt is not found');
    process.exit(e);
}

// load module in scope..
const Gpio = require('onoff').Gpio;
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.3')

// properties to define GPIO pin for pumps and sensors
const plantA = {
    name: "Plant A",
    pump: new Gpio(2, 'out'),
    sensor: new Gpio(14, 'in')
};

const plantB = {
    name: "Plant B",
    pump: new Gpio(3, 'out'),
    sensor: new Gpio(15, 'in')
};

function watering(pump, sensor) 
{
    while (sensor.readSync === 0) {
        pump.write(1);
    }
    pump.write(0);
}

function checkSensorSate() {
    if (plantA.sensor.readSync === 0) {
        watering(plantA.name, plantA.pump, plantA.sensor);
        
        client.on('connect', function () {
            client.publish(plantA.name, '1')
            client.end()
          })

    } else if (plantB.sensor.readSync === 0) {
        watering(plantB.name, plantB.pump, plantB.sensor);

        client.on('connect', function () {
            client.publish(plantB.name, '1')
            client.end()
          })
                 

    } else {
        console.log("Plants properly watered"); 
        client.on('connect', function () {
            client.publish('plants', 'Everything ok')
            client.end()
            })     
    }

}

checkSensorSate();
